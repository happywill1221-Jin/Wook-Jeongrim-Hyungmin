"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

export default function NewEssayPage() {
  const router = useRouter()
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSave() {
    if (!title.trim() || !content.trim()) {
      alert("제목과 내용을 모두 입력하세요.")
      return
    }

    setLoading(true)

    try {
      const res = await fetch("/api/essays", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
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
      alert("오류가 발생했습니다")
      setLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">새 에세이</h1>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="제목을 입력하세요"
        className="w-full border-b border-gray-300 pb-2 outline-none text-lg"
      />

      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="여기에 글을 작성하세요..."
        className="w-full h-64 border border-gray-200 rounded p-4 outline-none"
      />

      <button
        type="button"
        onClick={handleSave}
        disabled={loading}
        className="bg-black text-white px-6 py-2 rounded disabled:opacity-50"
      >
        {loading ? "저장 중..." : "저장하기"}
      </button>
    </div>
  )
}