import { NextRequest, NextResponse } from 'next/server'
import { getEssayById, updateEssay, deleteEssay } from '@/lib/essays'

export async function GET(_: NextRequest, { params }: { params: { id: string } }) {
  const essay = getEssayById(params.id)
  if (!essay) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  return NextResponse.json(essay)
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const body = await req.json()
  const updated = updateEssay(params.id, body)
  if (!updated) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  return NextResponse.json(updated)
}

export async function DELETE(_: NextRequest, { params }: { params: { id: string } }) {
  const ok = deleteEssay(params.id)
  if (!ok) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  return NextResponse.json({ success: true })
}
