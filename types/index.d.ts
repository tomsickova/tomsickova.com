import { accessorType } from '../store'

declare module 'vue/types/vue' {
  // this.<foo> inside Vue components
  interface Vue {
    // Typed Vuex (https://typed-vuex.roe.dev/getting-started-nuxt#creating-type-definitions)
    $accessor: typeof accessorType
  }
}

declare module '@nuxt/types' {
  // nuxtContext.app.<foo> inside asyncData, fetch, plugins, middleware, nuxtServerInit
  interface NuxtAppOptions {
    $accessor: typeof accessorType
  }
  // nuxtContext.<foo>
  interface Context {
    $accessor: typeof accessorType
  }
}
