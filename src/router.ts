import { createRouter, createWebHistory } from 'vue-router'


// import IndexPage from '@/pages/IndexPage.vue'
import Home from '@/pages/Home/Home.vue'

const routes = [

  {
    path: '/',
    component: Home,
    // meta: {title: 'Test'},
    children : [

      // {
      //   path: '',
      //   component: LoginPage,
      //   meta: {
      //     title: 'Login',
      //   },
      // },
    ]
    },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
