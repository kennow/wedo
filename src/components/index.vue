<template>
<div id="home-box">
<div id="header">
	<a href="/" id="back">&lt;</a>
	<span id="title">wedo</span>
	<a href="/more" id="more">...</a>
</div>
</div>
</template>
<script>

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
	z-index: -1;
}
#header {
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	max-height: 6vh;
	font-size: 2rem;
	color: #fff;
	padding: 2vh 0;
	text-align: center;
	background-color: green;
	z-index: 0;
}

#header a{
	color: #fff;
	text-decoration: none;
}

#title {
	/*margin: 0 30vw 0 34vw;*/
}

#back {
 position: absolute;
 left: 3vw;
}

#more {
	position: absolute;
	right: 3vw;
	top: 1vh;
}
</style>