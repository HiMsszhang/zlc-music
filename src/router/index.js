import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../components/home.vue'
import topBar from "@/components/topBar.vue";
import leftBar from "@/components/leftBar.vue";
import player from "@/components/player";
import recommendList from '@/views/recommendList.vue'
import app from '../App.vue'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'app',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    components: {
      topBar: topBar,
      leftBar: leftBar,
      player: player,
      default: home
    }
  },
  {
    path: '/recommend/:id',
    name: 'recommend',
    components: {
      topBar: topBar,
      leftBar: leftBar,
      player: player,
      default: recommendList
    }
  },
  {
    path: '/test',
    name: 'test',

  }



]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
