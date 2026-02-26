import "./globals.css"
import Link from "next/link"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className="relative min-h-screen text-neutral-900 antialiased overflow-x-hidden">

        {/* Background */}
        <div className="fixed inset-0 -z-30 bg-gradient-to-br from-slate-200 to-slate-300" />
        <div className="fixed inset-0 -z-20 bg-white/40" />

        {/* Glass Container */}
        <div
          className="relative max-w-5xl mx-auto px-10 py-16 my-20
                     bg-white/55 backdrop-blur-xl
                     border border-white/40
                     rounded-[40px]
                     shadow-[0_25px_60px_-15px_rgba(0,0,0,0.25)]"
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
              <Link href="/" className="hover:text-black transition">
                Home
              </Link>
              <Link href="/write" className="hover:text-black transition">
                Write
              </Link>
            </div>
          </header>

          {/* Content */}
          <div className="relative z-10">
            {children}
          </div>

        </div>

      </body>
    </html>
  )
}