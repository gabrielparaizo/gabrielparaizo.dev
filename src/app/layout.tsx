import type { Metadata } from 'next'
import { Lexend } from 'next/font/google'
import './globals.css'

const lexend = Lexend({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gabriel Paraizo',
  description: 'My personal website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='h-screen flex flex-col bg-zinc-950 text-base text-zinc-100 antialiased scroll-smooth'>
      <body className={`${lexend.className} flex flex-col flex-1`}>
        <header>
          navbar
        </header>
        <main className='flex-1'>
          {children}
        </main>
        <footer>
          footer
        </footer>
      </body>
    </html>
  )
}
