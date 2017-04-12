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
			details: [
			{ isChecked: true,
			  content: 'jiajia'
			},
			{ isChecked: true,
			  content: 'jiajia'
			}
			]
		}
	},
	mutations: {
		gettitle(state , val) {
			let date = Date.now();
			state.newlist.title = val.newtitle;
			state.newlist.date = date;
		},
		addlist(state, payload) {
			let list = payload.detail;
			state.newlist.details.push(list);
		}
	}

})

export default store