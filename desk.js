import S from '@sanity/desk-tool/structure-builder'
import Iframe from 'sanity-plugin-iframe-pane'

// Icons
import {
  MdBookmark,
  MdHome,
  MdLanguage,
  MdMenu,
  MdSearch,
  MdSettings,
  MdWarning
} from 'react-icons/md'

const previewBaseURL = 'https://example.com'

const previewTypes = {
  collectionIndex: {
    hasSlug: true,
    permalinkBase: ''
  },
  home: {
    hasSlug: false,
    permalinkBase: ''
  },
  page: {
    hasSlug: true,
    permalinkBase: ''
  },
  post: {
    hasSlug: true,
    permalinkBase: 'blog'
  }
}

export const getDefaultDocumentNode = ({ schemaType }) => {
  if (previewTypes[schemaType]) {
    return S.document().views([
      S.view.form(),
      previewView(previewTypes[schemaType])
    ])
  }

  return S.document()
}

export default () =>
  S.list()
    .title('Content')
    .id('content')
    .items([

      singleDoc('Home', 'home', MdHome, 'home'),

      S.divider(),

      multiDoc('Pages', 'page', MdBookmark),

      S.divider(),

      S.listItem()
        .title('Blog')
        .icon(MdMenu)
        .child(
          S.list()
            .title('Blog')
            .items([
              singleDoc('Index', 'collectionIndex', MdHome),
              multiDoc('Posts', 'post', MdMenu)
            ])
        ),

      S.divider(),

      S.listItem()
        .title('Global')
        .icon(MdLanguage)
        .child(
          S.list()
            .title('Global')
            .items([
              singleDoc('Settings / SEO', 'siteSettings', MdSettings),
              singleDoc('404 Page', 'pageNotFound', MdWarning)
            ])
        )
    ])

function singleDoc (text, type, icon) {
  const views = [S.view.form()]

  if (previewTypes[type]) {
    views.push(previewView(previewTypes[type]))
  }

  return S.listItem()
    .title(text)
    .schemaType(type)
    .icon(icon)
    .child(
      S.document()
        .title(text)
        .schemaType(type)
        .documentId(type)
        .views(views)
    )
}

function multiDoc (text, type, icon) {
  return S.listItem()
    .title(text)
    .icon(icon)
    .schemaType(type)
    .child(S.documentTypeList(type).title(text))
}

function previewView (preview) {
  const previewUrl = (permalinkBase, slug) => [
    previewBaseURL,
    'preview',
    permalinkBase,
    slug
  ].filter(Boolean).join('/') + '/'

  return S.view
    .component(Iframe)
    .options({
      url: doc => previewUrl(
        preview.permalinkBase,
        preview.hasSlug ? doc.slug.current : preview.slugField ? doc[preview.slugField] : ''
      ),
      reload: {
        button: true
      }
    })
    .title('Preview')
}
