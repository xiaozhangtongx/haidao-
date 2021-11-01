/*
 * @Description:
 * @Version: 1.0
 * @Author: xiaozhangtx
 * @Date: 2021-10-31 22:24:09
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/main',
    component: () => import('../layout/BasicLayout.vue'),
    redirect: '/main/home',
    children: [
      { path: '/main/home', component: () => import('../views/Home.vue') },
    ],
  },
  {
    path: '/',
    redirect: '/main',
  },
]

const router = new VueRouter({
  routes,
})

export default router
