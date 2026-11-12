<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-10 t-width mx-auto">
    <img v-if="portrait" :src="portrait" alt="Tatyana portrait" class="w-full max-w-xl mx-auto" />
    <div class="prose">
      <ContentRenderer v-if="page" :value="page" />
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('content').path(route.path).first()
})

const portrait = Object.values(
  import.meta.glob<string>('~/assets/images/about/*.{jpg,jpeg,png,webp}', {
    eager: true,
    import: 'default',
  })
)[0]
</script>
