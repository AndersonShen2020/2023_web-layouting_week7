<script setup>
// import Swiper core and required modules
import { Navigation } from "swiper/modules"

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"

// util
import { getAssetsFile } from "@/util/pub-use"

const modules = [Navigation]
const images = [
  { url: "01.jpg", alt: "01" },
  { url: "02.jpg", alt: "02" },
  { url: "03.jpg", alt: "03" },
  { url: "04.jpg", alt: "04" },
  { url: "05.jpg", alt: "05" },
  { url: "06.jpg", alt: "06" },
  { url: "07.jpg", alt: "07" },
  { url: "08.jpg", alt: "08" },
  { url: "09.jpg", alt: "09" },
  { url: "10.jpg", alt: "10" },
  { url: "11.jpg", alt: "11" },
  { url: "12.jpg", alt: "12" },
  { url: "13.jpg", alt: "13" }
]
</script>

<template>
  <main>
    <!-- 隔牆有耳-沒有草東的派對 -->
    <div class="container mt-8">
      <Swiper
        :modules="modules"
        :slides-per-view="1"
        :space-between="50"
        navigation
      >
        <SwiperSlide v-for="image in images" :key="image.alt">
          <img :src="getAssetsFile(image.url)" :alt="image.alt" />
        </SwiperSlide>
      </Swiper>
    </div>

    <!-- NAV -->
    <div class="container"></div>

    <!-- RECENT 近期活動 -->
    <div class="container"></div>

    <!-- ONLINE 線上活動 -->
    <div class="container"></div>

    <!-- 活動集錦・ALBUMS -->
    <div class="container"></div>

    <!-- FOLLOW subscribe -->
    <div class="container"></div>
  </main>
</template>
