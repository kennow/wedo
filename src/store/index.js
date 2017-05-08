import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    user: '',
    token: null,
    login: '',
    lists: []
  },
  mutations: {
    change(state, lists) {
        state.lists = lists
      },
      getInfo(state, user) {
        state.user = user
      },
      isLogin(state, secret) {
        state.token = secret
      },
      getSort(state) {
        var by = function (name) {
          return function (o, p) {
            var a, b;
            if (typeof o === "object" && typeof p === "object" && o && p) {
              a = o[name];
              b = p[name];
              if (a === b) {
                return 0;
              }
              if (typeof a === typeof b) {
                return a < b ? 1 : -1;
              }
              return typeof a < typeof b ? 1 : -1;
            } else {
              throw ("error");
            }
          }
        }
        let lists = state.lists
        state.lists = lists.sort(by('update_at'))
      }
  },
  actions: {
    changelist({ commit }, payload) {
        commit('change', payload.lists)
      },
      getInfo({ commit }, payload) {
        commit('getInfo', payload.user)
      },
      isLogin({ commit }, payload) {
        commit('isLogin', payload.secret)
      }
  }
})

export default store