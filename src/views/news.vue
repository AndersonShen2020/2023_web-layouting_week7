<script setup>
import { onMounted } from "vue"

// util
import { getAssetsFile } from "@/util/pub-use"

// AOS
import AOS from "aos"
import "aos/dist/aos.css"

const tags = [
  "演出",
  "音樂",
  "舞蹈",
  "戲劇",
  "音樂會",
  "課程講座",
  "社群活動",
  "展覽",
  "研討會",
  "電影",
  "電音派對",
  "遊戲競賽",
  "親子",
  "藝文活動",
  "運動",
  "交通旅遊",
  "美食",
  "資訊科技",
  "聯誼",
  "戶外",
  "線上活動"
]

const data = [
  {
    imageUrl: "event/01.jpg",
    alt: "邪典電影派對——房間",
    date: "19 MAY 2023",
    title: "邪典電影派對——房間",
    content:
      "你有聽說過「大災難家」裡面的主角 Tommy Wiseau 製作的「史上最爛的電影」——房間嗎？在美國甚至演變成一種邪教、一種派對的形式，在電影播放的對著螢幕丟湯匙都..."
  },
  {
    imageUrl: "event/02.jpg",
    alt: "怪舞俱樂部",
    date: "23 MAY 2023",
    title: "怪舞俱樂部",
    content:
      "覺得自己的舞蹈細胞異於常人？每次隨著音樂起舞身邊的人總是露出無法理解的表情？來這裡就對了！來參加這場一起跳舞的聚會，也會在每一次的舞會中選出舞步最怪的..."
  },
  {
    imageUrl: "event/03.jpg",
    alt: "哈利波特馬拉松",
    date: "30 MAY 2023",
    title: "哈利波特馬拉松",
    content:
      "每次身邊有人開啟哈利波特的話題，自己永遠都是聽不懂的那個麻瓜？看大家在討論魁地奇、用咒語鬥法的時候，自己永遠是陪笑的那個人？穿好你的法袍、帶上你的法杖..."
  },
  {
    imageUrl: "event/04.jpg",
    alt: "皮卡丘排球大賽",
    date: "12 June 2023",
    title: "皮卡丘排球大賽",
    content:
      "還記得小時候玩的小遊戲嗎？總是有朋友吹噓自己獨孤求敗、只求一敗？是時候該展現真正的實力了！本活動採用瑞士制賽程，以絕對公平的方式進行，是時候該證明自己..."
  },
  {
    imageUrl: "event/05.jpg",
    alt: "酒精路跑",
    date: "25 June 2023",
    title: "酒精路跑",
    content:
      "身邊總是有對自己酒量有高度自信的朋友嗎？拉著他/她一起來參加酒精路跑吧！一起拍下第一杯直到倒下為止的照片，一起喝遍市區內各家極具品味的酒吧。"
  },
  {
    imageUrl: "event/06.jpg",
    alt: "展覽——我的房間",
    date: "9 July 2023",
    title: "展覽——我的房間",
    content:
      "每個人的房間總會有那麼一兩個能代表自己的物事，或許是再平凡不過的牙刷、馬克杯，或許有那些別人的房間從沒出現過的小東西——那些能定義自己的特別的東西。"
  },
  {
    imageUrl: "event/07.jpg",
    alt: "野營音樂祭",
    date: "19 MAY 2023",
    title: "野營音樂祭",
    content:
      "喜歡山水、喜歡音樂嗎？一起在溪邊來場浪漫的沉浸式森林活動吧！結合四大戶外探索類別、超過 15 項體驗與工作坊、新興音樂人的草地演唱。"
  },
  {
    imageUrl: "event/08.jpg",
    alt: "疊疊樂大賽",
    date: "19 MAY 2023",
    title: "疊疊樂大賽",
    content:
      "來到七星潭會想到什麼呢？絕對是數也數不清的扁扁石頭吧！有這項技能卻沒有機會大展身手的你，展露頭角的機會來囉！"
  },
  {
    imageUrl: "event/09.jpg",
    alt: "返老還童-制服聯誼",
    date: "18 MAY 2023",
    title: "返老還童-制服聯誼",
    content:
      "由戀愛家教「艾德溫」主辦策劃，讓各位在安排好的青春行程中擁有自然的純愛互動體驗，互相餵食餅乾、觀察對方手相，有趣的互動環節讓你/妳怦然心動！"
  },
  {
    imageUrl: "event/10.jpg",
    alt: "野外求生17天",
    date: "19 MAY 2023",
    title: "野外求生17天",
    content:
      "野外求生體驗，我們將在沒有水、沒有電的自然環境裡，學習各項生存技能，課程內容包含生火、水源取得及淨化、射箭、木食器製作、無具野炊、野地編繩和狩獵技能..."
  },
  {
    imageUrl: "event/11.jpg",
    alt: "耳熟能詳音樂祭",
    date: "19 MAY 2023",
    title: "耳熟能詳音樂祭",
    content:
      "對你來說聽都沒聽過的團，但是音樂一下保證跟著唱，重磅邀請各界隱藏天籟歌手、天團，不想曬太陽也可以在樹下當 KTV 跟著唱，唱不出來服務台報到立馬退費！"
  },
  {
    imageUrl: "event/12.jpg",
    alt: "野營發呆大賽",
    date: "19 MAY 2023",
    title: "野營發呆大賽",
    content:
      "你也是那種動不動就容易放空、神遊的人嗎？這輩子靠這技能出頭的機會來了，在恆春山林一起神遊、盡情地發呆吧！冠軍可以得到價值十萬的綿豆腐床墊一張！"
  }
]

