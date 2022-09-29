<template>
  <div>
    <div v-interpolation class="prose max-w-3xl mx-auto" v-html="newsPage.text1" />
    <ul class="my-10">
      <li v-for="image in newsPage.images" :key="image.id">
        <img :src="image.url" loading="lazy" />
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

<style lang="postcss" scoped>
ul {
  display: flex;
  flex-wrap: wrap;
}

li {
  height: 40vh;
  flex-grow: 1;
}

li:last-child {
  flex-grow: 10;
}

img {
  max-height: 100%;
  min-width: 100%;
  object-fit: cover;
  vertical-align: bottom;
}

@media (max-aspect-ratio: 1/1) {
  li {
    height: 30vh;
  }
}

@media (max-height: 480px) {
  li {
    height: 80vh;
  }
}

@media (max-aspect-ratio: 1/1) and (max-width: 480px) {
  ul {
    flex-direction: row;
  }

  li {
    height: auto;
    width: 100%;
  }
  img {
    width: 100%;
    max-height: 75vh;
    min-width: 0;
  }
}
</style>
