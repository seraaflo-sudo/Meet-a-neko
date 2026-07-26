export const metadata = {
  title: 'Meet a Neko',
  description: 'Website kucing lucu',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
