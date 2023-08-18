<script setup>
// import Swiper core and required modules
import { Navigation } from "swiper/modules"

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"

const modules = [Navigation]
</script>

<template>
  <main>
    <!-- 隔牆有耳-沒有草東的派對 -->
    <div class="container">
      <Swiper
        :modules="modules"
        :slides-per-view="1"
        :space-between="50"
        navigation
      >
        <SwiperSlide
          ><img src="../assets/img/event/01.jpg" alt=""
        /></SwiperSlide>
        <SwiperSlide
          ><img src="../assets/img/event/02.jpg" alt=""
        /></SwiperSlide>
        <SwiperSlide
          ><img src="../assets/img/event/03.jpg" alt=""
        /></SwiperSlide>
        <SwiperSlide
          ><img src="../assets/img/event/04.jpg" alt=""
        /></SwiperSlide>
        <SwiperSlide
          ><img src="../assets/img/event/05.jpg" alt=""
        /></SwiperSlide>
        <SwiperSlide
          ><img src="../assets/img/event/06.jpg" alt=""
        /></SwiperSlide>
        <SwiperSlide
          ><img src="../assets/img/event/07.jpg" alt=""
        /></SwiperSlide>
        <SwiperSlide
          ><img src="../assets/img/event/08.jpg" alt=""
        /></SwiperSlide>
        <SwiperSlide
          ><img src="../assets/img/event/09.jpg" alt=""
        /></SwiperSlide>
        <SwiperSlide
          ><img src="../assets/img/event/10.jpg" alt=""
        /></SwiperSlide>
        <SwiperSlide
          ><img src="../assets/img/event/11.jpg" alt=""
        /></SwiperSlide>
        <SwiperSlide
          ><img src="../assets/img/event/12.jpg" alt=""
        /></SwiperSlide>
        <SwiperSlide
          ><img src="../assets/img/event/13.jpg" alt=""
        /></SwiperSlide>
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
