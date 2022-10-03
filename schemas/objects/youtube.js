import React from 'react'

export default {
  name: 'youtube',
  title: 'Youtube',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Required',
      validation: Rule => Rule.error('A Video iFrame requires a title.').required()
    },
    {
      name: 'id',
      title: 'Video ID',
      type: 'string',
      description: 'Required',
      validation: Rule => Rule.error('Video ID is required.').required()
    }
  ],
  preview: {
    select: { id: 'id', title: 'title' },
    prepare: ({ id, title }) => {
      const mediaSrc = `https://img.youtube.com/vi/${id}/mqdefault.jpg`//
      return {
        title,
        media: () => <img src={mediaSrc} />
      }
    }
  }
}
