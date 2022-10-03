import React from 'react'

export const externalLink = {
  name: 'link',
  title: 'External Link',
  type: 'object',
  fields: [
    {
      name: 'href',
      title: 'URL',
      type: 'url'
    },
    {
      name: 'blank',
      title: 'Open link in new tab',
      type: 'boolean',
      initialValue: true
    }
  ],
  blockEditor: {
    icon: () => <div>🌏</div>,
    render: ({ children }) => <span>{children}🌏</span>
  }
}

export const internalLink = {
  name: 'internalLink',
  title: 'Internal Link',
  type: 'object',
  fields: [
    {
      name: 'pageRef',
      type: 'reference',
      title: 'Page to link to',
      to: [
        { type: 'collectionIndex' },
        { type: 'home' },
        { type: 'page' },
        { type: 'post' }
      ],
      validation: Rule => Rule.required()
    }
  ],
  blockEditor: {
    icon: () => <div>🔗</div>,
    render: ({ children }) => <span>{children}🔗</span>
  }
}
