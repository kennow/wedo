<template>
<div>
	<input id="addtitle" type="text" name="title" v-model='newlist.title'>
	<ul>
	<li v-for='(newlist, index) in newlist.details'><input id="checkbox" type="checkbox"> 
		<input  id="addlist" @input='adddetail' type="text" :name='index'>
	</li>
	</ul>
	<input id="add" type="button" @click='addlist' value="添加">
	<a href='/'><button id="save" @click='savelist'>保存</button></a>
	{{ newlist.title }}
</div>
</template>

<script>
export default {
	name: 'addnewlist',
	data() {
		return {
		newlist: {
			title: '未命名清单',
			details: [],
			create_at: Date.now().toString(),
			update_at: Date.now().toString()
		}
	}
	},
	methods: {
		addlist() {
			this.newlist.details.push('点击编辑')
		},
		adddetail: function(event) {
			this.newlist.details.splice(event.target.name, 1, event.target.value)
		},
		savelist() {
		  this.$http.post('/api/list', {
		  	title: this.newlist.title,
		  	details: this.newlist.details,
		  	create_at: this.newlist.create_at,
		  	update_at: this.newlist.update_at
		  })
		  .then(res => {
		  	console.log(res.data)
		  	this.newlist.title = '未命名清单'
		  	this.newlist.details = []
		  	this.newlist.create_at = Date.now().toString()
		  	this.newlist.update_at = Date.now().toString()
		  })
		  .catch(e => {
		  	console.log(e)
		  })
		}
	}
}
</script>

<style scoped>
#addtitle {
	width: 98vw;
	height: 5vh;
	margin-top: 1vh;
}

ul {
	margin: 0;
	padding: 0
}
li {
	width: 100vw;
	height: 5vh;
	margin: 1vh 0;
	border-bottom: 1px solid #fff;
	background-color: #fff;
	display: flex;
	direction: row;
	align-items: center;
}

#checkbox {
	width: 3vh;
	height: 3vh;
	background: #fff;
}

#addlist {
	height: 4.4vh;
	width: 96vw;
	border: none;
}

#add {
	background-color: green;
	color: #fff;
	width: 100vw;
	height: 5vh;
}

#save {
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100vw;
	height: 6vh;
	background-color: green;
	color: #fff;
}
</style>