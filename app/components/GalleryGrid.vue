<template>
  <div class="flex flex-col gap-14 md:flex-row md:gap-0">
    <div
      v-for="(column, c) in columns"
      :key="c"
      class="contents md:flex md:min-w-0 md:flex-1 md:flex-col md:gap-20"
      :class="
        c === 0
          ? 'md:pr-[min(48px,4%)] md:pb-20'
          : 'md:border-l md:border-line md:pt-40 md:pl-[min(48px,4%)]'
      "
    >
      <NuxtLink
        v-for="item in column"
        :key="item.gallery.folder"
        :to="localePath(`/portfolio/${item.gallery.folder}`)"
        class="group flex flex-col gap-3.5"
        :class="item.shape.width"
        :style="{ order: item.index }"
      >
        <img
          :src="item.gallery.images[0]"
          alt=""
          loading="lazy"
          class="w-full object-cover transition-opacity group-hover:opacity-90"
          :class="item.shape.aspect"
        />
        <span class="flex flex-wrap items-baseline justify-between gap-x-4">
          <span
            class="font-display text-[32px] leading-10 uppercase group-hover:text-accent md:text-4xl md:leading-11"
          >
            {{ item.gallery.title }}
          </span>
          <span class="text-[13px] font-medium tracking-widest text-muted uppercase">
            {{ t('portfolio.photos', item.gallery.images.length) }}
          </span>
        </span>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
const galleries = useGalleries()

const landscape = 'aspect-[3/2]'
const portrait = 'aspect-[2/3]'
const shapes = [
  [
    { aspect: landscape, width: 'w-full self-start' },
    { aspect: portrait, width: 'w-[68%] self-end' },
    { aspect: landscape, width: 'w-[84%] self-start' },
  ],
  [
    { aspect: portrait, width: 'w-[70%] self-start' },
    { aspect: landscape, width: 'w-full self-start' },
    { aspect: landscape, width: 'w-[84%] self-end' },
  ],
]

const columns = computed(() =>
  [0, 1].map((c) =>
    galleries.value
      .map((gallery, index) => ({ gallery, index }))
      .filter(({ index }) => index % 2 === c)
      .map(({ gallery, index }) => ({
        gallery,
        index,
        shape: shapes[c]![Math.floor(index / 2) % 3]!,
      }))
  )
)
</script>
