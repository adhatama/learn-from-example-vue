import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import BootstrapVue from 'bootstrap-vue'
import Cookies from 'js-cookie'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueResource)
Vue.use(BootstrapVue)

// Set Vue configuration
Vue.config.productionTip = false

// Set vue-resource configuration
console.log(process.env.API_HOST)
Vue.http.options.root = process.env.API_HOST

// Middleware to check auth
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.auth)) {
    Cookies.set('token', 'hehe')
    if (!Cookies.get('token')) {
      next({
        name: 'login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
