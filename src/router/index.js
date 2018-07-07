import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/container/Main'
import Work from '@/views/Work'
import About from '@/views/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: {
        name: 'Work'
      },
      component: Main,
      children: [
        {
          path: '/',
          name: 'Work',
          component: Work
        },
        {
          path: '/about',
          name: 'About',
          component: About
        }
      ]
    }
  ]
})
