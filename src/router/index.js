import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/components/Home'
// import second from '@/components/second'

Vue.use(Router)

export default new Router({
  // mode:'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component:  resolve => require(['@/components/Home'], resolve)
    },
    {
      path: '/second',
      name: 'second',
      component: resolve => require(['@/components/second'], resolve)
    }
  ]
})
