<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
    <nuxt-link
      v-for="gallery in galleries"
      :key="gallery.folder"
      :to="localePath(`/portfolio/${gallery.folder}`)"
      class="aspect-ratio-1-1 w-full h-full relative"
    >
      <img :src="gallery.images[0]" class="h-full w-full object-cover" />
      <div
        class="absolute capitalize w-full h-full inset-0 bg-black bg-opacity-50 text-white text-2xl opacity-0 hover:opacity-100 flex items-center justify-center font-medium transition-opacity"
      >
        {{ gallery.title }}
      </div>
    </nuxt-link>
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
const galleries = useGalleries()
</script>
