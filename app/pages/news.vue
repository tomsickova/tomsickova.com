<template>
  <div class="gutter py-16 md:py-24">
    <div class="page-width flex flex-col gap-12 md:gap-16">
      <h1 class="display-title">{{ t('navigation.news') }}</h1>
      <ContentRenderer v-if="page" :value="page" class="copy" />
      <ul class="columns-1 gap-3 sm:columns-2 xl:columns-3">
        <li v-for="image in images" :key="image" class="mb-3 break-inside-avoid">
          <img :src="image" alt="" loading="lazy" class="w-full" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('content').path(route.path).first()
})

const images = Object.values(
  import.meta.glob<string>('~/assets/images/news/*.{jpg,jpeg,png,webp}', {
    eager: true,
    import: 'default',
  })
)
</script>
