import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'Chat',
      component: require('@/components/LandingPage').default
    },
    {
      path: '/login',
      name: 'Login',
      component: require('@/views/Auth/Login').default
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (store.state.Auth.IsAuthenticated) {
    next()
  } else {
    next({ name: 'Login' })
  }
})

export default router
