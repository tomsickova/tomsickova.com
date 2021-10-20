<template>
  <div class="lang">
    <nuxt-link :to="switchLocalePath('cz')">
      <img src="~/assets/img/cz.svg" alt="Switch to Czech" />
    </nuxt-link>
    <nuxt-link :to="switchLocalePath('en')">
      <img src="~/assets/img/gb.svg" alt="Switch to English" />
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>
