"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

export default function LoginPage() {
  const router = useRouter()
  const [password, setPassword] = useState("")

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()

    const res = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ password }),
    })

    if (res.ok) {
      router.push("/")
      router.refresh()
    } else {
      alert("비밀번호가 틀렸습니다")
    }
  }

  return (
    <form onSubmit={handleLogin} className="space-y-6">
      <h1 className="text-2xl font-semibold">관리자 로그인</h1>

      <input
        type="password"
        placeholder="비밀번호 입력"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full border-b border-neutral-300 pb-2 outline-none"
      />

      <button
        type="submit"
        className="bg-black text-white px-6 py-2 rounded"
      >
        로그인
      </button>
    </form>
  )
}