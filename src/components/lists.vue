<template>
<div id="lists-box">
<div id=""></div>
<ul>
<li v-for='list in lists'>
111  {{ list.title }}
</li>
</ul>
<my-footer></my-footer>
</div>
</template>
<script>

import Footer from '@/components/footer'
export default {
	name: 'lists',
	data() {
		return {
			
		}
	},
	computed: {
		lists() {
			return this.$store.state.lists
		}
	},
	components: {
		'my-footer': Footer
	}
}
</script>

<style>
#lists-box {
/*	position: absolute;
	top: 10vh;
	left: 0;*/
	width: 100vw;
	height: 90vh;
	z-index: 1;
	text-align: left;
}
</style>