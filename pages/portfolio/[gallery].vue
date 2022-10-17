<template>
  <div>
    <h1 class="text-4xl mb-4 capitalize">
      {{ te(`portfolio.${gallery}`) ? $t(`portfolio.${gallery}`) : gallery }}
    </h1>

    <div id="lightgallery" class="grid grid-cols-1 md:grid-cols-2 gap-2">
      <a v-for="image in images" :key="image" :href="image" class="w-full">
        <img :src="image" class="w-full" />
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
const { te } = useI18n()
const { $lightGallery } = useNuxtApp()
const route = useRoute()

const getGalleryImages = (gallery: string) => {
  const images = Object.keys(
    import.meta.glob('~/assets/images/portfolio/*/*.jpg', { eager: true })
  )
  return images.filter((image) => image.includes(gallery))
}

const gallery = route.params.gallery as string
const images = getGalleryImages(gallery)

onMounted(() => {
  $lightGallery(document.getElementById('lightgallery')!, {
    download: false,
  })
})
</script>
