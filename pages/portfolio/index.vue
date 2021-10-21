<template>
  <div class="grid grid-cols-2 gap-4">
    <nuxt-link
      v-for="(images, album) in $accessor.portfolio"
      :key="album"
      :to="localePath(`/portfolio/${album}`)"
      class="aspect-ratio-1-1 w-full h-full relative"
    >
      <img :src="`/portfolio/${album}/thumbnail.png`" class="h-full w-full" />
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
        {{ $t(`portfolio.${album}`) }}
      </div>
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class GalleryRootPage extends Vue {}
</script>
