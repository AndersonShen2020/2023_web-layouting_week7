<script setup>
// import Swiper core and required modules
import { Navigation, Autoplay } from "swiper/modules"

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/autoplay"

// util
import { getAssetsFile } from "@/util/pub-use"

const modules = [Navigation, Autoplay]
const events = [
  {
    imageUrl: "event/01.jpg",
    alt: "01",
    date: "19 MAY 2023",
    title: "隔牆有耳-沒有草東的派對",
    content:
      "你各位聽團仔們！每次想跟朋友一起聽草東專場卻每一次都搶不到票？「草東沒有派對」永遠都是「草東沒有門票」！<br /> 帶上啤酒、野餐墊，讓我們在Live House外面一起開場「沒有草東的派對」吧！"
  },
  {
    imageUrl: "event/02.jpg",
    alt: "02",
    date: "19 MAY 2023",
    title: "隔牆有耳-沒有草東的派對",
    content:
      "你各位聽團仔們！每次想跟朋友一起聽草東專場卻每一次都搶不到票？「草東沒有派對」永遠都是「草東沒有門票」！<br /> 帶上啤酒、野餐墊，讓我們在Live House外面一起開場「沒有草東的派對」吧！"
  },
  {
    imageUrl: "event/03.jpg",
    alt: "03",
    date: "19 MAY 2023",
    title: "隔牆有耳-沒有草東的派對",
    content:
      "你各位聽團仔們！每次想跟朋友一起聽草東專場卻每一次都搶不到票？「草東沒有派對」永遠都是「草東沒有門票」！<br /> 帶上啤酒、野餐墊，讓我們在Live House外面一起開場「沒有草東的派對」吧！"
  },
  {
    imageUrl: "event/04.jpg",
    alt: "04",
    date: "19 MAY 2023",
    title: "隔牆有耳-沒有草東的派對",
    content:
      "你各位聽團仔們！每次想跟朋友一起聽草東專場卻每一次都搶不到票？「草東沒有派對」永遠都是「草東沒有門票」！<br /> 帶上啤酒、野餐墊，讓我們在Live House外面一起開場「沒有草東的派對」吧！"
  },
  {
    imageUrl: "event/05.jpg",
    alt: "05",
    date: "19 MAY 2023",
    title: "隔牆有耳-沒有草東的派對",
    content:
      "你各位聽團仔們！每次想跟朋友一起聽草東專場卻每一次都搶不到票？「草東沒有派對」永遠都是「草東沒有門票」！<br /> 帶上啤酒、野餐墊，讓我們在Live House外面一起開場「沒有草東的派對」吧！"
  },
  {
    imageUrl: "event/06.jpg",
    alt: "06",
    date: "19 MAY 2023",
    title: "隔牆有耳-沒有草東的派對",
    content:
      "你各位聽團仔們！每次想跟朋友一起聽草東專場卻每一次都搶不到票？「草東沒有派對」永遠都是「草東沒有門票」！<br /> 帶上啤酒、野餐墊，讓我們在Live House外面一起開場「沒有草東的派對」吧！"
  },
  {
    imageUrl: "event/07.jpg",
    alt: "07",
    date: "19 MAY 2023",
    title: "隔牆有耳-沒有草東的派對",
    content:
      "你各位聽團仔們！每次想跟朋友一起聽草東專場卻每一次都搶不到票？「草東沒有派對」永遠都是「草東沒有門票」！<br /> 帶上啤酒、野餐墊，讓我們在Live House外面一起開場「沒有草東的派對」吧！"
  },
  {
    imageUrl: "event/08.jpg",
    alt: "08",
    date: "19 MAY 2023",
    title: "隔牆有耳-沒有草東的派對",
    content:
      "你各位聽團仔們！每次想跟朋友一起聽草東專場卻每一次都搶不到票？「草東沒有派對」永遠都是「草東沒有門票」！<br /> 帶上啤酒、野餐墊，讓我們在Live House外面一起開場「沒有草東的派對」吧！"
  },
  {
    imageUrl: "event/09.jpg",
    alt: "09",
    date: "19 MAY 2023",
    title: "隔牆有耳-沒有草東的派對",
    content:
      "你各位聽團仔們！每次想跟朋友一起聽草東專場卻每一次都搶不到票？「草東沒有派對」永遠都是「草東沒有門票」！<br /> 帶上啤酒、野餐墊，讓我們在Live House外面一起開場「沒有草東的派對」吧！"
  },
  {
    imageUrl: "event/10.jpg",
    alt: "10",
    date: "19 MAY 2023",
    title: "隔牆有耳-沒有草東的派對",
    content:
      "你各位聽團仔們！每次想跟朋友一起聽草東專場卻每一次都搶不到票？「草東沒有派對」永遠都是「草東沒有門票」！<br /> 帶上啤酒、野餐墊，讓我們在Live House外面一起開場「沒有草東的派對」吧！"
  },
  {
    imageUrl: "event/11.jpg",
    alt: "11",
    date: "19 MAY 2023",
    title: "隔牆有耳-沒有草東的派對",
    content:
      "你各位聽團仔們！每次想跟朋友一起聽草東專場卻每一次都搶不到票？「草東沒有派對」永遠都是「草東沒有門票」！<br /> 帶上啤酒、野餐墊，讓我們在Live House外面一起開場「沒有草東的派對」吧！"
  },
  {
    imageUrl: "event/12.jpg",
    alt: "12",
    date: "19 MAY 2023",
    title: "隔牆有耳-沒有草東的派對",
    content:
      "你各位聽團仔們！每次想跟朋友一起聽草東專場卻每一次都搶不到票？「草東沒有派對」永遠都是「草東沒有門票」！<br /> 帶上啤酒、野餐墊，讓我們在Live House外面一起開場「沒有草東的派對」吧！"
  },
  {
    imageUrl: "event/13.jpg",
    alt: "13",
    date: "19 MAY 2023",
    title: "隔牆有耳-沒有草東的派對",
    content:
      "你各位聽團仔們！每次想跟朋友一起聽草東專場卻每一次都搶不到票？「草東沒有派對」永遠都是「草東沒有門票」！<br /> 帶上啤酒、野餐墊，讓我們在Live House外面一起開場「沒有草東的派對」吧！"
  }
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
        :navigation="true"
        :loop="true"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false
        }"
      >
        <SwiperSlide v-for="event in events" :key="event.alt">
          <div class="card">
            <img :src="getAssetsFile(event.imageUrl)" :alt="event.alt" />
            <div
              class="card-img-overlay text-white d-flex flex-column justify-content-between"
            >
              <h2 class="card-title ms-8 mt-8 fs-6">{{ event.date }}</h2>
              <div class="text-center mb-2">
                <h3 class="card-text noto-tc-serif fs-15 mb-5">
                  {{ event.title }}
                </h3>
                <p class="card-text" v-html="event.content"></p>
              </div>
            </div>
          </div>
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
