<template>
  <div class="gutter py-16 md:py-24">
    <div class="page-width flex flex-col gap-12 md:gap-16">
      <h1 class="display-title">{{ t('navigation.about') }}</h1>
      <div class="flex flex-wrap items-start gap-x-24 gap-y-12">
        <img
          v-if="portrait"
          :src="portrait"
          :alt="site.name"
          class="w-[440px] max-w-full min-w-0 flex-[0_1_440px]"
        />
        <ContentRenderer v-if="page" :value="page" class="copy min-w-0 flex-[1_1_420px]" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import site from '~~/data/site.json'

const { t } = useI18n()
const { data: page } = await usePageContent(useRoute().path)

const portrait = Object.values(
  import.meta.glob<string>('~/assets/images/about/*.{jpg,jpeg,png,webp}', {
    eager: true,
    import: 'default',
  })
)[0]
</script>
