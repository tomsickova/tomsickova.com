<template>
  <footer class="flex items-center justify-center t-padding">
    <div class="t-width w-full grid grid-cols-3 gap-5 md:gap-0 text-center">
      <div class="md:text-left col-span-3 md:col-span-1" v-html="footer.info" />

      <div class="flex justify-center space-x-1 col-span-3 md:col-span-1">
        <a
          v-for="social in footer.socialLinks"
          :key="social.url"
          :href="social.url"
          target="_blank"
          class="p-1"
        >
          <IconFacebook v-if="social.url.includes('facebook')" class="h-9 w-9" />
          <IconInstagram v-if="social.url.includes('instagram')" class="h-9 w-9" />
        </a>
      </div>

      <div class="md:text-right col-span-3 md:col-span-1">
        &copy; {{ new Date().getFullYear() }} Tatyana Tomšíčkova
        <br />
        <nuxt-link :to="localePath(footer.termsLink.url)" class="underline whitespace-nowrap">
          {{ footer.termsLink.label }}
        </nuxt-link>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { Link } from '~/types'
import IconFacebook from '~/assets/facebook.svg'
import IconInstagram from '~/assets/instagram.svg'

type FooterType = {
  info: string
  socialLinks: Link[]
  termsLink: Link
}

@Component({
  components: {
    IconFacebook,
    IconInstagram,
  },
})
export default class Footer extends Vue {
  footerCS = {} as FooterType
  footerEN = {} as FooterType

  get footer() {
    return this.$i18n.locale === 'en' ? this.footerEN : this.footerCS
  }

  async fetch() {
    this.footerCS = await this.$strapi.find('footer', { _locale: 'cs' })
    this.footerEN = await this.$strapi.find('footer', { _locale: 'en' })
  }
}
</script>

<style lang="postcss" scoped>
footer {
  min-height: 20vh;
  background-color: #dfe0e1;
}
</style>
