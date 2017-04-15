<template>
<div>
	<input id="addtitle" type="text" name="title" v-model='detail.title'>
	<ul>
	<li v-for='(list, index) in detail.details'>
	   <input id="checkbox" type="checkbox" @click = 'ischecked' :name='index' :checked='detail.isChecked[index]'> 
	   <input  id="addlist" @input='changedetail' type="text" :name='index' :value='list'>
	</li>
	</ul>
	<div id="add" type="button" @click='addlist'><span>+</span>添加</div>
	<a href='/'><button id="save" @click='updatelist'>保存</button></a>
</div>
</template>

<script>
export default {
	name: 'adddetail',
	data() {
		return {
		detail: [],
		id: this.$route.params.id	
	}
	},
	created() {
	  this.getdetail()
	},
	methods: {
		getdetail() { 
		  this.$http.get('/api/list/' + this.id)
		  .then(res => {
		  	this.detail = res.data;
		  })
		  .catch(err => {
		  	console.log(err)
		  })
		  console.log(this.detail)
		},
		addlist() {
		this.detail.details.push('点击编辑')
		this.detail.isChecked.push(false)
	},
	ischecked(event) {
		this.detail.isChecked.splice(event.target.name, 1,
			event.target.checked)
	},
	changedetail(event) {
		this.detail.details.splice(event.target.name, 1, event.target.value)
	},
	updatelist() {
		this.$http.put('/api/list/' + this.id, {	
			title: this.detail.title,
		  	details: this.detail.details,
		  	create_at: this.detail.create_at,
		  	update_at: Date.now().toString(),
		  	isChecked: this.detail.isChecked
		  })
		.then(res => {
			console.log(res.data)
			detail: []
		})
		.catch(err => {
			console.log(err)
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
	width: 20vw;
	height: 5vh;
	margin-top: 2vh;
	border-radius: 5px;
	display: flex;
	justify-content: space-around;
	align-items: center;
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