<template>
  <div>
    <div style="min-height: 25vh">
      <ContentRenderer
        v-if="page"
        :value="page"
        class="t-padding font-serif text-3xl lg:text-5xl text-center leading-tight max-w-4xl mx-auto"
      />
    </div>
    <Swiper
      :modules="[Autoplay]"
      :autoplay="{
        delay: 3000,
        disableOnInteraction: false,
      }"
    >
      <SwiperSlide v-for="image in images" :key="image" class="swiper-slide aspect-w-16 aspect-h-9">
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
  import.meta.glob('~/assets/images/homepage/*.jpg', { eager: true })
).map((v: any) => v.default)
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
