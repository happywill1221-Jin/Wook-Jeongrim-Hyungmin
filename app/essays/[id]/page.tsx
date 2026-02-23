import { getEssayById } from '@/lib/essays'
import { notFound } from 'next/navigation'

export default async function EssayDetailPage({
  params,
  searchParams,
}: {
  params: { id: string }
  searchParams: { admin?: string }
}) {
  const essay = await getEssayById(params.id)
  const isAdmin = searchParams.admin === '1'

  if (!essay || (!essay.isPublic && !isAdmin)) {
    notFound()
  }

  const backHref = isAdmin ? '/?admin=1' : '/'

  return (
    <div>
      <a href={backHref}>← Back</a>
      <h1>{essay.title}</h1>
      <p>{essay.body}</p>
    </div>
  )
}