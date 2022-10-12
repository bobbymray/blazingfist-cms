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
      name: 'publishDate',
      title: 'Publish Date',
      type: 'date'
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
    select: { date: 'publishDate', title: 'title' },
    prepare: ({ date = 'No Publish Date Entered', title }) => ({
      title,
      subtitle: date
    })
  },
  orderings: [
    {
      title: 'Publish Date, Newest',
      name: 'dateDesc',
      by: [
        { field: 'publishDate', direction: 'desc' }
      ]
    },
    {
      title: 'Publish Date, Oldest',
      name: 'dateAsc',
      by: [
        { field: 'publishDate', direction: 'asc' }
      ]
    },
    {
      title: 'Title, A-Z',
      name: 'titleAsc',
      by: [
        { field: 'title', direction: 'asc' }
      ]
    },
    {
      title: 'Title, Z-A',
      name: 'titleDesc',
      by: [
        { field: 'title', direction: 'desc' }
      ]
    }
  ]
}

