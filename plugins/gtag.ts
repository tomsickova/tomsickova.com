// import Vue from 'vue'
// import VueGtag from 'vue-gtag'

// Vue.use(VueGtag, {
//   config: { id: 'G-7TVPHEB2N9' },
// })

import VueGtag from 'vue-gtag'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueGtag, {
    property: {
      id: 'G-7TVPHEB2N9',
    },
  })
})
