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
	<router-link :to="{ name: 'detail', params: { id: list._id }}"> {{ list.title }} </router-link>
	<span>
	 {{ new Date(list.create_at).getFullYear() }} 年{{ new Date(list.create_at).getMonth() + 1 }}月
	{{ new Date(list.create_at).getDate() + 1 }}日
	{{ new Date(list.create_at).getHours() }}:
	{{ new Date(list.create_at).getMinutes() }}
	 </span>
	</li>
	</ul>
</div>
<my-footer></my-footer>
</div>
</template>
<script>
import { mapState } from 'vuex'
import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'
import Footer from '@/components/footer'
export default {
	name: 'lists',
	data() {
		return {
		}
	},
	created() {
		this.getlists()
	},
	computed: {
	 ...mapState(['lists'])
	},
	components: {
		'my-footer': Footer
	},
	methods: {
		getlists() {
			this.$http.get ('/api/list')
			.then(res => {
				console.dir(res.data)
				this.$store.dispatch('changelist', {
       			lists:  res.data
       		   })
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
	height: 10vh;
	list-style-type: none;
	background-color: #fff;
	border-bottom: 0.2rem solid #f2f3f5;
	font-size: 1.2rem;
	padding-left: 1rem;
	flex-direction: column;
	display: flex;
	justify-content: center;
}
a {
	text-decoration: none;
	color: #000;
}
span {
	font-size: 0.8rem;
	opacity: 0.5;
}
</style>