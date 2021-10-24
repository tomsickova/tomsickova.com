<template>
  <div>
    <h1 class="text-4xl mb-4">{{ gallery.title }}</h1>

    <div id="lightgallery" class="grid grid-cols-1 md:grid-cols-2 gap-2">
      <a v-for="image in gallery.images" :key="image.url" :href="image.url" class="w-full">
        <img :src="image.url" class="w-full" />
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { Context } from '@nuxt/types'
import { Vue, Component } from 'nuxt-property-decorator'
import { Gallery } from '~/types'

@Component
export default class GalleryPage extends Vue {
  gallery!: Gallery

  async asyncData({ route, $strapi, i18n }: Context) {
    const slug = route.params.gallery
    const gallery = (await $strapi.find('galleries', { slug, _locale: i18n.locale }))[0]

    return {
      gallery,
    }
  }

  mounted() {
    this.$lightGallery(document.getElementById('lightgallery')!, {
      thumbnail: true,
      download: false,
    })
  }
}
</script>
