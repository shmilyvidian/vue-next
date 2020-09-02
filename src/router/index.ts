import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes:RouteRecordRaw[] = [
    {
        path: '/',
        component: () => import('/@/components/PageFrame/index.vue'),
        redirect: '/home',
        children: [
          {
            path: '/home',
            component: () => import('/@/views/Home/index.vue'),
            name: 'home',
            meta: {
              title: 'home',
              icon: 'home',
              affix: true
            }
          }
        ]
      },
]

const router =  createRouter({
    history: createWebHistory(),
    routes,
})

export default router
