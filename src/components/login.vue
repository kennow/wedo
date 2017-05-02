<template>
	<div id="login-box">
	<form method="post">
		<input type="email" name="email" placeholder="please input email">
		</input>
		<input type="password" name="password" placeholder="please input password">
		</input>
		<input type="submit" value="登录" @submit.stop="login"></input>
	</form>
	</div>
</template>

<script>
export default {

	methods: {
		login() {
			
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
</style>