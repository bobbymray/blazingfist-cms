import React from 'react'

export default {
  name: 'picture',
  title: 'Picture',
  type: 'image',
  options: {
    hotspot: true,
    metadata: ['lqip', 'palette']
  },
  fields: [
    {
      name: 'alt',
      title: 'Alt text',
      type: 'string',
      options: {
        isHighlighted: true
      }
    },
    {
      name: 'caption',
      title: 'Caption/Attribution',
      type: 'ptBasic',
      options: {
        isHighlighted: true
      }
    }
  ],
  preview: {
    select: {
      alt: 'alt',
      imageUrl: 'asset.url'
    },
    prepare: ({ alt = 'NO ALT TEXT PROVIDED', imageUrl }) => ({
      media: <img src={imageUrl} />,
      title: alt
    })
  }
}
