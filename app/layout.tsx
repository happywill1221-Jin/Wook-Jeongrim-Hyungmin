"use client"

import "./globals.css"
import Link from "next/link"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [bgImage, setBgImage] = useState("")

  // ✅ 시간에 따른 배경 변경
  useEffect(() => {
    const hour = new Date().getHours()

    if (hour >= 5 && hour < 12) {
      setBgImage("https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop") // morning
    } else if (hour >= 12 && hour < 18) {
      setBgImage("https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2070&auto=format&fit=crop") // afternoon
    } else {
      setBgImage("https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2070&auto=format&fit=crop") // night
    }
  }, [])

  return (
    <html lang="ko">
      <body className="relative min-h-screen text-neutral-900 antialiased">

        {/* ✅ 배경 */}
        <div
          className="fixed inset-0 -z-20 bg-cover bg-center transition-all duration-1000"
          style={{ backgroundImage: `url(${bgImage})` }}
        />

        {/* ✅ 전체 블러 */}
        <div className="fixed inset-0 -z-10 backdrop-blur-2xl bg-white/30" />

        {/* ✅ 유리 패널 + 스크롤 애니메이션 */}
        <motion.div
          initial={{ scale: 0.97, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileInView={{ scale: 1.02 }}
          className="max-w-4xl mx-auto px-10 py-16 my-20
                     bg-white/40 backdrop-blur-xl
                     border border-white/40
                     rounded-3xl
                     shadow-2xl"
        >

          {/* Header */}
          <header className="flex justify-between items-center mb-24">
            <Link
              href="/"
              className="text-sm tracking-wide text-neutral-700 hover:text-black transition"
            >
              Wook_Jeongrim_Hyungmin
            </Link>

            <div className="flex items-center gap-8 text-sm text-neutral-600">
              <Link href="/editor/new" className="hover:text-black transition">
                Write
              </Link>
            </div>
          </header>

          {children}

        </motion.div>

      </body>
    </html>
  )
}