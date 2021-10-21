<template>
  <div>
    <nav class="flex justify-between py-2">
      <div></div>
      <ul class="flex flex-wrap justify-center font-serif text-4xl">
        <!-- <li>
          <nuxt-link :to="localePath('/')">{{ $t('page.home') }}</nuxt-link>
        </li> -->
        <li v-for="item in items" :key="item.to">
          <nuxt-link
            :to="item.to"
            class="inline-block p-1 m-3 text-gray-900 hover:text-gray-500 transition-colors"
            v-text="item.text"
          />
        </li>
        <li class="flex items-center ml-4">
          <LangSwitcher class="p-1" />
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class Header extends Vue {
  get items() {
    return [
      { to: this.localePath('/portfolio'), text: this.$t('page.portfolio') },
      { to: this.localePath('/pricing'), text: this.$t('page.pricing') },
      { to: this.localePath('/contact'), text: this.$t('page.contact') },
      { to: this.localePath('/about'), text: this.$t('page.about') },
    ]
  }
}
</script>
