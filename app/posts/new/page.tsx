"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Editor() {
  const router = useRouter()

  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    console.log("🔥 SUBMIT CLICKED")

    if (!title.trim() || !content.trim()) {
      alert("제목과 내용을 모두 입력하세요.")
      return
    }

    try {
      setLoading(true)

      const res = await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content }),
      })

      if (!res.ok) {
        alert("저장 실패")
        setLoading(false)
        return
      }

      alert("저장 성공 ✅")
      router.push("/")
      router.refresh()

    } catch (err) {
      console.error(err)
      alert("오류 발생")
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8 max-w-3xl">
      <h1 className="text-2xl font-semibold">
        새 에세이
      </h1>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="제목을 입력하세요"
        className="w-full border-b border-neutral-300 pb-2 outline-none"
      />

      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="여기에 글을 작성하세요..."
        className="w-full h-64 border border-neutral-200 p-4 outline-none"
      />

      <button
        type="submit"
        disabled={loading}
        className="bg-black text-white px-6 py-2 rounded disabled:opacity-50"
      >
        {loading ? "저장 중..." : "저장하기"}
      </button>
    </form>
  )
}