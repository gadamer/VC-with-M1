// Supabase client configuration with conditional creation
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Validate URL format
function isValidUrl(string) {
  try {
    new URL(string)
    return true
  } catch (_) {
    return false
  }
}

// Check if Supabase credentials are properly configured
const isSupabaseConfigured = supabaseUrl && 
  supabaseAnonKey && 
  supabaseUrl !== 'your_supabase_url_here' && 
  supabaseAnonKey !== 'your_supabase_anon_key_here' &&
  isValidUrl(supabaseUrl)

let supabaseClient = null

// Only create client if properly configured
if (isSupabaseConfigured) {
  try {
    supabaseClient = createClient(supabaseUrl, supabaseAnonKey)
  } catch (error) {
    console.error('Failed to create Supabase client:', error)
  }
} else {
  console.warn('Supabase not configured. Please set valid VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your .env file.')
}

// Export client and configuration status
export const supabase = supabaseClient
export const isConfigured = isSupabaseConfigured
