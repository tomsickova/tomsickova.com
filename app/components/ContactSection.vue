<template>
  <section id="contact" class="gutter py-16 md:py-28">
    <div class="page-width flex flex-col gap-14">
      <slot />
      <div class="flex flex-wrap gap-x-24 gap-y-14">
        <div class="flex min-w-0 flex-[1_1_380px] flex-col gap-4">
          <p class="max-w-[420px] text-[19px]">{{ t('contact.intro') }}</p>
          <a
            :href="phoneHref"
            class="mt-4 self-start font-display text-[40px] leading-[52px] whitespace-nowrap hover:text-accent"
          >
            {{ site.phone }}
          </a>
          <a
            :href="`mailto:${site.email}`"
            class="self-start py-2 text-xl font-semibold hover:text-accent"
          >
            {{ site.email }}
          </a>
          <span class="py-2 text-muted">{{ site.address }}</span>
          <div class="eyebrow flex flex-wrap gap-x-7">
            <a
              v-for="social in socialLinks"
              :key="social.label"
              :href="social.url"
              class="py-3 underline underline-offset-[5px] hover:text-accent"
            >
              {{ social.label }}
            </a>
          </div>
        </div>
        <ContactForm class="min-w-0 flex-[1.2_1_420px]" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import site from '~~/data/site.json'

const { t } = useI18n()
const { phoneHref, socialLinks } = useContactLinks()
</script>
