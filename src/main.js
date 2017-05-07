// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import axios from 'axios'
import router from './router'
import {
  sync
}
from 'vuex-router-sync'
import vueCookie from 'vue-cookie'
  // Vue.config.productionTip = false
Vue.use(vueCookie)
sync(store, router)
Vue.prototype.$http = axios
  /* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  template: '<App/>',
  components: {
    App
  }
})