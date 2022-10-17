<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
    <nuxt-link
      v-for="gallery in galleries"
      :key="gallery.title"
      :to="localePath(`/portfolio/${gallery.title}`)"
      class="aspect-ratio-1-1 w-full h-full relative"
    >
      <img :src="gallery.thumbnail" class="h-full w-full object-cover" />
      <div
        class="absolute capitalize w-full h-full inset-0 bg-black bg-opacity-50 text-white text-2xl opacity-0 hover:opacity-100 flex items-center justify-center font-medium transition-opacity"
      >
        {{
          te(`portfolio.${gallery.title}`)
            ? $t(`portfolio.${gallery.title}`)
            : gallery.title
        }}
      </div>
    </nuxt-link>
  </div>
</template>

<script setup lang="ts">
const { te } = useI18n()
const localePath = useLocalePath()

const images = Object.keys(
  import.meta.glob('~/assets/images/portfolio/*/*.jpg', { eager: true })
)

type Gallery = { title: ''; thumbnail: '' }

const galleries: Gallery[] = images.reduce((acc, image) => {
  const title = image.split('/')[4]
  if (!acc.find((g) => g.title === title)) {
    acc.push({ title, thumbnail: image })
  }
  return acc
}, [])
</script>
