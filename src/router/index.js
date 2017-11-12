import Vue from 'vue'
import Router from 'vue-router'
// path @ is an alias defined in webpack.base.conf.js that refers to `src` folder
import Home from '@/components/home/Home'
import HomeIndex from '@/components/home/Index'
import Login from '@/components/home/Login'
import Admin from '@/components/admin/Admin'
import AdminIndex from '@/components/admin/Index'
import PostIndex from '@/components/admin/posts/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      // If we have default route child for this route,
      // then we should remove parent `name` and just use default route child instead
      path: '/',
      component: Home,
      children: [
        {
          path: '/',
          name: 'home-index',
          component: HomeIndex
        },
        {
          path: '/login',
          name: 'login',
          component: Login
        }
      ]
    },
    {
      path: '/admin',
      component: Admin,
      meta: { auth: true },
      children: [
        {
          path: '/',
          name: 'admin-index',
          component: AdminIndex,
          meta: { auth: true }
        },
        {
          path: '/post',
          name: 'post-index',
          component: PostIndex,
          meta: { auth: true }
        }
      ]
    }
  ]
})
