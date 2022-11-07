import { createRouter, createWebHashHistory } from 'vue-router'

const router: any = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      // 登录vue-router滚动行为
      path: '/',
      component: ()=> import('@/views/login/index.vue')
    }
  ]
})
export default router