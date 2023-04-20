import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import JsonExcel from 'vue-json-excel'

Vue.component('downloadExcel', JsonExcel);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
