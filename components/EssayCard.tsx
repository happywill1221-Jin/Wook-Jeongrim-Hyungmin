'use client'

import Link from 'next/link'

export default function EssayCard({ essay }: { essay: any }) {
  const preview =
    essay.body.slice(0, 200) +
    (essay.body.length > 200 ? '…' : '')

  return (
    <div
      style={{
        background: 'white',
        padding: '24px',
        borderRadius: '12px',
        marginBottom: '24px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
        transition: 'transform 0.2s ease',
      }}
    >
      <Link
        href={`/essays/${essay.id}`}
        style={{
          textDecoration: 'none',
          color: 'inherit',
        }}
      >
        <h2
          style={{
            marginBottom: '12px',
            fontSize: '24px',
          }}
        >
          {essay.title}
        </h2>
      </Link>

      <p
        style={{
          lineHeight: 1.6,
          color: '#555',
        }}
      >
        {preview}
      </p>
    </div>
  )
}