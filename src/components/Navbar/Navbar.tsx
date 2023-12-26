"use client"

import Link from 'next/link'
import Logo from '../../assets/logo.svg'
import Image from "next/image"
import { Command } from 'lucide-react'

const navigation = [
  { name: 'About', href: '' },
  { name: 'Articles', href: '/articles' },
  { name: 'Projects', href: '' },
  { name: 'Docs', href: '' },
  { name: 'Uses', href: '' },
]

export default function Navbar() {
  return (
    <section className='w-full'>
      <nav className='flex items-center justify-between px-6 md:px-16 max-w-6xl mx-auto h-16'>
        <figure>
          <Link href={'/'}>
            <Image src={Logo} alt="My image" />
          </Link>
        </figure>
        <nav className='hidden lg:flex items-center space-x-8'>
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className='text-neutral-500 hover:text-neutral-100 transition'
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <button type='button'>
          <Command size={24} className='text-neutral-100' />
        </button>
      </nav>
    </section>
  )
}