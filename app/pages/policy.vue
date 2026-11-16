<template>
  <div class="gutter py-16 md:py-24">
    <div class="page-width flex flex-col gap-12 md:gap-16">
      <h1 class="display-title">{{ t('footer.terms') }}</h1>
      <ContentRenderer v-if="page" :value="page" class="copy" />
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('content').path(route.path).first()
})
</script>
