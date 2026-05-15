import { hasSupabaseEnv, supabase } from '../lib/supabaseClient'

export async function createInquiry(payload) {
  if (!hasSupabaseEnv || !supabase) {
    throw new Error('Form is not configured yet. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in .env.')
  }

  const cleanPayload = {
    name: payload.name?.trim(),
    email: payload.email?.trim().toLowerCase(),
    phone: payload.phone?.trim() || null,
    project_type: payload.projectType,
    budget_range: payload.budgetRange?.trim() || null,
    message: payload.message?.trim(),
  }

  const { error } = await supabase.from('inquiries').insert(cleanPayload)

  if (error) {
    throw new Error(error.message)
  }
}
