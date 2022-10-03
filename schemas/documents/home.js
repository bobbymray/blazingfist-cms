export default {
  name: 'home',
  title: 'Home',
  type: 'document',
  fields: [
    {
      name: 'content',
      title: 'Content',
      type: 'ptLoaded'
    }
  ],
  preview: {
    prepare: _ => ({ title: 'Home Page' })
  }
}
