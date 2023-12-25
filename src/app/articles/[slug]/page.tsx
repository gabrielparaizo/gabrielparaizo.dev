import { MDX } from "@/components/MDXComponent/MDXComponent"
import { allArticles } from "contentlayer/generated"
import { ArrowLeft } from "lucide-react"
import { useMDXComponent } from "next-contentlayer/hooks"
import Link from "next/link"
import { notFound } from "next/navigation"

export default function Page({ params }: { params: { slug: string } }) {
  const article = allArticles.find((article) => article._raw.flattenedPath === params.slug)
  if (!article) notFound()

  const MDXComponent = useMDXComponent(article.body.code)
  const formattedDate = new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(new Date(article.date))
  return (
    <section className="flex flex-col gap-16 px-6 md:px-16 max-w-6xl mx-auto py-20">
      <section className="flex flex-col gap-16 col-start-2">
        <Link
          href={'/articles'}
          className="flex items-center gap-2 text-zinc-400"
        >
          <ArrowLeft />
          Back to articles
        </Link>
        <header className="flex flex-col gap-6">
          <section className="flex items-center gap-4">
            <time dateTime={article.date} className="px-2 rounded-full border border-zinc-400 text-zinc-400 self-start">{formattedDate}</time>
            <p className="text-zinc-400">8 Min read</p>
          </section>
          <h1 className="text-5xl font-semibold">{article.title}</h1>
          <section className="flex flex-col gap-3 self-start">
            <p className="text-zinc-400">Posted by</p>
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded bg-zinc-600" />
              <div className="flex flex-col gap-1">
                <h2>Fulano de tal</h2>
                <p className="text-zinc-500">@eufulanodetal</p>
              </div>
            </div>
          </section>
        </header>
        <MDX code={article.body.code} />
      </section>
    </section>
  )
}

export const generateStaticPaths = async () => {
  allArticles.map((article) => ({ url: article.url }))
}


export const generateStaticProps = async ({ params }: { params: { slug: string } }) => {
  const article = allArticles.find((article) => article.url === params.slug)

  if (!article) notFound()
  return { title: article.title }
}