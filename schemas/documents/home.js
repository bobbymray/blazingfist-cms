export default {
  name: 'home',
  title: 'Home',
  type: 'document',
  fields: [
    {
      name: 'sections',
      title: 'Content',
      type: 'array',
      of: [{ type: 'section' }]
    }
  ],
  preview: {
    prepare: _ => ({ title: 'Home Page' })
  }
}
