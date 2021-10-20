<template>
  <div>
    <h1 class="uppercase">{{ $t(`gallery.${gallery}`) }}</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
      <nuxt-img v-for="image in images" :key="image" :src="image" class="w-full" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  computed: {
    gallery() {
      return this.$route.params.gallery
    },
    images() {
      return this.$accessor.galleries[this.$route.params.gallery]
    },
  },
})
</script>
