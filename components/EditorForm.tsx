'use client'

import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { CATEGORIES } from '@/lib/constants'

interface Props {
  essay?: {
    id: string; title: string; body: string
    category: string; tags: string[]; isPublic: boolean
  }
}

export default function EditorForm({ essay }: Props) {
  const router = useRouter()
  const [title, setTitle] = useState(essay?.title ?? '')
  const [body, setBody] = useState(essay?.body ?? '')
  const [category, setCategory] = useState(essay?.category ?? CATEGORIES[0])
  const [tags, setTags] = useState(essay?.tags?.join(', ') ?? '')
  const [isPublic, setIsPublic] = useState(essay?.isPublic ?? true)
  const [saving, setSaving] = useState(false)
  const taRef = useRef<HTMLTextAreaElement>(null)

  // auto-resize textarea
  useEffect(() => {
    if (taRef.current) {
      taRef.current.style.height = 'auto'
      taRef.current.style.height = taRef.current.scrollHeight + 'px'
    }
  }, [body])

  const wordCount = body.trim().split(/\s+/).filter(Boolean).length

  async function handleSave() {
    if (!title.trim() || !body.trim()) {
      alert('제목과 본문을 입력해주세요.')
      return
    }
    setSaving(true)
    const tagList = tags.split(',').map(t => t.trim()).filter(Boolean)
    const payload = { title, body, category, tags: tagList, isPublic }

    const url = essay ? `/api/essays/${essay.id}` : '/api/essays'
    const method = essay ? 'PUT' : 'POST'

    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    if (res.ok) {
      router.push('/?admin=1')
      router.refresh()
    } else {
      alert('저장에 실패했습니다.')
      setSaving(false)
    }
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)' }}>
      {/* 에디터 상단 바 */}
      <div className="editor-bar">
        <span style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 17, color: 'var(--gold)', letterSpacing: 1,
        }}>
          {essay ? '에세이 수정' : '새 에세이'}
        </span>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>{wordCount} 단어</span>
          <button
            className="btn btn-ghost"
            onClick={() => router.back()}
            style={{ padding: '8px 16px' }}
          >취소</button>
          <button
            className="btn btn-primary"
            onClick={handleSave}
            disabled={saving}
            style={{ padding: '8px 20px', opacity: saving ? 0.7 : 1 }}
          >
            {saving ? '저장 중…' : '저장'}
          </button>
        </div>
      </div>

      {/* 메타 정보 */}
      <div style={{
        maxWidth: 820, margin: '0 auto', padding: '90px 32px 0',
      }}>
        <div style={{ display: 'flex', gap: 12, marginBottom: 32, flexWrap: 'wrap', alignItems: 'center' }}>
          <select
            value={category}
            onChange={e => setCategory(e.target.value)}
            style={{ minWidth: 120 }}
          >
            {CATEGORIES.map(c => <option key={c}>{c}</option>)}
          </select>
          <input
            placeholder="태그 (쉼표로 구분, 예: 독서, 사유)"
            value={tags}
            onChange={e => setTags(e.target.value)}
            style={{ flex: 1, minWidth: 180 }}
          />
          {/* 공개 토글 */}
          <div className="toggle-wrap" onClick={() => setIsPublic(p => !p)}>
            <div
              className="toggle-track"
              style={{ background: isPublic ? 'var(--gold)' : 'var(--border-light)' }}
            >
              <div
                className="toggle-thumb"
                style={{ left: isPublic ? 21 : 3 }}
              />
            </div>
            <span>{isPublic ? '공개' : '비공개'}</span>
          </div>
        </div>

        {/* 제목 */}
        <input
          className="editor-title-input"
          placeholder="제목을 입력하세요"
          value={title}
          onChange={e => setTitle(e.target.value)}
          style={{ display: 'block' }}
        />

        {/* 본문 */}
        <textarea
          ref={taRef}
          className="editor-body-input"
          placeholder="에세이를 작성하세요…&#10;&#10;생각, 경험, 통찰을 자유롭게 써내려가세요."
          value={body}
          onChange={e => setBody(e.target.value)}
          style={{ display: 'block', paddingBottom: 80 }}
        />
      </div>
    </div>
  )
}
