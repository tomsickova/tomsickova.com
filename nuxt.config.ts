import tailwindcss from '@tailwindcss/vite'
import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
  compatibilityDate: '2026-11-12',

  modules: ['@nuxt/content', '@nuxtjs/i18n', 'nuxt-gtag'],

  vite: {
    plugins: [tailwindcss(), svgLoader()],
  },

  css: ['~/assets/css/main.css', 'lightgallery/css/lightgallery.css'],

  i18n: {
    locales: [
      { code: 'cs', file: 'cs.json' },
      { code: 'en', file: 'en.json' },
    ],
    defaultLocale: 'cs',
    langDir: 'lang',
  },

  content: {
    experimental: {
      sqliteConnector: 'native',
    },
    renderer: {
      anchorLinks: false,
    },
  },

  gtag: {
    id: 'G-7TVPHEB2N9',
  },
})
