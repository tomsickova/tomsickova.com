<template>
  <div class="swiper-container my-6">
    <div class="swiper-wrapper">
      <div v-for="image in $accessor.home" :key="image" class="swiper-slide aspect-w-16 aspect-h-9">
        <img :src="image" />
      </div>
    </div>
  </div>
</template>

<script>
import { Vue, Component } from 'nuxt-property-decorator'
import SwiperInstance from 'swiper/bundle'
import 'swiper/swiper-bundle.css'

@Component
export default class Homepage extends Vue {
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
