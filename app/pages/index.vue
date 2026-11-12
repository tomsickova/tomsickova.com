<template>
  <div>
    <div style="min-height: 25vh">
      <ContentRenderer
        v-if="page"
        :value="page"
        class="t-padding font-serif text-3xl lg:text-5xl text-center leading-tight lg:leading-none max-w-4xl mx-auto"
      />
    </div>
    <Swiper
      :modules="[Autoplay]"
      :autoplay="{
        delay: 3000,
        disableOnInteraction: false,
      }"
    >
      <SwiperSlide v-for="image in images" :key="image" class="swiper-slide aspect-video">
        <img :src="image" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup lang="ts">
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('content').path(route.path).first()
})

const images = Object.values(
  import.meta.glob<string>('~/assets/images/homepage/*.{jpg,jpeg,png,webp}', {
    eager: true,
    import: 'default',
  })
)
</script>

<style lang="postcss" scoped>
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
</style>
