import { NextResponse } from "next/server"
import { addPost } from "@/lib/posts"

export async function POST(req: Request) {
  const { title, content } = await req.json()

  addPost({
    id: Date.now().toString(),
    title,
    content,
    date: new Date().toISOString().slice(0, 10),
  })

  return NextResponse.json({ success: true })
}