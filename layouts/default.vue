<template>
  <div class="flex flex-col min-h-screen">
    <Header />
    <main class="flex-grow t-padding my-4">
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

<style lang="postcss">
.t-padding {
  padding: 3vw;
}
.t-width {
  max-width: 1600px;
}
/* header,
main,
footer {
  padding: 3vw;
} */
</style>
