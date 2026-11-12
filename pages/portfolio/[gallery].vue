<template>
  <div v-if="gallery">
    <h1 class="text-4xl mb-4 capitalize">
      {{ gallery.title }}
    </h1>

    <ul id="lightgallery" class="columns-1 lg:columns-2 gap-0">
      <li v-for="image in gallery.images" :key="image" :data-src="image" class="p-0.5">
        <img :src="image" class="object-cover w-full h-full cursor-pointer" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const { $lightGallery } = useNuxtApp()
const route = useRoute()
const galleries = useGalleries()

const gallery = computed(() => galleries.value.find((g) => g.folder === route.params.gallery))
if (!gallery.value) {
  throw createError({ statusCode: 404, statusMessage: 'Gallery not found' })
}

onMounted(() => {
  $lightGallery(document.getElementById('lightgallery')!, {
    download: false,
  })
})
</script>
