import "./globals.css"

export const metadata = {
  title: "Wook_Jeongrim_Hyungmin",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="bg-gray-50 min-h-screen">
        <header className="border-b bg-white">
          <div className="max-w-3xl mx-auto px-6 py-4 flex justify-between items-center">
            <a href="/" className="font-bold text-lg">Wook_Jeongrim_Hyungmin</a>
            <a href="/editor/new" className="text-sm text-blue-600 hover:underline">Write</a>
          </div>
        </header>
        <main className="max-w-3xl mx-auto px-6 py-10">
          {children}
        </main>
      </body>
    </html>
  )
}