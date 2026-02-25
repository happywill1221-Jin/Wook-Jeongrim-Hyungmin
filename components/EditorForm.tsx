'use client'

import { useState } from 'react'

interface Essay {
  id: string
  title: string
  body: string
  category: string
  tags: string[]
  isPublic: boolean
}

interface Props {
  essay?: Essay
}

export default function EditorForm({ essay }: Props) {
  const [title, setTitle] = useState(essay?.title || '')
  const [body, setBody] = useState(essay?.body || '')

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold tracking-tight">
          {essay ? '에세이 수정' : '새 에세이'}
        </h1>

        <div className="space-x-3">
          <button className="px-4 py-2 text-sm text-neutral-600 hover:text-black transition">
            취소
          </button>
          <button className="px-5 py-2 bg-black text-white text-sm rounded-full hover:opacity-90 transition">
            저장
          </button>
        </div>
      </div>

      <input
        type="text"
        placeholder="제목을 입력하세요"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full text-4xl font-semibold placeholder-neutral-300 focus:outline-none"
      />

      <textarea
        placeholder="생각, 경험, 통찰을 자유롭게 써 내려가세요."
        value={body}
        onChange={(e) => setBody(e.target.value)}
        rows={15}
        className="w-full text-lg leading-relaxed placeholder-neutral-300 focus:outline-none resize-none"
      />
    </div>
  )
}