import Vue from 'vue'
import Router from 'vue-router'
import Lists from '@/components/lists'
import Addnewlist from '@/components/addnewlist'
import Detail from '@/components/detail'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'lists',
      component: Lists
    },
    {
      path: '/add',
      name: 'add',
      component: Addnewlist
    },
    {
      path: '/list/:id',
      name: 'detail',
      component: Detail
    },
    {
    path: '/list/:id',
    name: 'delete',
    component: Lists
  }
  ]
})
