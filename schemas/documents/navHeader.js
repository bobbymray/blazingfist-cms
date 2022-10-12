export default {
  name: 'navHeader',
  title: 'Navigation: Header',
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
