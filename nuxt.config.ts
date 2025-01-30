import svgLoader from 'vite-svg-loader'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  compatibilityDate: '2025-01-30',

  modules: ['@nuxt/content', '@nuxtjs/i18n', '@nuxtjs/tailwindcss', 'nuxt-gtag'],

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
    langDir: 'lang',
  },

  // https://content.nuxtjs.org/api/configuration
  content: {
    renderer: {
      anchorLinks: false,
    },
  },

  gtag: {
    id: 'G-7TVPHEB2N9',
  },
})
