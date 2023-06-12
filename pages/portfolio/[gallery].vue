<template>
  <div>
    <h1 class="text-4xl mb-4 capitalize">
      {{ te(`portfolio.${gallery}`) ? $t(`portfolio.${gallery}`) : gallery }}
    </h1>

    <ul id="lightgallery" class="columns-1 lg:columns-2 gap-0">
      <li v-for="image in images" :key="image" :data-src="image" class="p-0.5">
        <img :src="image" class="object-cover w-full h-full cursor-pointer" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const { te } = useI18n()
const { $lightGallery } = useNuxtApp()
const route = useRoute()

const getGalleryImages = (gallery: string) => {
  const images = Object.entries(
    import.meta.glob('~/assets/images/portfolio/*/*.jpg', { eager: true })
  )
  return images.filter((image) => image[0].includes(gallery)).map((i) => i[1].default)
}

const gallery = route.params.gallery as string
const images = getGalleryImages(gallery)

onMounted(() => {
  $lightGallery(document.getElementById('lightgallery')!, {
    download: false,
  })
})
</script>
