import { Plugin } from '@nuxt/types'
import lightGallery from 'lightgallery'

const lightGalleryPlugin: Plugin = (_context, inject) => {
  inject('lightGallery', lightGallery)
}

export default lightGalleryPlugin
