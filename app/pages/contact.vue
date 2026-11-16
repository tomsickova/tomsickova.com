<template>
  <ContactSection>
    <ContentRenderer v-if="page" :value="page" class="contact-heading" />
  </ContactSection>
</template>

<script setup lang="ts">
const { data: page } = await usePageContent(useRoute().path)
</script>

<style scoped>
.contact-heading :deep(:where(h1, h2)) {
  margin: 0;
  font-family: var(--font-display);
  font-size: clamp(56px, 8vw, 112px);
  font-weight: 400;
  line-height: 1;
  text-transform: uppercase;
  text-wrap: balance;
}
</style>
