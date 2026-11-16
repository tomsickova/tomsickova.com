<template>
  <header
    class="gutter z-10 flex flex-wrap items-center justify-between gap-x-8 text-white"
    :class="overlay ? 'header-overlay absolute inset-x-0 top-0 pt-4 pb-24' : 'bg-ink py-4'"
  >
    <NuxtLink
      :to="localePath('/')"
      class="py-3 text-sm leading-5 font-semibold tracking-[0.16em] uppercase hover:text-white/75"
    >
      Tatyana Tomšíčková
    </NuxtLink>
    <nav
      :aria-label="t('navigation.label')"
      class="eyebrow hidden flex-wrap items-center gap-x-7 md:flex"
    >
      <NuxtLink
        v-for="item in items"
        :key="item.url"
        :to="localePath(item.url)"
        class="py-3 decoration-accent decoration-2 underline-offset-[6px] hover:text-white/75"
        :class="{ underline: isActive(item.url) }"
      >
        {{ item.label }}
      </NuxtLink>
      <LangSwitcher />
    </nav>
    <button
      type="button"
      class="eyebrow -mr-2 inline-flex h-11 items-center gap-2.5 px-2 md:hidden"
      aria-haspopup="dialog"
      :aria-expanded="open"
      aria-controls="mobile-menu"
      @click="openMenu"
    >
      {{ t('navigation.menu') }}
      <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" class="menu-icon">
        <path d="M3 8h18M3 16h18" />
      </svg>
    </button>

    <dialog
      id="mobile-menu"
      ref="dialog"
      class="mobile-menu"
      :aria-label="t('navigation.label')"
      @close="open = false"
    >
      <div class="gutter flex min-h-full flex-col pt-4 pb-10">
        <div class="flex items-center justify-between gap-x-8">
          <NuxtLink
            :to="localePath('/')"
            class="py-3 text-sm leading-5 font-semibold tracking-[0.16em] uppercase"
            @click="closeMenu"
          >
            Tatyana Tomšíčková
          </NuxtLink>
          <button
            type="button"
            class="eyebrow -mr-2 inline-flex h-11 items-center gap-2.5 px-2"
            @click="closeMenu"
          >
            {{ t('navigation.close') }}
            <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" class="menu-icon">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>
        <nav class="mt-10 flex flex-col items-start">
          <NuxtLink
            v-for="item in items"
            :key="item.url"
            :to="localePath(item.url)"
            class="py-1 font-display text-[clamp(40px,12vw,64px)] leading-[1.15] uppercase decoration-accent decoration-[3px] underline-offset-8"
            :class="{ underline: isActive(item.url) }"
            @click="closeMenu"
          >
            {{ item.label }}
          </NuxtLink>
        </nav>
        <div class="mt-auto flex flex-col items-start gap-1 border-t border-white/20 pt-6">
          <LangSwitcher class="eyebrow" @click="closeMenu" />
          <a :href="phoneHref" class="py-2 font-display text-[28px] leading-9">{{ site.phone }}</a>
          <a :href="`mailto:${site.email}`" class="py-2 text-lg font-semibold">{{ site.email }}</a>
          <div class="eyebrow flex gap-x-7">
            <a
              v-for="social in socialLinks"
              :key="social.label"
              :href="social.url"
              class="py-3 underline underline-offset-[5px]"
            >
              {{ social.label }}
            </a>
          </div>
        </div>
      </div>
    </dialog>
  </header>
</template>

<script setup lang="ts">
import site from '~~/data/site.json'

defineProps<{ overlay?: boolean }>()

const { t } = useI18n()
const route = useRoute()
const localePath = useLocalePath()
const { phoneHref, socialLinks } = useContactLinks()

const items = computed(() => [
  { label: t('navigation.news'), url: '/news' },
  { label: t('navigation.portfolio'), url: '/portfolio' },
  { label: t('navigation.pricing'), url: '/pricing' },
  { label: t('navigation.about'), url: '/about' },
  { label: t('navigation.contact'), url: '/contact' },
])

const isActive = (url: string) => route.path.startsWith(localePath(url))

const dialog = ref<HTMLDialogElement>()
const open = ref(false)

function openMenu() {
  dialog.value?.showModal()
  open.value = true
}

function closeMenu() {
  dialog.value?.close()
}

const desktop = import.meta.client ? window.matchMedia('(min-width: 48rem)') : undefined
onMounted(() => desktop?.addEventListener('change', closeMenu))
onBeforeUnmount(() => desktop?.removeEventListener('change', closeMenu))
</script>

<style scoped>
.header-overlay {
  background: linear-gradient(180deg, rgb(0 0 0 / 0.72) 0%, rgb(0 0 0 / 0) 100%);
}

.menu-icon {
  fill: none;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: square;
}

.mobile-menu {
  width: 100%;
  max-width: none;
  height: 100dvh;
  max-height: none;
  margin: 0;
  padding: 0;
  border: 0;
  background: var(--color-ink);
  color: #ffffff;
}

.mobile-menu::backdrop {
  background: var(--color-ink);
}
</style>
