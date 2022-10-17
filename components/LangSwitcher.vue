<template>
  <nuxt-link
    :to="switchLocalePath(locale === 'en' ? 'cs' : 'en')"
    class="font-medium p-2 text-lg"
  >
    <IconLangCS v-if="locale === 'en'" class="h-6 w-6" />
    <IconLangGB v-else class="h-6 w-6" />
  </nuxt-link>
</template>

<script setup lang="ts">
import IconLangGB from '~/assets/gb.svg?component'
import IconLangCS from '~/assets/cs.svg?component'

const { locale } = useI18n()
const switchLocalePath = useSwitchLocalePath()
</script>
