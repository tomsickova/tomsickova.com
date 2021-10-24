import lightGallery from 'lightgallery'

declare module 'vue/types/vue' {
  // this.<foo> inside Vue components
  interface Vue {
    $lightGallery: typeof lightGallery
  }
}

declare module '@nuxt/types' {
  // nuxtContext.app.<foo> inside asyncData, fetch, plugins, middleware, nuxtServerInit
  interface NuxtAppOptions {}
  // nuxtContext.<foo>
  interface Context {}
}

export type Link = {
  url: string
  label: string
}

export type Image = {
  url: string
}

export type Gallery = {
  title: string
  slug: string
  thumbnail: Image
  images: Image[]
}
