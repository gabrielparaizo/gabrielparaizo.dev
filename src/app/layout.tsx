import type { Metadata } from 'next'
import { Lexend } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'

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
    <html lang="en" className='h-screen flex flex-col bg-neutral-950 text-base text-neutral-100 antialiased scroll-smooth'>
      <body className={`${lexend.className} flex flex-col flex-1`}>
        <header>
          <nav>
            <Navbar />
          </nav>
        </header>
        <main className='flex-1'>
          {children}
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  )
}
