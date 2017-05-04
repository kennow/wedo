<template>
	<div id="login-box">
	<form>
		<input type="email" name="email" v-model="email" placeholder="please input email">
		</input>
		<input type="password" name="password" v-model="password" placeholder="please input password">
		<input class="btn"  value="注册" @click="canRegister">
		<input class="btn" type="button" name="register" value="去登录" @click="gotologin">
	</form>
	</div>
</template>

<script>
export default {
	data() {
		return {
			email: "",
			password: ""
		}
	},
	methods: {
		canRegister() {
			if(this.email.length > 0 && this.password.length > 0) {
				this.register(this.email, this.password);
					this.$router.push('/login')
			} else {
				alert("请输入正确的数据！")
			}
		},
		register(user, pwd) {
			this.$http.post('/api/register', {
			user: user,
			password: pwd
			})
			.then(res => {
				console.log(res.data)
			})
			.catch(e => {
				console.log(e)
			})
		},
		gotologin() {
			this.$router.push("/login")
		}
	}
}
</script>

<style scoped>
#login-box {
	width: 100vw;
	height: 88vh;
	display: flex;
	align-items: center;
}

form {
	width: 100vw;
	height: 30vh;
	background: #fff;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;

}

input {
	width: 90vw;
	height: 10vw;
}

.btn {
	background: green;
	color: #fff;
}
</style>