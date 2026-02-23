'use client'
import Link from 'next/link'

interface Props {
  isAdmin: boolean
  totalCount: number
  publicCount: number
}

export default function Header({ isAdmin, totalCount, publicCount }: Props) {
  return (
    <header className="header">
      <div className="header-inner">
        <div>
          <Link href={isAdmin ? '/?admin=1' : '/'}>
            <div className="logo">나의 <span>에세이</span></div>
          </Link>
          <div className="logo-sub">MY ESSAY ARCHIVE</div>
        </div>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          {isAdmin ? (
            <>
              <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>
                전체 {totalCount}편 · 공개 {publicCount}편
              </span>
              <Link href="/editor/new">
                <button className="btn btn-primary">+ 새 에세이</button>
              </Link>
              <Link href="/">
                <button className="btn btn-ghost">읽기 모드</button>
              </Link>
            </>
          ) : (
            <Link href="/?admin=1">
              <button className="btn btn-ghost">관리</button>
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}
