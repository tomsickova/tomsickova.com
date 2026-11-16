<template>
  <div class="flex min-h-screen flex-col">
    <AnnouncementBar />
    <div class="relative flex grow flex-col">
      <Header :overlay="isHome" />
      <main class="grow">
        <NuxtPage />
      </main>
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const getRouteBaseName = useRouteBaseName()
const isHome = computed(() => getRouteBaseName(route) === 'index')

useHead({
  titleTemplate: (pageTitle) => {
    return pageTitle
      ? `${pageTitle} – Tatyana Tomšíčková`
      : 'Tatyana Tomšíčková'
  },
})
</script>
