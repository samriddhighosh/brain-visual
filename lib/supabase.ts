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
