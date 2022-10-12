export default {
  title: 'Navigation Item',
  name: 'navItem',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The text users see and click on. E.g. "About".',
      validation: Rule => Rule.error('Title is required.').required()
    },
    {
      name: 'page',
      title: 'Page',
      type: 'reference',
      description: 'Select a Page from the CMS.',
      to: [
        { type: 'blog' },
        { type: 'category' },
        { type: 'collectionIndex' },
        { type: 'home' },
        { type: 'page' }
      ],
      validation: Rule => Rule.error('Menu Page is required.').required()
    }
  ],
  preview: {
    select: { title: 'title', ref: 'page' },
    prepare: ({ title, ref }) => (
      { title: ref ? title : 'Please select a page to link to.' }
    )
  }
}
