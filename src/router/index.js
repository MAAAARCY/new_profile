import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: to => {
      const redirect = to.query.redirect

      if (redirect) {
        return {
          path: `/${redirect}`
        }
      }
    }
  },
  {
    path: '/products',
    name: '/Products',
    component: () => import('../views/Products.vue')
  },
  {
    path: '/works',
    name: '/Works',
    component: () => import('../views/Works.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
