<template>
  <div class="gallery-wrap">
    <nuxt-link
      v-for="(images, gallery) in $accessor.galleries"
      :key="gallery"
      :to="localePath(`/gallery/${gallery}`)"
      class="album outline-in"
    >
      <div>
        <img :src="`/gallery/${gallery}/thumbnail.png`" />
        <div class="desc">{{ $t(`gallery.${gallery}`) }}</div>
      </div>
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>
