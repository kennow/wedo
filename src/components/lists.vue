<template>
<div id="lists-box">
<div id="side-bar">
	<div class="select">
		{{ selectByComplete }}
		<img src="../assets/unfolded.svg" @click="showSelectBox">
	</div>
	<div class="select">
		{{ selectByTime }}
		<img src="../assets/unfolded.svg">
	</div>
</div>
<div id="lists">
	<ul>
	<li v-for='(list, index) in getByUpdate' @touchstart='touchstart' @touchend='touchend($event,index, setseen)'>
	<router-link :to="{ name: 'detail', params: { id: list._id }}"> {{ list.title }} </router-link>
	<span>
	 {{ new Date(list.create_at).getFullYear() }} 年{{ new Date(list.create_at).getMonth() + 1 | getFull }}月
	{{ new Date(list.create_at).getDate() | getFull }}日
	{{ new Date(list.create_at).getHours() | getFull }}:
	{{ new Date(list.create_at).getMinutes() | getFull }}
	 </span>
	 <div id="delete"  v-if="seen[index]" @click="deletelist">
	 <router-link :to="{ name: 'delete', params: { id: list._id}}" >
	 删除
	 </router-link>
	 </div>
	</li>
	</ul>
</div>
	<my-footer></my-footer>
	<div @click.stop="hiddenSelectBox" :class="{ 'select-page': isDisplay}">
	  <div class="select-box" :class="{ 'select-box-isHidden': isHidden}">
		<ul>
		  <li @click="showAll">全部清单</li>
		  <li>未完成清单</li>
		  <li>已完成清单</li>
		  <li @click="hiddenSelectBox">取消</li>
		</ul>
	  </div>
	</div>
</div>
</template>
<script>
import { mapState } from 'vuex'
import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'
import Footer from '@/components/footer'
export default {
	name: 'lists',
	data() {
		return {
		 selectByComplete: "全部清单",
		 selectByTime: "按名称排序",
		 pageX: '',
		 pageY: '',
		 seen: [],
		 isDisplay: false,
		 isHidden: true
		}
	},
	created() {
		this.getlists()
	},
	computed: {
	 // ...mapState(['lists']),
	 ...mapGetters(['getByUpdate'])
	},
	components: {
		'my-footer': Footer
	},
	filters: {
		getFull(value) {
			if(value < 10) {
				return "0" + value
			} else {
				return value
			}
		}
	},
	methods: {
		getlists() {
			this.$http.get ('/api/list')
			.then(res => {
				console.dir(res.data)
				this.$store.dispatch('changelist', {
       			lists:  res.data
       		   })
			})
			.catch(err => {
				console.log(err)
			})
		},
		touchstart(event) {
			this.pageX = event.touches[0].pageX;
			this.pageY = event.touches[0].pageY;
			console.log(this.pageX, this.pageY)
		},
		touchend(event, index, setseen) {
			let endPageX = event.changedTouches[0].pageX;
			let endPageY = event.changedTouches[0].pageY;
			let distanceX = this.pageX - endPageX;
			let distanceY = this.pageY - endPageY;
			if(distanceY < 60 && distanceX > 80)
			{
				setseen()
				// console.log(this.seen)
				this.seen.splice(index, 1, true)
				// console.log(this.seen)
			}
			if(distanceY < 60 && distanceX < -80)
			{
				// console.log(this.seen)
				this.seen.splice(index, 1, true)
				// console.log(this.seen)
			}
		},
		setseen() {
			let len = this.lists.length;
			for(let i = 0; i < len; i++){
			this.seen.push(false)
		}
		},
		deletelist() {
			this.$http.post('/api/delete/' + this.$route.params.id)
			const router = this.$router
  			router.go({path:'/'})
		},
		showSelectBox() {
			this.isDisplay = true
			this.isHidden = false
		},
		hiddenSelectBox() {
			this.isDisplay = false
			this.isHidden = true
		},
		showAll() {

		}
	}
}

</script>

<style scoped>
#lists-box {
	width: 100vw;
	display: flex;
	display: -webkit-flex;
	flex-direction: column;
	justify-content: flex-start;
}
#side-bar {
	width: 100vw;
	height: 6vh;
	display: flex;
	justify-content: flex-start;
}

.select {
	width: 50%;
	height: 100%;
	border: 1px solid #f2f3f5;;
	background: #fff;
	color: green;
	font-size: 14px;
	display: flex;
	align-items: center;
	justify-content: space-around;
}

#lists {
	width: 100vw;
}

#lists ul {
	padding: 0;
	margin-top: 2vh;
}

#lists li {
	height: 10vh;
	list-style-type: none;
	background-color: #fff;
	border-bottom: 0.2rem solid #f2f3f5;
	font-size: 1.2rem;
	padding-left: 1rem;
	flex-direction: column;
	flex-wrap: wrap;
	display: flex;
	justify-content: center;
}
a {
	text-decoration: none;
	color: #000;
}
span {
	font-size: 0.8rem;
	opacity: 0.5;
}
#delete {
	padding: 0.5rem 1rem;
	background: red;
	align-self: flex-end;
	margin-right: 2vw;
	z-index: 0;
}

.select-page {
	position: absolute;
	top: 8vh;
	width: 99vw;
	height: 52vh;
	background: #000;
	opacity: 0.8;
	z-index: 10;
	/*display: none;*/
}

.select-box {
	position: absolute;
	left: 0;
	top: 52vh;
	width: 99vw;
	height: 29vh;
	background: #fff;
	z-index: 50;
	/*border: 1px solid green;*/
}

.select-box-isHidden {
	display: none;
}
.select-box ul {
	margin: 0;
	padding: 0;
}

.select-box ul li {
	height: 2rem;
	border: 1px solid #f2f3f5;
	text-align: center;
	padding: 0.2rem 0;
}

my-footer {
	display: none;
}
</style>