<template>
  <footer class="gutter bg-ink py-10 text-sm leading-6 text-line">
    <div class="page-width flex flex-wrap items-end justify-between gap-x-12 gap-y-6">
      <div class="flex flex-col">
        <span class="font-semibold text-white">{{ site.name }}</span>
        <span>{{ bindShortWords(site.address, 'cs') }}</span>
        <span v-if="site.ico">{{ bindShortWords(`IČO: ${site.ico}`, 'cs') }}</span>
      </div>
      <div class="flex flex-col items-start">
        <a :href="phoneHref" class="hover:text-white">{{ site.phone }}</a>
        <a :href="`mailto:${site.email}`" class="hover:text-white">{{ site.email }}</a>
        <div class="flex gap-x-5">
          <a
            v-for="social in socialLinks"
            :key="social.label"
            :href="social.url"
            class="underline underline-offset-[3px] hover:text-white"
          >
            {{ social.label }}
          </a>
        </div>
      </div>
      <div class="flex flex-col items-start sm:items-end">
        <span>&copy; {{ new Date().getFullYear() }} {{ site.name }}</span>
        <NuxtLink
          :to="localePath('/policy')"
          class="underline underline-offset-[3px] hover:text-white"
        >
          {{ t('footer.terms') }}
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import site from '~~/data/site.json'

const { t } = useI18n()
const localePath = useLocalePath()
const { phoneHref, socialLinks } = useContactLinks()
</script>
