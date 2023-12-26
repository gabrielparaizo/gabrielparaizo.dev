"use client"

import Image from "next/image";
import { useMDXComponent } from "next-contentlayer/hooks";

const components = {
  p: ({ ...props }) => (
    <p className="text-neutral-400 m-0 col-start-2" {...props} />
  ),
  h2: ({ ...props }) => (
    <h2 className="m-0 col-start-2" {...props} />
  ),
  h3: ({ ...props }) => (
    <h3 className="m-0 col-start-2" {...props} />
  ),
  blockquote: ({ ...props }) => (
    <blockquote className="m-0 col-start-2" {...props} />
  ),
  ul: ({ ...props }) => (
    <ul className="m-0 col-start-2" {...props} />
  ),
  pre: ({ ...props }) => (
    <pre className="rounded-lg border bg-neutral-900 border-neutral-800 m-0 col-start-2" {...props} />
  ),
  img: ({ ...props }) => (
    <img className="col-span-full aspect-[16/10] w-full h-full object-cover rounded-lg border border-neutral-800" {...props} />
  ),
  Image: ({ ...props }) => (
    <Image className="col-span-full aspect-[16/10] w-full h-[inherit] object-cover rounded-lg border border-neutral-800" {...props} />
  )
}

interface MDXProps {
  code: string
}

export function MDX({ code }: MDXProps) {
  const Component = useMDXComponent(code)
  return (
    <div className="prose prose-invert prose-neutral max-w-none md:grid md:grid-cols-[2fr_75ch_2fr] space-y-6">
      <Component components={components} />
    </div>
  )
}