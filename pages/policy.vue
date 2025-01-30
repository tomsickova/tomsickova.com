<template>
  <div class="prose max-w-3xl mx-auto">
    <ContentRenderer v-if="page" :value="page" />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('content').path(route.path).first()
})
</script>
