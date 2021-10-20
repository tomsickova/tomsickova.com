<template>
  <div class="wrap">
    <header>
      <LangSwitcher />
      <div class="logo">
        <img src="~/assets/img/logo.png" alt="Logo" />
      </div>
    </header>

    <Navigation />
    <main>
      <Nuxt />
      <div class="clearfix"></div>
    </main>
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="postcss"></style>
