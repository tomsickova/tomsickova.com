<template>
  <!-- <div class="flex flex-wrap justify-center items-start t-width mx-auto"> -->
  <div class="grid grid-cols-1 md:grid-cols-2 gap-10 t-width mx-auto">
    <img
      :src="aboutPage.image.url"
      alt="Tatyana portrait"
      class="about__image w-full max-w-xl mx-auto"
    />
    <div v-interpolation class="prose about__text" v-html="aboutPage.text" />
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
