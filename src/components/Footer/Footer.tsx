"use client"

import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

const navigation = [
  { name: 'Email', href: '' },
  { name: 'Linkedin', href: '' },
  { name: 'GitHub', href: '' },
]

export default function Footer() {
  return (
    <section className="w-full">
      <nav className="flex items-center justify-center lg:justify-between px-6 md:px-16 max-w-6xl mx-auto h-16">
        <h2 className="hidden lg:flex text-neutral-500">✌🏿 • Crafted by me!</h2>
        <nav className="flex items-center space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-neutral-500 hover:text-neutral-100 ease-in-out transition inline-flex gap-1"
            >
              {item.name}
              <ArrowUpRight className="h-5 w-auto text-neutral-500" />
            </Link>
          ))}
        </nav>
      </nav>
    </section>
  )
}