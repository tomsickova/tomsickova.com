<template>
  <div>
    <div class="prose max-w-3xl mx-auto">
      <ContentDoc />
    </div>
    <ul class="my-10 columns-1 lg:columns-2 gap-0 max-w-[1920px] mx-auto">
      <li v-for="image in images" :key="image" class="p-0.5">
        <img :src="image" class="object-cover w-full h-full" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const images = Object.values(import.meta.glob('~/assets/images/news/*', { eager: true })).map(
  (v) => v.default
)
</script>
