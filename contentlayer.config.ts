import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Article = defineDocumentType(() => ({
  name: 'Article',
  filePathPattern: `**/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true
    },
    subtitle: {
      type: 'string',
      required: true
    },
    date: {
      type: 'date',
      required: true
    }
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (article) => `/articles/${article._raw.flattenedPath}`
    },
    slug: {
      type: 'string',
      resolve: (article) => article._raw.flattenedPath
    }
  }
}))

export default makeSource({
  contentDirPath: 'articles',
  documentTypes: [Article]
})