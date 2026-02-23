import { NextRequest, NextResponse } from 'next/server'
import { getAllEssays, createEssay } from '@/lib/essays'

export async function GET() {
  return NextResponse.json(getAllEssays())
}

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { title, body: content, category, tags, isPublic } = body

  if (!title || !content) {
    return NextResponse.json({ error: '제목과 본문은 필수입니다.' }, { status: 400 })
  }

  const essay = createEssay({ title, body: content, category, tags: tags ?? [], isPublic: isPublic ?? true })
  return NextResponse.json(essay, { status: 201 })
}
