<template>
  <nuxt-link
    :to="switchLocalePath($i18n.locale === 'en' ? 'cz' : 'en')"
    class="font-medium p-2 text-lg"
  >
    <img v-if="$i18n.locale === 'en'" src="~/assets/img/cz.svg" alt="Switch to Czech" class="h-5" />
    <img v-else src="~/assets/img/gb.svg" alt="Switch to English" class="h-5" />
  </nuxt-link>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class LangSwitcher extends Vue {}
</script>
