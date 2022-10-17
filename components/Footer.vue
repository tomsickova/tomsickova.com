<template>
  <footer class="flex items-center justify-center t-padding">
    <div class="t-width w-full grid grid-cols-3 gap-5 md:gap-0 text-center">
      <div class="md:text-left col-span-3 md:col-span-1">
        <p>Tatyana Tomsickova</p>
        <p>Praha 5 - Reporyje, 155 00</p>
        <p>+420774002703</p>
        <p>t.tomsickova@seznam.cz</p>
      </div>

      <div class="flex justify-center space-x-1 col-span-3 md:col-span-1">
        <a
          v-for="social in socialLinks"
          :key="social.url"
          :href="social.url"
          target="_blank"
          class="p-1"
        >
          <IconFacebook
            v-if="social.url.includes('facebook')"
            class="h-9 w-9"
          />
          <IconInstagram
            v-if="social.url.includes('instagram')"
            class="h-9 w-9"
          />
        </a>
      </div>

      <div class="md:text-right col-span-3 md:col-span-1">
        &copy; {{ new Date().getFullYear() }} Tatyana Tomšíčkova
        <br />
        <nuxt-link
          :to="localePath('/policy')"
          class="underline whitespace-nowrap"
        >
          {{ $t('footer.terms') }}
        </nuxt-link>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import IconFacebook from '~/assets/facebook.svg?component'
import IconInstagram from '~/assets/instagram.svg?component'

const localePath = useLocalePath()

const socialLinks = [
  {
    url: 'https://www.facebook.com/tatyanatomsickovaphotography',
    label: 'Facebook',
  },
  {
    url: 'https://www.instagram.com/tatyanatomsickovaphotography',
    label: 'Instagram',
  },
]
</script>

<style lang="postcss" scoped>
footer {
  min-height: 20vh;
  background-color: #dfe0e1;
}
</style>
