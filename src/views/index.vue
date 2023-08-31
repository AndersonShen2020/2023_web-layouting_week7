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
              <h2 class="card-title ms-7 ms-md-8 mt-md-8 fs-13 fs-md-6">
                {{ event.date }}
              </h2>
              <div class="text-center mb-2">
                <h3 class="card-text noto-tc-serif fs-md-15 fs-17 mb-md-5">
                  {{ event.title }}
                </h3>
                <p
                  class="card-text d-none d-md-block"
                  v-html="event.content"
                ></p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>

    <!-- NAV -->
    <div class="container mt-md-11 mt-8 noto-tc-serif">
      <ul class="row g-2 g-lg-3 list-unstyled">
        <li class="col-lg-2 col-4 text-center">
          <div class="border border-2 border-dark">
            <RouterLink class="d-block cate" to="/">
              <img
                class="cate-img img-fluid"
                src="../assets/img/cate01.svg"
                alt="演出"
              />
              <p class="mt-md-3 mt-2 fs-md-15 fs-17 fw-bold">演出</p>
            </RouterLink>
          </div>
        </li>
        <li class="col-lg-2 col-4 text-center">
          <div class="border border-2 border-dark">
            <RouterLink class="d-block cate" to="/">
              <img
                class="cate-img img-fluid"
                src="../assets/img/cate02.svg"
                alt="聯誼"
              />
              <p class="mt-md-3 mt-2 fs-md-15 fs-17 fw-bold">聯誼</p>
            </RouterLink>
          </div>
        </li>
        <li class="col-lg-2 col-4 text-center">
          <div class="border border-2 border-dark">
            <RouterLink class="d-block cate" to="/">
              <img
                class="cate-img img-fluid"
                src="../assets/img/cate03.svg"
                alt="展覽"
              />
              <p class="mt-md-3 mt-2 fs-md-15 fs-17 fw-bold">展覽</p>
            </RouterLink>
          </div>
        </li>
        <li class="col-lg-2 col-4 text-center">
          <div class="border border-2 border-dark">
            <RouterLink class="d-block cate" to="/">
              <img
                class="cate-img img-fluid"
                src="../assets/img/cate04.svg"
                alt="美食"
              />
              <p class="mt-md-3 mt-2 fs-md-15 fs-17 fw-bold">美食</p>
            </RouterLink>
          </div>
        </li>
        <li class="col-lg-2 col-4 text-center">
          <div class="border border-2 border-dark">
            <RouterLink class="d-block cate" to="/">
              <img
                class="cate-img img-fluid"
                src="../assets/img/cate05.svg"
                alt="戶外"
              />
              <p class="mt-md-3 mt-2 fs-md-15 fs-17 fw-bold">戶外</p>
            </RouterLink>
          </div>
        </li>
        <li class="col-lg-2 col-4 text-center">
          <div class="border border-2 border-dark h-100">
            <RouterLink
              class="d-block cate-more fw-bold bg-primary text-secondary"
              to="/news"
            >
              <p class="fs-md-9 fs-15">
                探索 <br />
                更多
              </p>
            </RouterLink>
          </div>
        </li>
      </ul>
    </div>

    <!-- RECENT 近期活動 -->
    <div class="container card-news mt-md-11 mt-8">
      <h2
        class="tao-title border border-md-3 border-2 border-dark d-flex justify-content-between align-items-center"
      >
        <p class="fs-md-5 fs-15 tao-title-subtitle">RECENT</p>
        <p class="fs-md-13 fs-17 fw-bold noto-tc-serif">近期活動</p>
      </h2>
      <div class="row gy-md-11 gy-7 mt-0">
        <div class="col-md-4 col-12">
          <div class="card border-0 mb-3">
            <div class="card-header border-3 border-dark px-0 pt-0">
              19 MAY 2023
            </div>
            <div class="card-body pt-md-3 pb-md-4 px-0">
              <img
                src="../assets/img/event/01.jpg"
                alt=""
                class="object-fit-cover"
              />
              <h5
                class="card-title noto-tc-serif fw-bold fs-md-15 mt-md-3 mt-2"
              >
                邪典電影派對——房間
              </h5>
              <p class="card-text noto-tc-sans">
                你有聽說過「大災難家」裡面的主角 Tommy Wiseau
                製作的「史上最爛的電影」——房間嗎？在美國甚至演變成一種邪教、一種派對的形式，在電影播放的對著螢幕丟湯匙都...
              </p>
            </div>
            <div
              class="card-footer border-2 border-bottom border-dark d-flex justify-content-between px-0 fw-bold"
            >
              <div class="d-flex align-items-center">
                <img
                  class="icon me-1"
                  src="../assets/img/sparkler.png"
                  alt=""
                />
                <RouterLink to="/">社群活動</RouterLink>
              </div>
              <RouterLink class="d-flex align-items-center link-sales" to="/">
                <p class="me-1">開賣中</p>
                <span class="material-symbols-outlined">
                  keyboard_double_arrow_right
                </span>
              </RouterLink>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-12">
          <div class="card border-0 mb-3">
            <div class="card-header border-3 border-dark px-0 pt-0">
              23 MAY 2023
            </div>
            <div class="card-body pt-md-3 pb-md-4 px-0">
              <img
                src="../assets/img/event/02.jpg"
                alt=""
                class="object-fit-cover"
              />
              <h5
                class="card-title noto-tc-serif fw-bold fs-md-15 mt-md-3 mt-2"
              >
                怪舞俱樂部
              </h5>
              <p class="card-text noto-tc-sans">
                覺得自己的舞蹈細胞異於常人？每次隨著音樂起舞身邊的人總是露出無法理解的表情？來這裡就對了！來參加這場一起跳舞的聚會，也會在每一次的舞會中選出舞步最怪的...
              </p>
            </div>
            <div
              class="card-footer border-2 border-bottom border-dark d-flex justify-content-between px-0 fw-bold"
            >
              <div class="d-flex align-items-center">
                <img
                  class="icon me-1"
                  src="../assets/img/sparkler.png"
                  alt=""
                />
                <RouterLink to="/">演出</RouterLink>
              </div>
              <RouterLink class="d-flex align-items-center link-sales" to="/">
                <p class="me-1">檢視活動</p>
                <span class="material-symbols-outlined">
                  keyboard_double_arrow_right
                </span>
              </RouterLink>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-12">
          <div class="card border-0 mb-3">
            <div class="card-header border-3 border-dark px-0 pt-0">
              30 MAY 2023
            </div>
            <div class="card-body pt-md-3 pb-md-4 px-0">
              <img
                src="../assets/img/event/03.jpg"
                alt=""
                class="object-fit-cover"
              />
              <h5
                class="card-title noto-tc-serif fw-bold fs-md-15 mt-md-3 mt-2"
              >
                哈利波特馬拉松
              </h5>
              <p class="card-text noto-tc-sans">
                每次身邊有人開啟哈利波特的話題，自己永遠都是聽不懂的那個麻瓜？看大家在討論魁地奇、用咒語鬥法的時候，自己永遠是陪笑的那個人？穿好你的法袍、帶上你的法杖...
              </p>
            </div>
            <div
              class="card-footer border-2 border-bottom border-dark d-flex justify-content-between px-0 fw-bold"
            >
              <div class="d-flex align-items-center">
                <img
                  class="icon me-1"
                  src="../assets/img/sparkler.png"
                  alt=""
                />
                <RouterLink to="/">聯誼</RouterLink>
              </div>
              <RouterLink class="d-flex align-items-center link-sales" to="/">
                <p class="me-1">開賣中</p>
                <span class="material-symbols-outlined">
                  keyboard_double_arrow_right
                </span>
              </RouterLink>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-12">
          <div class="card border-0 mb-3">
            <div class="card-header border-3 border-dark px-0 pt-0">
              12 June 2023
            </div>
            <div class="card-body pt-md-3 pb-md-4 px-0">
              <img
                src="../assets/img/event/04.jpg"
                alt=""
                class="object-fit-cover"
              />
              <h5
                class="card-title noto-tc-serif fw-bold fs-md-15 mt-md-3 mt-2"
              >
                皮卡丘排球大賽
              </h5>
              <p class="card-text noto-tc-sans">
                還記得小時候玩的小遊戲嗎？總是有朋友吹噓自己獨孤求敗、只求一敗？是時候該展現真正的實力了！本活動採用瑞士制賽程，以絕對公平的方式進行，是時候該證明自己...
              </p>
            </div>
            <div
              class="card-footer border-2 border-bottom border-dark d-flex justify-content-between px-0 fw-bold"
            >
              <div class="d-flex align-items-center">
                <img
                  class="icon me-1"
                  src="../assets/img/sparkler.png"
                  alt=""
                />
                <RouterLink to="/">遊戲競賽</RouterLink>
              </div>
              <RouterLink class="d-flex align-items-center link-sales" to="/">
                <p class="me-1">開賣中</p>
                <span class="material-symbols-outlined">
                  keyboard_double_arrow_right
                </span>
              </RouterLink>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-12">
          <div class="card border-0 mb-3">
            <div class="card-header border-3 border-dark px-0 pt-0">
              25 June 2023
            </div>
            <div class="card-body pt-md-3 pb-md-4 px-0">
              <img
                src="../assets/img/event/05.jpg"
                alt=""
                class="object-fit-cover"
              />
              <h5
                class="card-title noto-tc-serif fw-bold fs-md-15 mt-md-3 mt-2"
              >
                酒精路跑
              </h5>
              <p class="card-text noto-tc-sans">
                身邊總是有對自己酒量有高度自信的朋友嗎？拉著他/她一起來參加酒精路跑吧！一起拍下第一杯直到倒下為止的照片，一起喝遍市區內各家極具品味的酒吧。
              </p>
            </div>
            <div
              class="card-footer border-2 border-bottom border-dark d-flex justify-content-between px-0 fw-bold"
            >
              <div class="d-flex align-items-center">
                <img
                  class="icon me-1"
                  src="../assets/img/sparkler.png"
                  alt=""
                />
                <RouterLink to="/">社群活動</RouterLink>
              </div>
              <RouterLink class="d-flex align-items-center link-sales" to="/">
                <p class="me-1">開賣中</p>
                <span class="material-symbols-outlined">
                  keyboard_double_arrow_right
                </span>
              </RouterLink>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-12">
          <div class="card border-0 mb-3">
            <div class="card-header border-3 border-dark px-0 pt-0">
              9 July 2023
            </div>
            <div class="card-body pt-md-3 pb-md-4 px-0">
              <img
                src="../assets/img/event/06.jpg"
                alt=""
                class="object-fit-cover"
              />
              <h5
                class="card-title noto-tc-serif fw-bold fs-md-15 mt-md-3 mt-2"
              >
                展覽——我的房間
              </h5>
              <p class="card-text noto-tc-sans">
                每個人的房間總會有那麼一兩個能代表自己的物事，或許是再平凡不過的牙刷、馬克杯，或許有那些別人的房間從沒出現過的小東西——那些能定義自己的特別的東西。
              </p>
            </div>
            <div
              class="card-footer border-2 border-bottom border-dark d-flex justify-content-between px-0 fw-bold"
            >
              <div class="d-flex align-items-center">
                <img
                  class="icon me-1"
                  src="../assets/img/sparkler.png"
                  alt=""
                />
                <RouterLink to="/">展覽</RouterLink>
              </div>
              <RouterLink class="d-flex align-items-center link-sales" to="/">
                <p class="me-1">開賣中</p>
                <span class="material-symbols-outlined">
                  keyboard_double_arrow_right
                </span>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ONLINE 線上活動 -->
    <div class="container online mt-md-11 mt-6">
      <h2
        class="tao-title border border-md-3 border-2 border-dark d-flex justify-content-between align-items-center"
      >
        <p class="fs-md-5 fs-15 tao-title-subtitle">ONLINE</p>
        <p class="fs-md-13 fs-17 fw-bold noto-tc-serif">線上活動</p>
      </h2>
      <div class="row mt-md-8 mt-7">
        <div class="col-md-7 col-12 mb-md-0 mb-3">
          <img
            class="object-fit-cover"
            src="../assets/img/event/online.jpg"
            alt=""
          />
        </div>
        <div class="col-md-5 col-12">
          <h3 class="fw-bold mb-md-5 mb-2">切特居批踢</h3>
          <ul class="list-unstyled d-flex gap-2 mb-md-8 mb-3">
            <li>
              <RouterLink class="tao-link-secondary" to="/">競賽</RouterLink>
            </li>
            <li>
              <RouterLink class="tao-link-secondary" to="/">科技</RouterLink>
            </li>
            <li>
              <RouterLink class="tao-link-secondary" to="/">有趣</RouterLink>
            </li>
          </ul>
          <p class="noto-tc-sans mb-md-8 mb-3">
            最近網路上很流行的AI程式
            ChatGPT，可以用來聊天或是查詢、整理各種資料，不同的應用方式如雨後春筍般冒出來。
            <br />
            這個活動讓大家把自己最有特色的使用方法提出來讓大家參考，也會投票出最有趣的用法。
            <br />
            該讓其他人知道自己使用 ChatGPT 的姿勢才是最特別的那個了！
          </p>
          <RouterLink
            class="d-flex align-items-center justify-content-center tao-link-primary"
            to="/"
          >
            <p class="me-1">查看活動詳情</p>
            <span class="material-symbols-outlined">
              keyboard_double_arrow_right
            </span>
          </RouterLink>
        </div>
      </div>
    </div>

    <!-- 活動集錦・ALBUMS -->
    <div class="albums noto-tc-serif mt-md-12 mt-11">
      <Swiper
        :modules="modules"
        slidesPerView="auto"
        allowTouchMove="false"
        speed="7000"
        :loop="true"
        :autoplay="{
          delay: 0,
          disableOnInteraction: false
        }"
      >
        <SwiperSlide v-for="i in 5" :key="i">
          活動集錦・ALBUMS・活動集錦・ALBUMS・活動集錦・ALBUMS・活動集錦・ALBUMS・活動集錦・ALBUMS・
        </SwiperSlide>
      </Swiper>
      <div class="container mt-md-12 mt-8">
        <ul class="row justify-content-center mt-60 list-unstyled">
          <li class="col-md-3 col-10">
            <div
              class="item border border-2 border-dark p-3 pb-5 position-relative"
            >
              <h2
                class="position-absolute top-0 start-50 translate-middle bg-white px-3 py-2 fw-bold h2-transform"
              >
                社群活動
              </h2>
              <img
                src="https://github.com/hexschool/2022-web-layout-training/blob/main/2023week6/album/01.jpg?raw=true"
                class="img-fluid w-100 object-fit-cover"
                alt="社群活動"
              />
              <p class="pt-3">無聲派對-閉閉嘴dancing</p>
            </div>
          </li>

          <li class="col-md-3 col-10 mt-md-0 mt-9">
            <div
              class="item border border-2 border-dark p-3 pb-5 position-relative"
            >
              <h2
                class="position-absolute top-0 start-50 bg-white px-3 py-2 fw-bold h2-transform"
              >
                藝文活動
              </h2>
              <img
                src="https://github.com/hexschool/2022-web-layout-training/blob/main/2023week6/album/02.jpg?raw=true"
                class="img-fluid w-100 object-fit-cover"
                alt="藝文活動"
              />
              <p class="pt-3">搶救老店大作戰</p>
            </div>
          </li>

          <li class="col-md-3 col-10 mt-md-0 mt-9">
            <div
              class="item border border-2 border-dark p-3 pb-5 position-relative"
            >
              <h2
                class="position-absolute top-0 start-50 bg-white px-3 py-2 fw-bold h2-transform"
              >
                自我覺察
              </h2>
              <img
                src="https://github.com/hexschool/2022-web-layout-training/blob/main/2023week6/album/03.jpg?raw=true"
                class="img-fluid w-100 object-fit-cover"
                alt="自我覺察"
              />
              <p class="pt-3">內觀修行-部落篇</p>
            </div>
          </li>

          <li class="col-md-3 col-10 mt-md-0 mt-9">
            <div
              class="item border border-2 border-dark p-3 pb-5 position-relative"
            >
              <h2
                class="position-absolute top-0 start-50 bg-white px-3 py-2 fw-bold h2-transform"
              >
                聯誼活動
              </h2>
              <img
                src="https://github.com/hexschool/2022-web-layout-training/blob/main/2023week6/album/04.jpg?raw=true"
                class="img-fluid w-100 object-fit-cover"
                alt="聯誼活動"
              />
              <p class="pt-3">賞櫻野餐</p>
            </div>
          </li>
        </ul>
      </div>
      <Swiper
        class="mt-md-12 mt-11"
        :modules="modules"
        slidesPerView="auto"
        allowTouchMove="false"
        speed="7000"
        :loop="true"
        :autoplay="{
          delay: 0,
          disableOnInteraction: false
        }"
      >
        <SwiperSlide v-for="i in 5" :key="i">
          活動集錦・ALBUMS・活動集錦・ALBUMS・活動集錦・ALBUMS・活動集錦・ALBUMS・活動集錦・ALBUMS・
        </SwiperSlide>
      </Swiper>
    </div>

    <!-- FOLLOW SUBSCRIBE -->
    <div class="container follow mt-md-12 mt-11">
      <div class="d-flex flex-md-row flex-column">
        <div class="w-100 border border-2 border-primary">
          <h2
            class="noto-tc-serif border border-0 border-bottom border-primary border-2 py-5 px-md-8 px-3"
          >
            #FOLLOW US
          </h2>
          <div class="py-md-8 py-5 px-md-8 px-3">
            <p>
              想第一時間獲得新奇有趣的活動資訊？<br />
              追蹤我們的社群吧！<br />
              也歡迎你聯繫我們，提供好玩有趣的活動企劃。
            </p>
            <ul class="list-unstyled mt-md-8 mt-5 mb-0">
              <li>
                <i class="icon icofont-ui-email"></i>
                <a href="mailto:7tao.event@gmail.com">7tao.event@gmail.com</a>
              </li>
              <li>
                <i class="icon icofont-phone"></i>
                <a href="tel:09123123123">09123123123</a>
              </li>
              <li>
                <i class="icon icofont-facebook"></i>
                <a href="/">7TAO七逃</a>
              </li>
            </ul>
          </div>
        </div>
        <div
          class="w-100 border border-2 border-start-md-0 border-primary mt-md-0 mt-7"
        >
          <h2
            class="noto-tc-serif border border-0 border-bottom border-primary border-2 py-5 px-md-8 px-3"
          >
            #SUBSCRIBE US
          </h2>
          <div class="d-flex flex-column justify-content-between">
            <div class="py-md-8 py-5 px-md-8 px-3">
              <p>
                訂閱電子報送折價券！<br />
                定期精選文章資訊及最新優惠資訊，<br />
                還不通通給我訂閱起來？
              </p>
              <input
                class="w-100 mt-8"
                type="email"
                name="email"
                placeholder="輸入Email"
              />
            </div>
            <RouterLink
              class="d-flex align-items-center justify-content-center tao-link-primary"
              to="/"
            >
              <p class="me-1">查看活動詳情</p>
              <span class="material-symbols-outlined">
                keyboard_double_arrow_right
              </span>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>

    <!-- 名言 -->
    <div
      class="container-fluid proverb text-center fw-bold noto-tc-serif border border-3 border-start-0 border-end-0 border-bottom-0 border-primary py-md-12 py-11 mt-md-12 mt-11"
    >
      <p>此刻打盹，你將做夢；此刻學習，你將圓夢</p>
      <p class="mt-md-5 mt-3">——我也不知道誰說的</p>
    </div>
  </main>
</template>
