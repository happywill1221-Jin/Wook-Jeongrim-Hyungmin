"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { supabase } from "@/lib/supabase"

export default function PostPage() {
  const params = useParams()
  const [post, setPost] = useState<any>(null)

  useEffect(() => {
    if (!params?.id) return

    async function fetchPost() {
      const { data, error } = await supabase
        .from("essays") // ✅ 소문자!
        .select("*")
        .eq("id", params.id) // ✅ UUID 그대로
        .single()

      if (error) {
        console.error("FETCH ERROR:", error)
      } else {
        console.log("SUCCESS:", data)
        setPost(data)
      }
    }

    fetchPost()
  }, [params])

  if (!post) return <p className="p-10">Loading...</p>

  return (
    <main className="max-w-3xl mx-auto py-24 px-6">
      <h1 className="text-4xl font-semibold mb-6">
        {post.title}
      </h1>

      <p className="text-neutral-500 mb-10">
        {new Date(post.created_at).toLocaleDateString()}
      </p>

      <div className="prose">
        {post.content}
      </div>
    </main>
  )
}