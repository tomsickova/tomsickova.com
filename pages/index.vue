<template>
  <div>
    <!-- <div class="flex justify-center"> -->
    <div style="min-height: 25vh">
      <h1
        class="
          t-padding
          font-serif
          text-3xl
          lg:text-5xl
          text-center
          leading-tight
          max-w-4xl
          mx-auto
        "
        v-html="homePage.heading"
      />
      <!-- </div> -->
    </div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div
          v-for="image in homePage.images"
          :key="image.url"
          class="swiper-slide aspect-w-16 aspect-h-9"
        >
          <img :src="image.url" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Context } from '@nuxt/types'
import { Vue, Component } from 'nuxt-property-decorator'
import SwiperInstance from 'swiper/bundle'
import 'swiper/swiper-bundle.css'
import { Image } from '~/types'

type HomePageType = {
  heading: string
  images: Image[]
}

@Component
export default class Homepage extends Vue {
  homePage!: HomePageType

  async asyncData({ $strapi, i18n }: Context) {
    const homePage = await $strapi.find('home-page', { _locale: i18n.locale })

    return {
      homePage,
    }
  }

  mounted() {
    // eslint-disable-next-line
    new SwiperInstance('.swiper-container', {
      autoplay: true,
    })
  }
}
</script>

<style lang="postcss" scoped>
.swiper-container {
  .swiper-slide {
    img {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      object-fit: cover;
    }
  }
}
</style>
