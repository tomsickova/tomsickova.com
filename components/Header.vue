<template>
  <header class="t-padding">
    <nav class="flex flex-col md:flex-row items-center justify-between mx-auto">
      <NuxtLink
        :to="localePath('/')"
        class="font-serif text-4xl my-4 md:my-0"
        style="background: none !important"
      >
        Tatyana Tomšíčková
      </NuxtLink>
      <ul class="flex flex-wrap justify-center text-xl">
        <li v-for="item in items" :key="item.url">
          <NuxtLink :to="localePath(item.url)" class="menu-item inline-block p-1 m-2 text-black">
            {{ item.label }}
          </NuxtLink>
        </li>
        <li class="flex items-center ml-4">
          <LangSwitcher class="p-1" />
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()

const items = computed(() => [
  {
    label: t('navigation.news'),
    url: '/news',
  },
  {
    label: t('navigation.portfolio'),
    url: '/portfolio',
  },
  {
    label: t('navigation.pricing'),
    url: '/pricing',
  },
  {
    label: t('navigation.about'),
    url: '/about',
  },
  {
    label: t('navigation.contact'),
    url: '/contact',
  },
])
</script>

<style lang="postcss" scoped>
nav {
  max-width: 1600px;
}
.menu-item.nuxt-link-active {
  background-repeat: repeat-x;
  background-image: linear-gradient(to right, currentColor 100%, currentColor 0);
  background-size: 1px 1px;
  background-position: 0 calc(100% - 0.1em);
}
</style>
