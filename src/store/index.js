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
			{ isChecked: false,
			  content: 'coding'
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
		},
		change(state, payload) {
			state.newlist.details.splice(payload.index, 1, payload.detail)
		},
		add(state) {
			let list = state.newlist;
			state.lists.push(list);
		}
	}

})

export default store