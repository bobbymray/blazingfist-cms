import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Documents

import blog from './documents/blog'
import category from './documents/category'
import collectionIndex from './documents/collectionIndex'
import home from './documents/home'
import navFooter from './documents/navFooter'
import navHeader from './documents/navHeader'
import page from './documents/page'
import pageNotFound from './documents/pageNotFound'
import searchIndex from './documents/searchIndex'
import siteSettings from './documents/siteSettings'

// Objects

import navItem from './objects/navItem'
import picture from './objects/picture'
import ptBasic from './objects/ptBasic'
import ptLoaded from './objects/ptLoaded'
import quote from './objects/quote'
import section from './objects/section'
import youtube from './objects/youtube'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([

    // Documents
    blog,
    category,
    collectionIndex,
    home,
    navFooter,
    navHeader,
    page,
    pageNotFound,
    searchIndex,
    siteSettings,

    // Objects
    navItem,
    picture,
    ptBasic,
    ptLoaded,
    quote,
    section,
    youtube
  ])
})
