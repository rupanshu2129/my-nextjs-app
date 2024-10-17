// lib/supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

// These values are provided by Supabase when you create a new project
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

// Initialize the Supabase client with the URL and Anon Key from your environment variables
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
