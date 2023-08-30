import { createRouter, createWebHistory } from "vue-router"
import IndexView from "@/views/index.vue"
import NewsView from "@/views/news.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "index",
      component: IndexView
    },
    {
      path: "/news",
      name: "news",
      component: NewsView
    }
  ]
})

export default router
