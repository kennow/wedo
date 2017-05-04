<template>
	<footer id="footer">
	<a  href="/" class="table-btn lists">
	<img src="../assets/todolist.svg" alt="">
	<span>清单</span>
	</a>
	<a href="/add" class="table-btn" id="add-btn"> +
	</a>
	<router-link :to="{ name: 'about', params: { email: 'yejia@qq.com'}}" class="table-btn  lists">
	<img src="../assets/my.svg" alt="">
	<span>我</span>
	</router-link>
		
	</div>
	</footer>
</template>

<script>
</script>

<style>
#footer {
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100vw;
	height: 3rem;
	text-align: center;
	border-top: 1px solid green;
	color: #fff;
	display: flex;
	display: -moz-flex;
	justify-content: space-around;
	align-items: center;
	background: #f2f3f5;
}

/*#add {
	position: absolute;
	width: 2rem;
	height: 2rem;
	background: green;
	display: inline;
}*/

.table-btn {
	width: 2rem;
	height: 2rem;
	display: inline;
	text-decoration: none;
}

.lists {
	display: flex;
	flex-direction: column;
	color: green;
}
.lists span {
	font-size: 0.4rem;
}

#add-btn {
	font-size: 1.5rem;
	border-radius: 50%;
	background: green;
	color: #fff;
	border: 1px solid green;
}


</style>