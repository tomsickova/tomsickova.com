<template>
  <div class="flex flex-wrap items-start">
    <img class="w-full lg:w-1/3 p-4" :src="aboutPage.image.url" alt="Tatyana portrait" />
    <div v-interpolation class="prose w-full lg:w-1/2 p-4" v-html="aboutPage.text" />
  </div>
</template>

<script lang="ts">
import { Context } from '@nuxt/types'
import { Vue, Component } from 'nuxt-property-decorator'
import { Image } from '~/types'

type AboutPageType = {
  text: string
  image: Image
}

@Component
export default class AboutPage extends Vue {
  aboutPage!: AboutPageType

  async asyncData({ $strapi, i18n }: Context) {
    const aboutPage = await $strapi.find('about-page', { _locale: i18n.locale })

    return {
      aboutPage,
    }
  }
}
</script>
