<template>
  <div v-interpolation class="prose max-w-none" v-html="pricingPage.text" />
</template>

<script lang="ts">
import { Context } from '@nuxt/types'
import { Vue, Component } from 'nuxt-property-decorator'

type PricingPageType = {
  text: string
}

@Component
export default class PricingPage extends Vue {
  pricingPage!: PricingPageType

  async asyncData({ $strapi, i18n }: Context) {
    const pricingPage = await $strapi.find('pricing-page', { _locale: i18n.locale })

    return {
      pricingPage,
    }
  }
}
</script>
