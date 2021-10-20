<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
    <nuxt-img v-for="image in $accessor.home" :key="image" :src="image" class="w-full" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>
