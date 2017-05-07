import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/index'
import Lists from '@/components/lists'
import Addnewlist from '@/components/addnewlist'
import Detail from '@/components/detail'
import Login from '@/components/login'
import Reg from '@/components/reg'
import About from '@/components/aboutme'
Vue.use(Router)
import vueCookie from 'vue-cookie'
const routes = [{
  path: '/',
  name: 'lists',
  meta: {
    requiresAuth: true
  },
  component: Lists
}, {
  path: '/add',
  name: 'add',
  meta: {
    requiresAuth: true
  },
  component: Addnewlist
}, {
  path: '/list/:id',
  name: 'detail',
  meta: {
    requiresAuth: true
  },
  component: Detail
}, {
  path: '/delete/:id',
  name: 'delete',
  meta: {
    requiresAuth: true
  },
  component: Lists
}, {
  path: '/login',
  name: 'login',
  component: Login
}, {
  path: '/register',
  name: 'register',
  component: Reg
}, {
  path: '/user/:email',
  name: 'about',
  meta: {
    requiresAuth: true
  },
  component: About
}];

// 页面刷新时，重新赋值token
if (vueCookie.get('wedo')) {
  store.dispatch('isLogin', {
    secret: vueCookie.get('wedo')
  })
}

const router = new Router({
  mode: 'history',
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (store.state.token) {
      next();
    } else {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    }
  } else {
    next() // 确保一定要调用 next()
  }
})
export default router;