import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		lists: [
			{ title: 'who are you',
			  date: '1970/01/01/00/00/00',
			  details: ['wedo', 'wedo', 'wedo']
			 },
			 { title: 'who are you',
			  date: '1970/01/01/00/00/00',
			  details: ['wedo', 'wedo', 'wedo']
			 },
			 { title: 'who are you',
			  date: '1970/01/01/00/00/00',
			  details: ['wedo', 'wedo', 'wedo']
			 }
		],
		newlist: {
			title: '未命名清单',
			date: '',
			details: []
		}
	},
	mutations: {

	}

})

export default store