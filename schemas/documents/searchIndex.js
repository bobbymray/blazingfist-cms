export default {
  name: 'searchIndex',
  title: 'Search - Index All',
  type: 'document',
  fields: [
    {
      name: 'increment',
      title: 'Change This Number, Then Click Publish',
      description: 'Republish this document when you want to trigger a reindexing of the site search.',
      type: 'number',
      initialValue: 1
    }
  ],
  preview: {
    prepare: _ => ({ title: 'Search - Index All' })
  }
}
