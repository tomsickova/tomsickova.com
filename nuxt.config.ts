import tailwindcss from '@tailwindcss/vite'
import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
  compatibilityDate: '2026-11-12',

  modules: ['@nuxt/content', '@nuxtjs/i18n', 'nuxt-gtag'],

  vite: {
    plugins: [tailwindcss(), svgLoader()],
    $client: {
      experimental: {
        // Nuxt's client default is new URL(file, import.meta.url), an absolute URL that mismatches the server's /_nuxt/ path on hydration
        renderBuiltUrl: (filename, { type, hostType }) => {
          if (hostType !== 'js') return { relative: true }
          if (type === 'public') {
            return { runtime: `globalThis.__publicAssetsURL(${JSON.stringify(filename)})` }
          }
          return {
            runtime: `globalThis.__buildAssetsURL(${JSON.stringify(filename.replace(/^_nuxt\//, ''))})`,
          }
        },
      },
    },
  },

  css: ['~/assets/css/main.css', 'lightgallery/css/lightgallery.css'],

  i18n: {
    locales: [
      { code: 'cs', file: 'cs.json' },
      { code: 'en', file: 'en.json' },
    ],
    defaultLocale: 'cs',
    langDir: 'lang',
    detectBrowserLanguage: false,
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
