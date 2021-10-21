<template>
  <div>
    <h1 class="text-4xl mb-4">{{ $t(`portfolio.${$route.params.album}`) }}</h1>

    <div id="lightgallery" class="grid grid-cols-1 md:grid-cols-2 gap-2">
      <a
        v-for="image in $accessor.portfolio[$route.params.album]"
        :key="image"
        :href="image"
        class="w-full"
      >
        <img :src="image" class="w-full" />
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class GalleryPage extends Vue {
  mounted() {
    this.$lightGallery(document.getElementById('lightgallery')!, {
      thumbnail: true,
      download: false,
    })
  }
}
</script>
