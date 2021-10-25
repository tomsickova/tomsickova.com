<template>
  <div v-interpolation class="prose" v-html="policyPage.text" />
</template>

<script lang="ts">
import { Context } from '@nuxt/types'
import { Vue, Component } from 'nuxt-property-decorator'

type PolicyPageType = {
  text: string
}

@Component
export default class PolicyPage extends Vue {
  policyPage!: PolicyPageType

  async asyncData({ $strapi, i18n }: Context) {
    const policyPage = await $strapi.find('policy-page', { _locale: i18n.locale })

    return {
      policyPage,
    }
  }
}
</script>
