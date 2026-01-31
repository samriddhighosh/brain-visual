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
