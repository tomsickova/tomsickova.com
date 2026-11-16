<template>
  <div
    v-if="announcement.show && text"
    class="gutter flex flex-wrap items-center justify-center gap-x-6 bg-ink text-center text-xs leading-5 font-medium tracking-[0.14em] text-white uppercase"
  >
    <p class="inline-flex items-center gap-2.5 py-2.5 text-balance sm:py-3">
      <span aria-hidden="true" class="hidden size-2 shrink-0 bg-accent sm:block" />
      {{ text }}
    </p>
    <NuxtLink
      v-if="announcement.link && label"
      :to="isExternal ? announcement.link : localePath(announcement.link)"
      class="py-2.5 underline underline-offset-4 hover:decoration-accent sm:py-3"
    >
      {{ label }}
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import announcement from '~~/data/announcement.json'

const { locale } = useI18n()
const localePath = useLocalePath()

const text = computed(() =>
  bindShortWords(locale.value === 'en' ? announcement.en : announcement.cs, locale.value)
)
const label = computed(() => (locale.value === 'en' ? announcement.linkEn : announcement.linkCs))
const isExternal = /^https?:\/\//.test(announcement.link)
</script>
