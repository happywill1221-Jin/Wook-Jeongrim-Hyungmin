"use client"
export const dynamic = 'force-dynamic'

import { useState } from "react"

export default function WritePage() {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    const res = await fetch("/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content }),
    })

    console.log("STATUS:", res.status)
  }

  return (
    <main className="max-w-xl mx-auto py-24 px-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border p-2"
        />

        <textarea
          placeholder="내용"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full border p-2"
        />

        <button
          type="submit"
          className="bg-black text-white px-4 py-2"
        >
          저장
        </button>
      </form>
    </main>
  )
}