import lightGallery from 'lightgallery'

export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      lightGallery,
    },
  }
})
