import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Documents

import category from './documents/category'
import collectionIndex from './documents/collectionIndex'
import home from './documents/home'
import page from './documents/page'
import pageNotFound from './documents/pageNotFound'
import post from './documents/post'
import siteSettings from './documents/siteSettings'

// Objects

import picture from './objects/picture'
import ptBasic from './objects/ptBasic'
import ptLoaded from './objects/ptLoaded'
import youtube from './objects/youtube'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([

    // Documents
    category,
    collectionIndex,
    home,
    page,
    pageNotFound,
    post,
    siteSettings,

    // Objects
    picture,
    ptBasic,
    ptLoaded,
    youtube
  ])
})