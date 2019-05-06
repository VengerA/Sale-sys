import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/home'
import changepwd from '@/components/changepwd'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'changepwd',
      component: changepwd
    }
  ]
})
