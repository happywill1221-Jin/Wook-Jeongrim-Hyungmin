import { supabase } from "@/lib/supabase"

export const dynamic = "force-dynamic"

export default async function HomePage() {
  const { data: essays } = await supabase
    .from("essays")
    .select("*")
    .eq("is_public", true)
    .order("created_at", { ascending: false })

  return (
    <div>
      <h1 className="text-2xl font-bold mb-8">에세이 목록</h1>
      {(!essays || essays.length === 0) ? (
        <p className="text-gray-500">아직 작성된 에세이가 없습니다.</p>
      ) : (
        <div className="space-y-6">
          {essays.map((essay) => (
            <div key={essay.id} className="border-b pb-4">
              <h2 className="text-xl font-semibold">{essay.title}</h2>
              <p className="text-gray-600 mt-2 line-clamp-3">{essay.content}</p>
              <p className="text-sm text-gray-400 mt-2">
                {new Date(essay.created_at).toLocaleDateString("ko-KR")}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}