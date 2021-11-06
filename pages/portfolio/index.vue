<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
    <nuxt-link
      v-for="gallery in galleries"
      :key="gallery.slug"
      :to="localePath(`/portfolio/${gallery.slug}`)"
      class="aspect-ratio-1-1 w-full h-full relative"
    >
      <img :src="gallery.thumbnail.url" class="h-full w-full" />
      <div
        class="
          absolute
          w-full
          h-full
          inset-0
          bg-black bg-opacity-50
          text-white text-2xl
          opacity-0
          hover:opacity-100
          flex
          items-center
          justify-center
          font-medium
          transition-opacity
        "
      >
        {{ gallery.title }}
      </div>
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import { Context } from '@nuxt/types'
import { Vue, Component } from 'nuxt-property-decorator'
import { Gallery } from '~/types'

@Component
export default class GalleryRootPage extends Vue {
  galleries!: Gallery[]

  async asyncData({ $strapi, i18n }: Context) {
    const galleries = await $strapi.find('galleries', { _locale: i18n.locale })

    return {
      galleries,
    }
  }
}
</script>
