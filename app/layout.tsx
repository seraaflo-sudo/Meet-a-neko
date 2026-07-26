export const metadata = {
  title: 'Meet a Neko - Private Condo',
  description: 'Join private Roblox Neko condo server',
  icons: {
    icon: 'https://i.imgur.com/8QfXbL2.png',
  }
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
