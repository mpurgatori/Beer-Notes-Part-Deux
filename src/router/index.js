import Vue from 'vue'
import Router from 'vue-router'
import signIn from '@/components/sign-in'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'sign in',
      component: signIn
    }
  ]
})
