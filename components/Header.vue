<template>
  <nav class="flex flex-col md:flex-row items-center justify-between py-2">
    <nuxt-link to="/">
      <img :src="navigation.logo.url" alt="Tatyana Tomsickova logo" class="max-w-full max-h-16" />
    </nuxt-link>
    <ul class="flex flex-wrap justify-center font-serif text-4xl">
      <li v-for="item in navigation.items" :key="item.url">
        <nuxt-link
          :to="localePath(item.url)"
          class="inline-block p-1 m-3 text-gray-900 hover:text-gray-500 transition-colors"
          v-text="item.label"
        />
      </li>
      <li class="flex items-center ml-4">
        <LangSwitcher class="p-1" />
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { Image } from '~/types'

type Navigation = {
  logo: Image
  items: Array<{ url: string; label: string }>
}

@Component
export default class Header extends Vue {
  navigation = {} as Navigation

  async fetch() {
    this.navigation = await this.$strapi.find('navigation', { _locale: this.$i18n.locale })
  }

  // created() {
  //   this.$i18n.onLanguageSwitched = () => {
  //     this.$fetch()
  //     this.$forceUpdate()
  //   }
  // }
}
</script>
