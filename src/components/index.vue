<template>
<div id="home-box">
<div id="header">
	<a href="/" id="back">&lt;</a>
	<span id="title">wedo</span>
	<a href="/more" id="more"><img src="../assets/ec.svg" alt=""></a>
</div>
</div>
</template>
<script>
import { mapAction } from 'vuex'
export default {
	name: 'index'
}
</script>

<style>
#home-box {
	position: absolute;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: flex-start;
	background-color: #f2f3f5;
}
#header {
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 10vh;
	font-size: 2rem;
	color: #fff;
	text-align: center;
	background-color: green;
	display: flex;
	display: -webkit-flex;
	justify-content: space-around;
	align-items: center;
	z-index: 100;
}

#header a{
	color: #fff;
	text-decoration: none;
}

</style>