<template>
<div id="lists-box">
<div id="side-bar">
	<div class="select">
		
	</div>
	<div class="select">
		
	</div>
</div>
<div id="lists">
	<ul>
	<li v-for='list in lists'>
	{{ list.title }}
	</li>
	</ul>
</div>
<my-footer></my-footer>
</div>
</template>
<script>
import { mapState } from 'vuex'
import Footer from '@/components/footer'
export default {
	name: 'lists',
	data() {
		return {
			lists: []
		}
	},
	created() {
		this.getlists()
	},
	components: {
		'my-footer': Footer
	},
	methods: {
		getlists() {
			this.$http.get('/api/list')
			.then(res => {
				console.dir(res.data)
				this.lists = res.data
			})
			.catch(err => {
				console.log(err)
			})
		}
	}
}
</script>

<style scoped>
#lists-box {
	width: 100vw;
	display: flex;
	display: -webkit-flex;
	flex-direction: column;
	justify-content: flex-start;
}
#side-bar {
	width: 100vw;
	height: 6vh;
	display: flex;
	justify-content: flex-start;
}

.select {
	width: 50%;
	height: 100%;
	border: 1px solid #f2f3f5;;
	background: #fff;
}

#lists {
	width: 100vw;
}

#lists ul {
	padding: 0;
	margin-top: 2vh;
}

#lists li {
	height: 6vh;
	list-style-type: none;
	background-color: #fff;
	border-bottom: 0.2rem solid #f2f3f5;
	font-size: 1.2rem;
	padding: 1rem;
}
</style>