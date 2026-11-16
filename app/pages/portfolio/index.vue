<template>
  <div class="gutter py-16 md:py-24">
    <div class="page-width flex flex-col gap-12 md:gap-16">
      <h1 class="display-title">{{ t('navigation.portfolio') }}</h1>
      <GalleryGrid />
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>
