export default {
  name: 'quote',
  title: 'Quote',
  type: 'object',
  fields: [
    {
      title: 'Content',
      name: 'content',
      type: 'text',
      rows: 5
    },
    {
      title: 'Author',
      name: 'author',
      type: 'string'
    },
    {
      title: 'Author Information',
      name: 'authorInfo',
      type: 'string'
    },
    {
      title: 'Author Link',
      name: 'authorLink',
      type: 'url'
    }
  ],
  preview: {
    select: {
      title: 'author'
    }
  }
}
