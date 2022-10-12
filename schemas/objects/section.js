export default {
  name: 'section',
  title: 'Section',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'For CMS preview only. This isn\'t used on the site.'
    },
    {
      name: 'content',
      title: 'Content',
      type: 'ptLoaded'
    },
    {
      name: 'style',
      title: 'Style',
      type: 'string',
      description: 'CSS class names to style this section.'
    },
    {
      name: 'disable',
      title: 'Disable',
      type: 'boolean',
      initialValue: false
    }
  ],
  preview: {
    select: { title: 'title', disable: 'disable' },
    prepare: ({ title, disable }) => ({
      title: `${disable ? 'DISABLED: ' : ''}${title}`
    })
  }
}
