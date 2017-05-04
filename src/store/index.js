import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		token: "123",
		login: '',
		lists: []
	},
	getters: {
	  getByUpdate: state => {
	  	let lists = state.lists
	  	let tmp = lists[0]
	  	  for(let i = 0; i < lists.length; i++) {
	  	  	
	  	  }
	  	return lists
	  }
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