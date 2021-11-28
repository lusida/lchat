import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'Chat',
      component: require('@/views/Chat/Index').default
    },
    {
      path: '/login',
      name: 'Login',
      meta: {
        isOpen: true
      },
      component: require('@/views/Auth/Login').default
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(m => m.meta.isOpen)) {
    next()
  } else {
    if (store.state.User.IsAuthenticated) {
      next()
    } else {
      next({name: 'Login'})
    }
  }
})

export default router
