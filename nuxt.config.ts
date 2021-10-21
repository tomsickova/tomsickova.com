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
  plugins: ['~/plugins/lightgallery.client'],
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
  buildModules: ['@nuxt/typescript-build', '@nuxtjs/tailwindcss', 'nuxt-typed-vuex'],
  modules: ['@nuxtjs/axios', '@nuxtjs/i18n'],
  i18n: {
    langDir: '~/lang/',
    baseUrl: 'https://tomsickova.com',
    locales: [
      {
        name: 'English',
        code: 'en',
        iso: 'en-US',
        file: 'en.ts',
      },
      {
        name: 'Český',
        code: 'cz',
        iso: 'cz-CZ',
        file: 'cz.ts',
      },
    ],
    defaultLocale: 'cz',
    vueI18n: {
      fallbackLocale: 'cz',
    },
  },
}

export default config
