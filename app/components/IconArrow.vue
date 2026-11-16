<template>
  <svg
    aria-hidden="true"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="square"
    :class="{ 'rotate-180': left }"
  >
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
</template>

<script setup lang="ts">
defineProps<{ left?: boolean }>()
</script>
