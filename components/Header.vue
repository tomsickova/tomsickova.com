<template>
  <header class="t-padding">
    <nav class="flex flex-col md:flex-row items-center justify-between mx-auto">
      <nuxt-link
        :to="localePath('/')"
        class="font-serif text-4xl my-4 md:my-0"
        style="background: none !important"
        v-text="navigation.name"
      />
      <ul class="flex flex-wrap justify-center text-xl">
        <li v-for="item in navigation.items" :key="item.url">
          <nuxt-link
            :to="localePath(item.url)"
            class="inline-block p-1 m-2 text-black"
            v-text="item.label"
          />
        </li>
        <li class="flex items-center ml-4">
          <LangSwitcher class="p-1" />
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

type Navigation = {
  name: string
  items: Array<{ url: string; label: string }>
}

@Component
export default class Header extends Vue {
  navigationCS = {} as Navigation
  navigationEN = {} as Navigation

  get navigation() {
    return this.$i18n.locale === 'en' ? this.navigationEN : this.navigationCS
  }

  async fetch() {
    this.navigationCS = await this.$strapi.find('navigation', { _locale: 'cs' })
    this.navigationEN = await this.$strapi.find('navigation', { _locale: 'en' })
  }
}
</script>

<style lang="postcss" scoped>
nav {
  max-width: 1600px;
}
.nuxt-link-exact-active {
  background-repeat: repeat-x;
  background-image: linear-gradient(to right, currentColor 100%, currentColor 0);
  background-size: 1px 1px;
  background-position: 0 calc(100% - 0.1em);
}
</style>
