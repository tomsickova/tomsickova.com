<template>
  <div class="flex flex-col min-h-screen">
    <Header />
    <main class="grow px-[3vw] pb-[3vw] mt-4 md:mt-0 mb-4">
      <NuxtPage />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: (pageTitle) => {
    return pageTitle
      ? `${pageTitle} – Tatyana Tomšíčková`
      : 'Tatyana Tomšíčková'
  },
})
</script>

<style lang="postcss">
.t-padding {
  padding: 3vw;
}
.t-width {
  max-width: 1600px;
}
</style>
