<template>
<div>
	<input id="addtitle" @input='gettitle'  type="text" name="title" :value='newlist.title'>
	<ul>
	<li v-for='(newlist, index) in newlist.details'><input id="checkbox" type="checkbox" :checked = 'newlist.isChecked'> 
		<input id="addlist" type="text">
	</li>
	</ul>
	<input type="button" @click='addlist' value="添加">
	{{ newlist.title }}
	<p>{{ newlist.date }}</p>
</div>
</template>

<script>
import { mapState } from 'vuex'
import { mapMutations } from 'vuex'
export default {
	name: 'addnewlist',
	computed: {
		...mapState(['newlist'])
	},
	methods: {
		gettitle(e) {
			this.$store.commit('gettitle', { 
				newtitle: e.target.value
				 })
		},
		addlist: function(e) {
			this.$store.commit('addlist',
			{
			  detail: {
			  	isChecked: false,
			  	content: ''
			  }	
			})
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
</style>