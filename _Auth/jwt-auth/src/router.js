import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home'
import First from './views/First'
import Second from './views/Second'
import Third from './views/Third'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/first',
      name: 'first',
      component: First
    },
    {
      path: '/second',
      name: 'second',
      component: Second
    },
    {
      path: '/third',
      name: 'third',
      component: Third
    },

  ]
})
