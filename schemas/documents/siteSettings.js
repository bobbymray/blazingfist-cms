export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {
      name: 'siteTitle',
      title: 'Site Title',
      type: 'string'
    },
    {
      name: 'siteDescription',
      title: 'Site Description',
      type: 'text',
      description: 'Best kept between 100-300 characters.',
      rows: 4
    }
  ]
}
