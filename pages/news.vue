<template>
  <div>
    <div v-interpolation class="prose max-w-3xl mx-auto" v-html="newsPage.text1" />
    <ul class="my-10 columns-1 lg:columns-2 gap-0 max-w-[1920px] mx-auto">
      <li v-for="image in newsPage.images" :key="image.id" class="p-0.5">
        <img :src="image.url" loading="lazy" class="object-cover w-full h-full" />
      </li>
    </ul>
    <div v-interpolation class="prose max-w-3xl mx-auto" v-html="newsPage.text2" />
  </div>
</template>

<script lang="ts">
import { Context } from '@nuxt/types'
import { Vue, Component } from 'nuxt-property-decorator'
import { Image } from '~/types'

type NewsPageType = {
  text1: string
  text2: string
  images: Image[]
}

@Component
export default class NewsPage extends Vue {
  newsPage!: NewsPageType

  async asyncData({ $strapi, i18n }: Context) {
    const newsPage = await $strapi.find('news-page', { _locale: i18n.locale })

    return {
      newsPage,
    }
  }
}
</script>
