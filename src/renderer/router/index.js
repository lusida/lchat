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
    console.log('beforeEach-next1', to, to.matched.some(m => m.meta.isOpen))
    next()
  } else {
    if (store.getters.IsAuthenticated) {
      console.log('beforeEach-next2', to, store.getters.IsAuthenticated)
      next()
    } else {
      console.log('beforeEach-login', to, store.getters.IsAuthenticated)
      next({name: 'Login'})
    }
  }
})

export default router
