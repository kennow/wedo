<template>
	<div id="login-box">
	<form>
		<input type="email" name="email" placeholder="please input email" v-model="email">
		</input>
		<input type="password" name="password" placeholder="please input password" v-model="password">
		<input class="btn" type="button" value="登录" @click="login">
		<input class="btn" type="button" name="register" value="去注册" @click="gotoreg">
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
		login() {
		if(this.email.length > 0 && this.password.length >0) {
			this.$http.post('/api/login', {
				user: this.email,
				password: this.password
			})
			.then(res => {
				let userPwd = res.data
				if(this.password == userPwd) {
					this.$router.push('/')
				}
			})
			.catch(err => {
				console.log(err)
			})
		} else {
			alert("输入错误！")
		}
		},
		gotoreg() {
			this.$router.push("/register")
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