export default {
  name: 'pageNotFound',
  title: 'Page Not Found',
  type: 'document',
  fields: [
    {
      name: 'content',
      title: 'Content',
      type: 'text',
      rows: 4
    }
  ],
  preview: {
    prepare: () => ({ title: '404 Page' })
  }
}
