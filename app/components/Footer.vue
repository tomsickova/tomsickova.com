<template>
  <footer class="flex items-center justify-center t-padding">
    <div class="t-width w-full grid grid-cols-3 gap-5 md:gap-0 text-center">
      <div class="md:text-left col-span-3 md:col-span-1">
        <p>{{ site.name }}</p>
        <p>{{ site.address }}</p>
        <p>{{ site.phone }}</p>
        <p>{{ site.email }}</p>
        <p v-if="site.ico">IČO: {{ site.ico }}</p>
      </div>

      <div class="flex justify-center space-x-1 col-span-3 md:col-span-1">
        <a
          v-for="social in socialLinks"
          :key="social.label"
          :href="social.url"
          target="_blank"
          class="p-1"
        >
          <component :is="social.icon" class="h-9 w-9" />
        </a>
      </div>

      <div class="md:text-right col-span-3 md:col-span-1">
        &copy; {{ new Date().getFullYear() }} {{ site.name }}
        <br />
        <nuxt-link :to="localePath('/policy')" class="underline whitespace-nowrap">
          {{ $t('footer.terms') }}
        </nuxt-link>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import IconFacebook from '~/assets/facebook.svg?component'
import IconInstagram from '~/assets/instagram.svg?component'
import site from '~~/data/site.json'

const localePath = useLocalePath()

const socialLinks = [
  {
    url: site.facebook,
    label: 'Facebook',
    icon: IconFacebook,
  },
  {
    url: site.instagram,
    label: 'Instagram',
    icon: IconInstagram,
  },
].filter((social) => social.url)
</script>

<style lang="postcss" scoped>
footer {
  min-height: 20vh;
  background-color: #dfe0e1;
}
</style>
