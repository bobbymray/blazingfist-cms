export default {
  name: 'navFooter',
  title: 'Navigation: Footer',
  type: 'document',
  fields: [
    {
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [{ type: 'navItem' }]
    }
  ]
}
