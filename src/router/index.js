import Vue from 'vue'
import Router from 'vue-router'
import Main from 'views/main'
import Image from 'views/image'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    },
     {
      path: '/image',
      name: 'image',
      component: Image
    }
  ]
})
