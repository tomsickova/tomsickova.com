import { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
  target: 'static',
  head() {
    return {
      titleTemplate: (pageTitle: string) =>
        pageTitle ? `${pageTitle} – tomsickova.com` : 'tomsickova.com',
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
      ],
      script: [{ hid: 'fa', src: 'https://use.fontawesome.com/3279a32114.js' }],
    }
  },
  css: ['lightgallery/css/lightgallery.css'],
  plugins: ['~/plugins/preview.client', '~/plugins/lightgallery.client'],
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
  buildModules: ['@nuxt/typescript-build', '@nuxt/image', '@nuxtjs/tailwindcss'],
  modules: ['@nuxtjs/i18n', '@nuxtjs/strapi', 'nuxt-interpolation'],
  i18n: {
    locales: ['cs', 'en'],
    defaultLocale: 'cs',
    vueI18nLoader: true,
  },
}

export default config
