import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		token: null,
		login: '',
		lists: []
	},
	mutations: {
		change(state, lists) {
			state.lists = lists
		}
	},
	actions: {
		changelist({commit}, payload) {
			commit('change',payload.lists)
		}
	}
})

export default store