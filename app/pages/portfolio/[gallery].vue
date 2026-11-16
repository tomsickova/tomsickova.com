<template>
  <div v-if="gallery" class="gutter py-16 md:py-24">
    <div class="page-width">
      <NuxtLink
        :to="localePath('/portfolio')"
        class="eyebrow inline-flex h-11 items-center gap-2.5 hover:text-accent"
      >
        <IconArrow left />
        {{ t('home.allGalleries') }}
      </NuxtLink>
      <div class="mt-4 flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2">
        <h1 class="display-title">{{ gallery.title }}</h1>
        <p class="eyebrow text-muted">
          {{ t('portfolio.photos', gallery.images.length) }}
        </p>
      </div>

      <ul id="lightgallery" class="mt-12 columns-1 gap-3 sm:columns-2 xl:columns-3">
        <li
          v-for="(image, i) in gallery.images"
          :key="image"
          :data-src="image"
          class="mb-3 break-inside-avoid"
        >
          <img
            :src="image"
            :alt="t('portfolio.photoAlt', { gallery: gallery.title, n: i + 1 })"
            loading="lazy"
            class="w-full cursor-zoom-in"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
const { $lightGallery } = useNuxtApp()
const { t } = useI18n()
const route = useRoute()
const localePath = useLocalePath()
const galleries = useGalleries()

const gallery = computed(() => galleries.value.find((g) => g.folder === route.params.gallery))
if (!gallery.value) {
  throw createError({ statusCode: 404, statusMessage: 'Gallery not found' })
}

onMounted(() => {
  $lightGallery(document.getElementById('lightgallery')!, {
    download: false,
    getCaptionFromTitleOrAlt: false,
  })
})
</script>
