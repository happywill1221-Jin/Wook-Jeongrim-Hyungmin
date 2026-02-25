"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { getPosts } from "@/lib/posts"

export default function HomePage() {
  const posts = getPosts()

  return (
    <main className="px-6 py-24 max-w-5xl mx-auto">

      {/* Hero */}
      <section className="mb-24">
        <h1 className="text-5xl font-semibold tracking-tight mb-6">
          Our Family's
        </h1>
        <p className="text-lg text-neutral-600 max-w-2xl">
          Thoughts, essays, and quiet reflections on life and work.
        </p>
      </section>

      {/* Family Photo Section */}
      <section className="mb-32 flex justify-center">
        <div className="w-full max-w-2xl">
          <Image
            src="/family.jpg"
            alt="Family"
            width={1400}
            height={900}
            priority
            unoptimized
            className="rounded-3xl shadow-2xl object-cover w-full h-auto"
          />
        </div>
      </section>

      {/* Posts */}
      <section className="space-y-16">
        {posts.map((post) => (
          <motion.article
            key={post.id}
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="p-6 rounded-2xl bg-white/30 backdrop-blur-md border border-white/40"
          >
            <Link href={`/posts/${post.id}`}>
              <h2 className="text-2xl font-medium mb-3">
                {post.title}
              </h2>
            </Link>
            <p className="text-sm text-neutral-500">
              {post.date}
            </p>
          </motion.article>
        ))}
      </section>

    </main>
  )
}