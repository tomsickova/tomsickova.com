<template>
  <footer>
    <hr />
    &copy; {{ new Date().getFullYear() }} {{ $t('footer.text') }}
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>
