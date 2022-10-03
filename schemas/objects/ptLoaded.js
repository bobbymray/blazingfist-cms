import { pt } from './pt.js'

export default {
  name: 'ptLoaded',
  title: 'Loaded Portable Text',
  type: 'array',
  of: [
    {
      ...pt
    },
    { type: 'picture' },
    { type: 'youtube' }
  ]
}
