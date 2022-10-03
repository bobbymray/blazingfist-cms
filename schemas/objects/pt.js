import { externalLink, internalLink } from './annotations'

export const pt = {
  type: 'block',
  styles: [
    { title: 'Normal', value: 'normal' },
    { title: 'H2', value: 'h2' },
    { title: 'H3', value: 'h3' }
  ],
  marks: {
    decorators: [
      { title: "Strong", value: "strong" },
      { title: "Emphasis", value: "em" }
    ],
    annotations: [externalLink, internalLink]
  }
}
