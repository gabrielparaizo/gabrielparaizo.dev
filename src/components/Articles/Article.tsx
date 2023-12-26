"use client"

import { allArticles } from "contentlayer/generated"
import ArticlePreview from "./ArticlePreview"

export default function Article() {
  const articles = allArticles.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
  return (
    <section className="flex flex-col gap-20 px-6 md:px-16 max-w-6xl mx-auto py-20 h-full">
      <header className="flex flex-col gap-3">
        <h1 className="text-4xl md:text-5xl font-semibold">Latest news and articles</h1>
        <p className="text-neutral-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id doloremque blanditiis fugit a cumque. Eligendi facilis veritatis provident totam magnam.</p>
      </header>
      <div className='flex flex-col gap-20'>
        {articles.map((article, idx) => (
          <ArticlePreview key={idx} {...article} />
        ))}
      </div>
    </section>
  )
}