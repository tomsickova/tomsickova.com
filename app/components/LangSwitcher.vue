<template>
  <NuxtLink
    :to="switchLocalePath(locale === 'en' ? 'cs' : 'en')"
    class="py-3 text-white/70 hover:text-white"
  >
    <span :class="{ 'text-white': locale === 'cs' }">CS</span>
    /
    <span :class="{ 'text-white': locale === 'en' }">EN</span>
    <span class="sr-only">{{ t('navigation.switchLanguage') }}</span>
  </NuxtLink>
</template>

<script setup lang="ts">
const { locale, t } = useI18n()
const switchLocalePath = useSwitchLocalePath()
</script>
