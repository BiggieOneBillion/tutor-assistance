import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://qqfhcqiyjzjcvisqwged.supabase.co'
// const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFxZmhjcWl5anpqY3Zpc3F3Z2VkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA1ODg5NzMsImV4cCI6MjAyNjE2NDk3M30.PUUxWXXrYZuYmo9dHhQvvjoVX9Maoyw9ZogTuOC01es"
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY
export const supabase = createClient(supabaseUrl, supabaseKey)