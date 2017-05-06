<template>
	<div id="about-box">
		<div id="info-box">
			<div id="avatar">
			</div>
			<span id="user">
			{{ this.user }}
			</span>
		</div>
		<ul>
			<li>使用帮助</li>
			<li @click="logout">登出</li>
		</ul>
	</div>
</template>

<script>
import { mapState } from 'vuex'
import { mapAction } from 'vuex'
export default {
	data() {
		return {
			
		}
	},
	computed: {
		...mapState(['user', 'token'])
	},
	methods: {
		logout() {
			this.$http.get('/api/logout')
			.then(res => {
				console.log(res.data)
			})
			.catch(err => {
				console.log(err)
			})
	
			this.$cookie.set('wedo', null)
			this.$store.dispatch('isLogin', {
				secret: null
			})
			this.$router.push('/login')
		}
	}
}

</script>

<style scoped>
ul, li {
	margin: 0;
	padding: 0;
}
#about-box {
	width: 100vw;
	height: 88vh;
	background: #fff;
}

#info-box {
	width: 100vw;
	height: 30vh;
	background: green;
	opacity: 0.5;
	display: flex;
	flex-direction: column;
	justify-content: center;
	flex-wrap: wrap;
	align-items: center;
}

#avatar {
	width: 12vh;
	height: 12vh;
	border-radius: 50%;
	background: #fff;
	margin: 0 5rem;
}

#user {
	color: #fff;
	margin-top: 2vh;
	font-size: 3vh;
}

#logout {

}
li {
	padding: 1vh;
	border: 0.2vh solid #f2f3f5;
	font-size: 3vh;
}
</style>