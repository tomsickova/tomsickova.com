import { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
  target: 'static',
  head() {
    // const nuxtI18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })

    return {
      // htmlAttrs: {
      //   ...nuxtI18nHead.htmlAttrs,
      // },
      titleTemplate: (pageTitle: string) =>
        pageTitle ? `${pageTitle} – tomsickova.com` : 'tomsickova.com',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' },
        // ...nuxtI18nHead.meta,
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          href: 'https://fonts.googleapis.com/css?family=Amatic+SC:700|Comfortaa|Source+Sans+Pro',
          rel: 'stylesheet',
        },
        // ...nuxtI18nHead.link,
      ],
      script: [{ hid: 'fa', src: 'https://use.fontawesome.com/3279a32114.js' }],
    }
  },
  css: ['~/assets/sass/main'],
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
  buildModules: ['@nuxt/typescript-build', '@nuxtjs/tailwindcss', '@nuxt/image', 'nuxt-typed-vuex'],
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
