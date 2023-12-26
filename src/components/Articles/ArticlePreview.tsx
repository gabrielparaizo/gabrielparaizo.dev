"use client"
import { Article } from "contentlayer/generated"
import Link from "next/link"

export default function ArticlePreview(article: Article) {
  const formattedDate = new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(new Date(article.date))
  return (
    <section>
      <article className='lg:grid lg:grid-cols-4'>
        <section>
          <time dateTime={article.date}>{formattedDate}</time>
        </section>
        <section className='flex flex-col gap-5 col-span-3'>
          <Link href={article.url}>
            <h1 className='text-4xl font-semibold'>{article.title}</h1>
          </Link>
          <p className='text-neutral-400'>{article.subtitle}</p>
          <Link href={article.url}>
            <button type="button" className='px-3 py-1 rounded-full border-neutral-600 bg-neutral-600/30 text-sm'>Read more</button>
          </Link>
        </section>
      </article>
    </section>
  )
}