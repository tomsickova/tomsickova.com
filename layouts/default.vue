<template>
  <div class="flex flex-col min-h-screen max-w-5xl mx-auto">
    <!-- <LangSwitcher /> -->
    <Header class="mb-4" />
    <main class="flex-grow">
      <Nuxt />
    </main>
    <Footer />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class DefaultLayout extends Vue {}
</script>
