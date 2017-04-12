<template>
<div>
	<input id="addtitle" @input='gettitle'  type="text" name="title" :value='newlist.title'>
	<ul>
	<li v-for='(newlist, index) in newlist.details'><input id="checkbox" type="checkbox" :checked = 'newlist.isChecked'> 
		<input @input='change'  id="addlist" type="text" :value='newlist.content' :checked='newlist.isChecked' :name='index'>
	</li>
	</ul>
	<input id="add" type="button" @click='addlist' value="添加">
	<a href='/'><button id="save" @click='getlist'>保存</button></a>
</div>
</template>

<script>
import { mapState } from 'vuex'
import { mapMutations } from 'vuex'
export default {
	name: 'addnewlist',
	computed: {
		...mapState(['newlist', 'lists'])
	},
	methods: {
		gettitle(e) {
			this.$store.commit('gettitle', { 
				newtitle: e.target.value
				 })
		},
		addlist(e) {
			this.$store.commit('addlist',
			{
			  detail: {
			  	isChecked: false,
			  	content: ''
			  }	
			})
		},
		change(e) {
			this.$store.commit('change', {
				index: e.target.name,
				detail:{
				isChecked: e.target.checked,
				content: e.target.value
				}
			})
		},
		getlist() {
			this.$store.commit('add')
		}
	}

}
</script>

<style scoped>
#addtitle {
	width: 98vw;
	height: 5vh;
	margin-top: 1vh;
}

ul {
	margin: 0;
	padding: 0
}
li {
	width: 100vw;
	height: 5vh;
	margin: 1vh 0;
	border-bottom: 1px solid #fff;
	background-color: #fff;
	display: flex;
	direction: row;
	align-items: center;
}

#checkbox {
	width: 3vh;
	height: 3vh;
	background: #fff;
}

#addlist {
	height: 4.4vh;
	width: 96vw;
	border: none;
}

#add {
	background-color: green;
	color: #fff;
	width: 100vw;
	height: 5vh;
}

#save {
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100vw;
	height: 6vh;
	background-color: green;
	color: #fff;
}
</style>