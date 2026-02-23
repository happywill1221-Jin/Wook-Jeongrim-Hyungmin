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
    // 기존 JSX 그대로
  )
}