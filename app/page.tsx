export const dynamic = "force-dynamic"

import { supabase } from "@/lib/supabase"
import Link from "next/link"
import { motion } from "framer-motion"

export default async function Page() {
  const { data: essays } = await supabase
    .from("essays")
    .select("*")
    .order("created_at", { ascending: false })

  return (
    <div className="p-10 space-y-6">
      {posts?.map((post) => (
        <motion.article
          key={post.id}
          whileHover={{ y: -4 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="group p-8 rounded-3xl bg-white shadow-sm hover:shadow-xl transition-all duration-300"
        >
          <Link href={`/posts/${post.id}`}>
            <h2 className="text-2xl font-semibold mb-4 group-hover:text-neutral-600 transition">
              {post.title}
            </h2>
          </Link>

          <p className="text-sm text-neutral-400">
            {new Date(post.created_at).toLocaleDateString()}
          </p>
        </motion.article>
      ))}
    </div>
  )
}