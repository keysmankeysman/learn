import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/', component: () => import('./components/Fruit/Index'),
    },
    {
      path: '/fruits', component: () => import('./components/Fruit/Index'),
    },
    {
      path: '/login', component: () => import('./components/User/Login'),
    },
    {
      path: '/registration', component: () => import('./components/User/Registration'),
    },

  ]
})
