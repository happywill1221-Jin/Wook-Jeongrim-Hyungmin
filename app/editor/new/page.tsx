import { getEssayById } from '@/lib/essays'
import { notFound } from 'next/navigation'
import EditorForm from '@/components/EditorForm'

export default async function EditorPage({
  params,
}: {
  params: { id: string }
}) {
  const essay = await getEssayById(params.id)

  if (!essay) {
    notFound()
  }

  return <EditorForm essay={essay} />
}