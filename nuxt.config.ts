import svgLoader from 'vite-svg-loader'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxt/content', '@nuxtjs/i18n', '@nuxtjs/tailwindcss'],
  vite: {
    plugins: [svgLoader()],
  },
  css: ['lightgallery/css/lightgallery.css'],
  tailwindcss: {
    viewer: false,
  },
  i18n: {
    locales: [
      { code: 'cs', file: 'cs.json' },
      { code: 'en', file: 'en.json' },
    ],
    defaultLocale: 'cs',
    langDir: 'lang/',
    vueI18n: {
      locale: 'cs',
      legacy: false,
    },
  },
  // https://content.nuxtjs.org/api/configuration
  content: {
    // markdown: {
    //   anchorLinks: false,
    // },
  },
})
