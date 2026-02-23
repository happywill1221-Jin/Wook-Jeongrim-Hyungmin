'use client'

import EssayCard from './EssayCard'

interface Props {
  essays: any[]
}

export default function EssayList({ essays }: Props) {
  return (
    <div>
      {essays.map((essay) => (
        <EssayCard key={essay.id} essay={essay} />
      ))}
    </div>
  )
}