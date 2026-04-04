import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseKey);

export const logUserEvent = async (userId: string, eventType: string) => {
    const { data, error } = await supabase.from('activity_logs').insert([{
        user_id: userId,
        event_type: eventType,
        created_at: new Date()
    }]);

    if (error) {
        console.error("Database error:", error.message);
    } else {
        console.log("Event was logged successfully:", eventType);
    }
    return { data, error };
};

//Fetches the user's analyzed interests list.
export const getUserInterests = async (userId: string) => {
    const { data, error } = await supabase.from('profiles').select('interests').eq('id', userId).single();

    if (error && error.code !== 'PGRST116') {
        console.error("Error fetching interests:", error.message);
    }
    return data?.interests || [];
};

// Updates the user's analyzed interests list.
export const updateUserInterests = async (userId: string, interests: string[]) => {
    const { data, error } = await supabase.from('profiles').upsert({ id: userId, interests, updated_at: new Date() }, { onConflict: 'id' });

    if (error) {
        console.error("Error updating interests:", error.message);
    }
    return { data, error };
};

// Updates the user's knowledge level for a specific topic.
export const updateTopicKnowledge = async (userId: string, topic: string, level: number) => {
    const { data, error } = await supabase.from('user_knowledge').upsert(
        { user_id: userId, topic, knowledge_level: level, updated_at: new Date() },
        { onConflict: 'user_id,topic' }
    );

    if (error) {
        console.error("Error updating topic knowledge:", error.message);
    }
    return { data, error };
};

// Fetches the user's knowledge levels across all topics.
export const getUserKnowledge = async (userId: string) => {
    const { data, error } = await supabase.from('user_knowledge').select('topic, knowledge_level').eq('user_id', userId);

    if (error) {
        console.error("Error fetching knowledge levels:", error.message);
    }
    return data || [];
};

export const logLessonProgress = async (
    userId: string,
    lessonId: string,
    sectionHeading: string,
    masteryScore: number,
    completionStatus: string,
    timeSpent: number,
    quizScore: number | null = null,
    retentionScore: number = 0.0,
    repetitionCount: number = 1
) => {
    const nextReview = new Date();
    nextReview.setDate(nextReview.getDate() + 1);

    const { data, error } = await supabase.from('user_lesson_progress').upsert(
        {
            user_id: userId,
            lesson_id: lessonId,
            section_heading: sectionHeading,
            mastery_score: masteryScore,
            completion_status: completionStatus,
            time_spent: timeSpent,
            last_accessed_at: new Date(),
            last_reviewed_at: new Date(),
            next_review_at: nextReview,
            quiz_score: quizScore,
            retention_score: retentionScore,
            repetition_count: repetitionCount
        },
        { onConflict: 'user_id, lesson_id, section_heading' }
    );

    if (error) {
        console.error("Error logging lesson progress:", error.message);
    }
    return { data, error };
};

/**
 * Initializes entries for all headings in a lesson for a specific user.
 * This ensures the database knows about the full structure of the lesson before progress starts.
 */
export const initializeLessonProgress = async (userId: string, lessonId: string, headings: string[]) => {
    const records = headings.map(heading => ({
        user_id: userId,
        lesson_id: lessonId,
        section_heading: heading,
        mastery_score: 0,
        completion_status: 'not_started',
        time_spent: 0,
        last_accessed_at: new Date(),
        repetition_count: 0
    }));

    const { data, error } = await supabase.from('user_lesson_progress').upsert(records, {
        onConflict: 'user_id, lesson_id, section_heading',
        ignoreDuplicates: true // Only insert if they don't exist
    });

    if (error) {
        console.error("Error initializing lesson progress:", error.message);
    }
    return { data, error };
};

// Fetches the user's progress for a specific lesson.
export const getUserLessonProgress = async (userId: string, lessonId: string) => {
    const { data, error } = await supabase.from('user_lesson_progress')
        .select('*')
        .eq('user_id', userId)
        .eq('lesson_id', lessonId);

    if (error) {
        console.error("Error fetching lesson progress:", error.message);
    }
    return data || [];
};
export const getAllUserLessonProgress = async (userId: string) => {
    const { data, error } = await supabase.from('user_lesson_progress')
        .select('*')
        .eq('user_id', userId)
        .order('last_accessed_at', { ascending: false });

    if (error) {
        console.error("Error fetching all lesson progress:", error.message);
    }
    return data || [];
};
