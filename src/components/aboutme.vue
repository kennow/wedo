<template>
	<div id="about-box">
	<div id="info-box">
	<div id="avatar">
	</div>
	<span id="user">
	{{ this.user }}
	</span>
	</div>
	</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
	data() {
		return {
			
		}
	},
	computed: {
		...mapState(['user'])
	}
}

</script>

<style scoped>
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
	justify-content: center;
	flex-wrap: wrap;
	align-items: center;
}

#avatar {
	width: 5rem;
	height: 5rem;
	border-radius: 50%;
	background: #fff;
	margin: 0 5rem;
}

#user {
	color: #fff;
}
</style>