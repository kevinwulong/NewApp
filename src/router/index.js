import Vue from 'vue'
import Router from 'vue-router'
import Main from 'views/main'
import News from 'views/news'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    },
     {
      path: '/news',
      name: 'news',
      component: News
    }
  ]
})
