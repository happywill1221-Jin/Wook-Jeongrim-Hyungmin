import { notFound } from "next/navigation"
import { getPost } from "@/lib/posts"

export default function PostPage({ params }: { params: { id: string } }) {
  const post = getPost(params.id)

  if (!post) return notFound()

  return (
    <article className="space-y-8">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">
          {post.title}
        </h1>
        <p className="mt-2 text-sm text-neutral-400">
          {post.date}
        </p>
      </div>

      <p className="text-neutral-700 leading-relaxed">
        {post.content}
      </p>
    </article>
  )
}