onMounted(() => {
  AOS.init({ once: true })
})
</script>

<template>
  <main>
    <div class="container mt-md-8 mt-5">
      <h2
        class="tao-title border border-md-3 border-2 border-dark d-flex justify-content-between align-items-center"
      >
        <p class="fs-md-5 fs-15 tao-title-subtitle">EVENT</p>
        <p class="fs-md-13 fs-17 fw-bold noto-tc-serif">所有活動</p>
      </h2>
      <ul class="list-unstyled d-flex flex-wrap gap-2 mt-md-8 mt-3">
        <li v-for="(tag, i) in tags" :key="i">
          <RouterLink class="tao-link-secondary" to="/">{{ tag }}</RouterLink>
        </li>
      </ul>
    </div>
    <div class="container overflow-hidden mt-md-8 mt-3">
      <ul class="row gy-md-11 gy-7 card-news list-unstyled">
        <li
          class="col-md-4 col-12"
          data-aos="flip-up"
          v-for="datum in data"
          :key="datum.title"
        >
          <div class="card border-0">
            <div class="card-header border-3 border-dark px-0 pt-0">
              {{ datum.date }}
            </div>
            <div class="card-body pt-md-3 pb-md-4 px-0">
              <img
                :src="getAssetsFile(datum.imageUrl)"
                :alt="datum.alt"
                class="object-fit-cover"
              />
              <h5
                class="card-title noto-tc-serif fw-bold fs-md-15 mt-md-3 mt-2"
              >
                {{ datum.title }}
              </h5>
              <p class="card-text noto-tc-sans">
                {{ datum.content }}
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
        </li>
      </ul>
    </div>
    <ul
      class="pagination justify-content-center noto-tc-serif my-md-12 mt-8 mb-11 gap-2"
    >
      <li class="page-item disabled">
        <RouterLink class="page-link" to="/news">
          <i class="icofont-arrow-left"></i>
        </RouterLink>
      </li>
      <li class="page-item">
        <RouterLink class="page-link" to="/news">1</RouterLink>
      </li>
      <li class="page-item">
        <RouterLink class="page-link" to="/news">2</RouterLink>
      </li>
      <li class="page-item">
        <RouterLink class="page-link" to="/news">3</RouterLink>
      </li>
      <li class="page-item">
        <RouterLink class="page-link" to="/news">4</RouterLink>
      </li>
      <li class="page-item">
        <RouterLink class="page-link" to="/news">5</RouterLink>
      </li>
      <li class="page-item">
        <RouterLink class="page-link" to="/news">
          <i class="icofont-arrow-right"></i>
        </RouterLink>
      </li>
    </ul>
  </main>
</template>
