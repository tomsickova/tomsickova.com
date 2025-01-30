<template>
  <div>
    <div class="prose max-w-3xl mx-auto">
      <ContentRenderer v-if="page" :value="page" />
    </div>
    <ul class="my-10 columns-1 lg:columns-2 gap-0 max-w-[1920px] mx-auto">
      <li v-for="image in images" :key="image" class="p-0.5">
        <img :src="image" class="object-cover w-full h-full" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('content').path(route.path).first()
})

const images = Object.values(import.meta.glob('~/assets/images/news/*', { eager: true })).map(
  (v: any) => v.default
)
</script>
