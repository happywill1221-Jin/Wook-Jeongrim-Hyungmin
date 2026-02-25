import { NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export async function POST(req: Request) {
  try {
    const { title, content } = await req.json()

    const { data, error } = await supabase
      .from("posts")
      .insert([
        {
          title,
          content,
        },
      ])
      .select()

    console.log("INSERT RESULT:", data, error)

    if (error) {
      console.error("INSERT ERROR:", error)
      return NextResponse.json({ error }, { status: 500 })
    }

    return NextResponse.json({ success: true, data })
  } catch (err) {
    console.error("SERVER ERROR:", err)
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}