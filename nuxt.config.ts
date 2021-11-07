import { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
  target: 'static',
  head() {
    return {
      titleTemplate: (pageTitle: string) =>
        pageTitle ? `${pageTitle} – Tatyana Tomšíčková` : 'Tatyana Tomšíčková',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: 'https://rsms.me/inter/inter.css' },
        {
          href: 'https://fonts.googleapis.com/css?family=Amatic+SC:700',
          rel: 'stylesheet',
        },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500&display=swap',
        },
      ],
    }
  },
  css: ['lightgallery/css/lightgallery.css'],
  plugins: ['~/plugins/preview.client', '~/plugins/lightgallery.client', '~/plugins/gtag'],
  components: true,
  vue: {
    config: {
      productionTip: false,
    },
  },
  build: {
    postcss: {
      plugins: {
        'postcss-nested': {},
      },
    },
  },
  buildModules: ['@nuxt/typescript-build', '@nuxtjs/tailwindcss'],
  modules: ['@nuxtjs/i18n', '@nuxtjs/strapi', 'nuxt-interpolation', 'svg-to-vue-component/nuxt'],
  i18n: {
    locales: ['cs', 'en'],
    defaultLocale: 'cs',
    vueI18nLoader: true,
  },
}

export default config
