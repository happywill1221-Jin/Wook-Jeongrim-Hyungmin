import { getSupabase } from './supabase'

export async function getPublicEssays() {
  const supabase = getSupabase()

  const { data } = await supabase
    .from('essays')
    .select('*')
    .eq('is_public', true)
    .order('created_at', { ascending: false })

  return data ?? []
}

export async function getAllEssays() {
  const supabase = getSupabase()

  const { data } = await supabase
    .from('essays')
    .select('*')
    .order('created_at', { ascending: false })

  return data ?? []
}

export async function addEssay(essay: any) {
  const supabase = getSupabase()

  const { data, error } = await supabase
    .from('essays')
    .insert([essay])
    .select()

  if (error) throw error
  return data?.[0]
}

export async function getEssayById(id: string) {
  const supabase = getSupabase()

  const { data, error } = await supabase
    .from('essays')
    .select('*')
    .eq('id', id)
    .single()

  if (error) throw error
  return data
}

export async function createEssay(essay: any) {
  const supabase = getSupabase()

  const { data, error } = await supabase
    .from('essays')
    .insert([essay])
    .select()
    .single()

  if (error) throw error
  return data
}

export async function updateEssay(id: string, updates: any) {
  const supabase = getSupabase()

  const { data, error } = await supabase
    .from('essays')
    .update(updates)
    .eq('id', id)
    .select()
    .single()

  if (error) throw error
  return data
}

export async function deleteEssay(id: string) {
  const supabase = getSupabase()

  const { error } = await supabase
    .from('essays')
    .delete()
    .eq('id', id)

  if (error) throw error
}