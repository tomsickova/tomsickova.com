<template>
  <nuxt-link
    :to="switchLocalePath($i18n.locale === 'en' ? 'cs' : 'en')"
    class="font-medium p-2 text-lg"
  >
    <IconLangCS v-if="$i18n.locale === 'en'" class="h-6 w-6" />
    <IconLangGB v-else class="h-6 w-6" />
  </nuxt-link>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import IconLangGB from '~/assets/gb.svg'
import IconLangCS from '~/assets/cs.svg'

@Component({
  components: {
    IconLangGB,
    IconLangCS,
  },
})
export default class LangSwitcher extends Vue {}
</script>
