<template>
  <div>
    <section class="relative bg-ink text-white">
      <div class="hero grid grid-cols-2">
        <div v-for="(photo, i) in heroPhotos" :key="photo.src" class="relative min-w-0">
          <img
            :src="photo.src"
            alt=""
            fetchpriority="high"
            class="absolute inset-0 size-full object-cover"
          />
          <span
            class="absolute top-24 inline-flex md:top-[172px] h-8 items-center gap-2 bg-ink px-3 text-xs font-semibold tracking-[0.16em] uppercase"
            :class="i === 0 ? 'left-[min(64px,10%)]' : 'right-[min(64px,10%)]'"
          >
            <span aria-hidden="true" class="size-1.5 bg-accent" />
            {{ photo.label }}
          </span>
        </div>
      </div>
      <div class="hero-fade gutter absolute inset-x-0 bottom-0 flex flex-col gap-5 pt-44 pb-10">
        <p
          class="text-center font-display text-[clamp(28px,9vw,130px)] leading-[1.05] tracking-[0.01em] whitespace-nowrap uppercase"
        >
          Tatyana Tomšíčková
        </p>
        <ContentRenderer v-if="page" :value="page" class="hero-copy" />
      </div>
    </section>

    <section id="portfolio" class="gutter pt-20 md:pt-30">
      <div class="page-width flex flex-col gap-12 md:gap-16">
        <div class="flex flex-wrap items-end justify-between gap-x-8 gap-y-2">
          <h2 class="display-title">{{ t('navigation.portfolio') }}</h2>
          <NuxtLink
            :to="localePath('/portfolio')"
            class="eyebrow inline-flex h-11 items-center gap-2.5 hover:text-accent"
          >
            {{ t('home.allGalleries') }}
            <IconArrow />
          </NuxtLink>
        </div>
        <GalleryGrid />
      </div>
    </section>

    <section id="about" class="gutter mt-20 bg-ink py-20 text-white md:mt-30 md:py-22">
      <div class="page-width flex flex-wrap items-center gap-x-24 gap-y-12">
        <img
          v-if="portrait"
          :src="portrait"
          :alt="site.name"
          loading="lazy"
          class="h-[520px] w-[400px] max-w-full min-w-0 flex-[0_1_400px] object-cover object-[50%_25%]"
        />
        <div class="flex min-w-0 flex-[1_1_420px] flex-col gap-6">
          <ContentRenderer v-if="aboutIntro" :value="aboutIntro" class="about-intro" />
          <NuxtLink
            :to="localePath('/about')"
            class="eyebrow inline-flex h-11 items-center self-start underline underline-offset-[5px] hover:decoration-accent"
          >
            {{ t('home.moreAbout') }}
          </NuxtLink>
        </div>
      </div>
    </section>

    <ContactSection>
      <h2 class="font-display text-[clamp(44px,7.2vw,104px)] leading-[1.02] text-balance uppercase">
        {{ t('contact.heading') }}
      </h2>
    </ContactSection>
  </div>
</template>

<script setup lang="ts">
import site from '~~/data/site.json'

const { t } = useI18n()
const route = useRoute()
const localePath = useLocalePath()

const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('content').path(route.path).first()
})

const aboutPath = localePath('/about')
const { data: about } = await useAsyncData(`about-intro:${aboutPath}`, () => {
  return queryCollection('content').path(aboutPath).first()
})

const aboutIntro = computed(() => {
  if (!about.value) return null
  const nodes = []
  let paragraphs = 0
  for (const node of about.value.body.value) {
    if (Array.isArray(node) && node[0] === 'p' && ++paragraphs > 2) break
    nodes.push(node)
  }
  return { ...about.value, body: { ...about.value.body, value: nodes } }
})

const heroImages = Object.values(
  import.meta.glob<string>('~/assets/images/homepage/*.{jpg,jpeg,png,webp}', {
    eager: true,
    import: 'default',
  })
)

const heroPhotos = computed(() =>
  [
    { src: heroImages[0], label: t('home.studio') },
    { src: heroImages[1], label: t('home.outdoor') },
  ].filter((photo) => photo.src)
)

const portrait = Object.values(
  import.meta.glob<string>('~/assets/images/about/*.{jpg,jpeg,png,webp}', {
    eager: true,
    import: 'default',
  })
)[0]
</script>

<style scoped>
.hero {
  height: max(520px, min(100svh - 44px, 150vw, 860px));
}

.hero-fade {
  background: linear-gradient(
    0deg,
    rgb(0 0 0 / 0.86) 0%,
    rgb(0 0 0 / 0.6) 45%,
    rgb(0 0 0 / 0) 100%
  );
}

.hero-copy {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 16px 48px;
}

.hero-copy :deep(:where(h1, p)) {
  max-width: 560px;
  margin: 0;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.45;
  text-wrap: balance;
}

.hero-copy :deep(h2) {
  margin: 0;
}

.about-intro {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.about-intro :deep(h2) {
  margin: 0;
  font-family: var(--font-display);
  font-size: clamp(64px, 9vw, 128px);
  font-weight: 400;
  line-height: 1;
  text-transform: uppercase;
}

.about-intro :deep(p) {
  max-width: 600px;
  margin: 0;
  color: #e6e6e6;
  font-size: 19px;
}

.about-intro :deep(a) {
  color: #ffffff;
  text-decoration: underline;
  text-underline-offset: 4px;
}

.about-intro :deep(strong) {
  font-weight: 600;
}
</style>
