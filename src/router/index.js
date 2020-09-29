import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../components/home.vue'
import topBar from "@/components/topBar.vue";
import leftBar from "@/components/leftBar.vue";
import player from "@/components/player";
import recommendList from '../views/recommendList.vue'
import app from '../App.vue'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'app',
    components: {
      home: home,
      topBar: topBar,
      leftBar: leftBar,
      player: player,
      default: app
    },
  },
  {
    path: '/home',
    name: 'home',
    components: {
      recommend: recommendList,
      default: home
    },
    children: [
      {
        path: 'recommend/:id',
        name: 'recommend',
        component: recommendList,
      },
    ]
  },


]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
