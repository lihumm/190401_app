import Vue from 'vue'
import App from './App.vue'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import Index from "./views/index/index.vue"
import Film from "./views/film/film.vue"
import Like from "./views/like/like.vue"

// 引入电影详情页
import FilmDetail from "./views/film/film-detail.vue"

// 引入路由
import VueRouter from "vue-router"

// 注册路由插件
Vue.use(VueRouter)

Vue.use(MintUI)
Vue.config.productionTip = false


// 定义路由配置
const routes = [
  { path:"/", component: Index},
  { path: "/film", component: Film },

  { path: "/like", component: Like },
  
  // 电影详情页路由
  { path: "/film-detail/:id", component: FilmDetail }
]

// 注册路由
const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  // 调用路由
  router 
}).$mount('#app')
