<template>
<div>
	<input  v-bind='title' type="text" name="title">
	{{ title }}
</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
name: 'addnewlist',
computed: {
	...mapState({
		title: state => state.newlist.title
	})
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