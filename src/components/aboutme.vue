<template>
	<div id="about-box">
		<div id="info-box">
			<div id="avatar">
				<img src="../assets/avatar.jpg" alt="">
			</div>
			<span id="user">
			{{ this.user }}
			</span>
		</div>
		<ul>
			<li>使用帮助<img src="../assets/unfolded2.svg"></li>
			<li>联系作者<img src="../assets/unfolded2.svg"></li>
			<li>设置<img src="../assets/unfolded2.svg"></li>
			<li @click="logout">登出<img src="../assets/unfolded2.svg"></li>
			<li id="version">版本号:v1.0.0</li>
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
	/*opacity: 0.5;*/
	display: flex;
	flex-direction: column;
	justify-content: center;
	flex-wrap: wrap;
	align-items: center;
	background-image: url('../assets/infobg.jpg');
	background-size: 100vw 30vh;
}

#avatar {
	width: 12vh;
	height: 12vh;
	border-radius: 50%;
	background: #fff;
	margin: 0 5rem;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 12;
}

#avatar img {
	width: 11vh;
	height: 11vh;
	border-radius: 50%;
}
#user {
	color: #fff;
	margin-top: 2vh;
	font-size: 3vh;
}

li {
	min-height: 6vh;
	padding: 0 2vh;
	border: 0.3vh solid #f2f3f5;
	font-size: 2.5vh;
	/*opacity: 0.5;*/
	display: flex;
	justify-content: space-between;
	align-items: center;
}
li img {
	height: 2vh;
	width: 2vh;
}

#version {
	border: none;
	padding: 0  35vw;
	opacity: 0.5;
}
</style>