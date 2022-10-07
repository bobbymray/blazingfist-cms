export default {
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' }
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string'
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'text',
      rows: 4
    },
    {
      name: 'content',
      title: 'Content',
      type: 'ptLoaded'
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            { type: 'category' }
          ]
        }
      ]
    },
    {
      name: 'picture',
      title: 'Featured Image',
      type: 'picture',
      description: 'Displays in page header, linked cards, and collections lists. Will also be used for SEO and social media sharing.'
    }
  ],
  preview: {
    select: { title: 'title', slug: 'slug.current' },
    prepare: ({ slug, title }) => ({
      title,
      subtitle: `/blog/${slug}/`
    })
  }
}

