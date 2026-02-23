export const metadata = {
  title: 'Essay Homepage',
  description: 'A simple essay archive',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily: 'Georgia, serif',
          backgroundColor: '#f9f9f9',
          color: '#222',
        }}
      >
        <div
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '60px 20px',
          }}
        >
          {children}
        </div>
      </body>
    </html>
  )
}