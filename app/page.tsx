import { getPublicEssays, getAllEssays } from '@/lib/essays'

export default async function HomePage({
  searchParams,
}: {
  searchParams: { admin?: string; cat?: string; q?: string }
}) {
  const isAdmin = searchParams.admin === '1'

  const essays = isAdmin
    ? await getAllEssays()
    : await getPublicEssays()

  const filterCat = searchParams.cat ?? '전체'
  const query = searchParams.q ?? ''

  const filtered = essays.filter((e: any) => {
    if (filterCat !== '전체' && e.category !== filterCat) return false

    if (query) {
      const q = query.toLowerCase()
      return (
        e.title.toLowerCase().includes(q) ||
        e.body.toLowerCase().includes(q) ||
        e.tags.some((t: string) =>
          t.toLowerCase().includes(q)
        )
      )
    }

    return true
  })

  return (
    <div>
      <h1
  style={{
    fontSize: '42px',
    marginBottom: '40px',
  }}
>
  Essay Archive
</h1>