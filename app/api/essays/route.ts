export const dynamic = 'force-dynamic'
import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET() {
  const { data } = await supabase
    .from('essays')
    .select('*')
    .order('created_at', { ascending: false })

  return NextResponse.json(data ?? [])
}

export async function POST(req: NextRequest) {
  const { title, content } = await req.json()

  if (!title || !content) {
    return NextResponse.json({ error: '제목과 내용을 입력해주세요' }, { status: 400 })
  }

  const { data, error } = await supabase
    .from('essays')
    .insert([{ title, content, is_public: true }])
    .select()

  if (error) {
    console.error("INSERT ERROR:", error)
    return NextResponse.json({ error }, { status: 500 })
  }

  return NextResponse.json({ success: true, data })
}