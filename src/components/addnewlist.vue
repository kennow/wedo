<template>
<div>
	<input  @input='gettitle'  type="text" name="title" :value='listtitle'>

	{{ listtitle }}
	<p>{{ listdate }}</p>
</div>
</template>

<script>
import { mapState } from 'vuex'
import { mapMutations } from 'vuex'
export default {
	name: 'addnewlist',
	computed: {
		...mapState({
			listtitle: state => state.newlist.title,
			listdate: state => state.newlist.date
		})
	},
	methods: {
		gettitle(e) {
			this.$store.commit('gettitle', { 
				newtitle: e.target.value
				 })
		}
	}

}
</script>

<style scoped>
input {
	width: 98vw;
	height: 5vh;
	margin: 1vh 0;
}
</style>