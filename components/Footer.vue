<template>
  <footer class="pt-8 pb-4">
    <div class="flex justify-between flex-wrap px-4 py-8">
      <div v-html="$md.render(footer.info)" />
      <div class="text-5xl">
        <a
          v-for="social in footer.socialLinks"
          :key="social.url"
          :href="social.url"
          target="_blank"
        >
          <i
            v-if="social.url.includes('facebook')"
            class="fa fa-facebook-official"
            aria-hidden="true"
          />
          <i v-if="social.url.includes('instagram')" class="fa fa-instagram" aria-hidden="true" />
        </a>
      </div>
    </div>

    <div class="text-right">
      &copy; {{ new Date().getFullYear() }} Tatyana Tomsickova &middot;
      <nuxt-link :to="localePath(footer.termsLink.url)" class="underline">
        {{ footer.termsLink.label }}
      </nuxt-link>
    </div>
  </footer>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { Link } from '~/types'

type FooterType = {
  info: string
  socialLinks: Link[]
  termsLink: Link
}

@Component
export default class Footer extends Vue {
  footer = {} as FooterType

  async fetch() {
    this.footer = await this.$strapi.find('footer', { _locale: this.$i18n.locale })
  }

  // created() {
  //   this.$i18n.onLanguageSwitched = () => {
  //     this.$fetch()
  //     this.$forceUpdate()
  //   }
  // }
}
</script>
