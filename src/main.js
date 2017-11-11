// 'vue' is refer directly to its node_modules name
import Vue from 'vue'

// `./` is refer to relative path of this file
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import BootstrapVue from 'bootstrap-vue'
import Cookies from 'js-cookie'

// This is also an example of import with refer directly
// to its node_modules but with specific files within the module
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Some library need to be loaded to Vue instance
// Which library that we need to be loaded?
// Its all already documented in its library docs. Just follow their installation instruction
Vue.use(VueResource)
Vue.use(BootstrapVue)

// Set Vue configuration
Vue.config.productionTip = false

// Set vue-resource configuration
// process.env.API_HOST definition is located in config folder
Vue.http.options.root = process.env.API_HOST

// Middleware to check auth
// Every router execution will past here first
// Reference: https://router.vuejs.org/en/advanced/navigation-guards.html
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
    next() // make sure to always call next() to resolve from here!
  }
})

// eslint-disable no-new is used to disable error comes from webpack eslint
// Reference: https://eslint.org/docs/rules/no-new
/* eslint-disable no-new */
new Vue({
  // This is refer to id="app" in root/index.html file
  el: '#app',

  router,

  // I don't really understand this but we'll be fine to leave it with the default
  template: '<App/>',

  components: { App }
})
