<template>
<div id="lists-box">
<div id="side-bar">
	<div class="select" @click="showSelectBox">
		{{ selectByComplete }}
		<img src="../assets/unfolded.svg">
	</div>
	<div class="select" @click="showSelectBox2">
		{{ selectByTime }}
		<img src="../assets/unfolded.svg">
	</div>
</div>
<div id="lists">
	<ul>
	<li v-for='(list, index) in lists' @touchstart='touchstart' @touchend='touchend($event,index, setseen)'>
	<router-link :to="{ name: 'detail', params: { id: list._id }}"> {{ list.title }} </router-link>
	<span id="time">
	 {{ new Date(list.update_at).getFullYear() }}年{{ new Date(list.update_at).getMonth() + 1 | getFull }}月
	{{ new Date(list.update_at).getDate() | getFull }}日
	{{ new Date(list.update_at).getHours() | getFull }}:
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
	<my-footer :class="{ 'my-footer': isDisplay || isDisplay2}"></my-footer>
	<div @click.stop="hiddenSelectBox" :class="{ 'select-page': isDisplay}">
	  <div class="select-box" :class="{ 'select-box-isHidden': isHidden}">
		<ul>
		  <li @click="showAll">全部清单</li>
		  <li @click="showumcompleted">未完成清单</li>
		  <li @click="showcompleted">已完成清单</li>
		  <li @click="hiddenSelectBox">取消</li>
		</ul>
	  </div>
	</div>
	<div @click.stop="hiddenSelectBox2" :class="{ 'select-page': isDisplay2}">
	  <div class="select-box" :class="{ 'select-box-isHidden': isHidden2}">
		<ul>
		  <li @click="getlistsbytitle">按名称排序</li>
		  <li @click="getlistsbydate">按更新时间排序</li>
		  <li @click="getlistsbycreate">按创建时间排序</li>
		  <li @click="hiddenSelectBox2">取消</li>
		</ul>
	  </div>
	</div>
</div>
</template>
<script>
import { mapState } from 'vuex'
import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'
import Footer from '@/components/footer'
export default {
	name: 'lists',
	data() {
		return {
		 selectByComplete: "全部清单",
		 selectByTime: "按更新时间排序",
		 pageX: '',
		 pageY: '',
		 seen: [],
		 isDisplay: false,
		 isDisplay2: false,
		 isHidden: true,
		 isHidden2: true,
		}
	},
	created() {
		this.getlists(),
		this.getuserinfo()
	},
	computed: {
	 ...mapState(['lists']),
	 // ...mapGetters(['getByUpdate'])
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
		...mapMutations(['getSort']),
		getlists() {
			this.$http.get ('/api/list')
			.then(res => {
				// console.dir(res.data)
				let by = this.by
				let lists = res.data.sort(by('update_at'))
				this.$store.dispatch('changelist', {
       			lists:  lists
       		   })
			})
			.catch(err => {
				console.log(err)
			})
		},
		getuserinfo() {
			this.$http.get('/api/user')
			.then(res => {
				let user = res.data
				this.$store.dispatch('getInfo', {
					user: user
				})
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
			this.hiddenSelectBox2()
			this.isDisplay = true
			this.isHidden = false
		},
		showSelectBox2() {
			this.hiddenSelectBox()
			this.isDisplay2 = true
			this.isHidden2 = false
		},
		hiddenSelectBox() {
			this.isDisplay = false
			this.isHidden = true
		},
		hiddenSelectBox2() {
			this.isDisplay2 = false
			this.isHidden2 = true
		},
		by(name){
    		return function(o, p){
        	var a, b;
        	if (typeof o === "object" && typeof p === "object" && o && p) {
            	a = o[name];
            	b = p[name];
            	if (a === b) {
                	return 0;
            	}
            	if (typeof a === typeof b) {
                return a < b ? 1 : -1;
           	 }
            	return typeof a < typeof b ? 1 : -1;
        	}
        	else {
            	throw ("error");
        	}
    	}
	},
	isOk(isChecked) {
		let count = 0
		let len = isChecked.length
		for(let i = 0; i < len; i++) {
			if(isChecked[i] == true) {
				count++
			}
		}
		if(len == count) {
			return true
		} else {
			return false
		}
		count = 0;
	},
	showAll() {
		this.getlists()
		this.selectByComplete = "全部清单"
	},
	showcompleted() {
		let lists = this.lists
		let isOk = this.isOk
		let newlists = lists.filter(function(item, index) {
			if(isOk(item.isChecked)) {
				return item
			}
		})
		this.$store.dispatch('changelist', {
			lists: newlists
		})
		this.selectByComplete = "已完成清单"
	},
	showumcompleted() {
		let lists = this.lists
		let isOk = this.isOk
		let newlists = lists.filter(function(item, index) {
			if(!isOk(item.isChecked)) {
				return item
			}
		})
		this.$store.dispatch('changelist', {
			lists: newlists
		})
		this.selectByComplete = "未完成清单"
	},
	getlistsbytitle() {
		let lists = this.lists
		let by = this.by
		let sortedlisted = lists.sort(by("title"))
		this.$store.dispatch('changelist', {
			lists: sortedlisted
		})
		this.selectByTime = "按名称排序"
	},
	getlistsbydate() {
		this.getlists()
		this.selectByTime = "按更新时间排序"
	},
	getlistsbycreate() {
		let lists = this.lists
		let by = this.by
		let sortedlisted = lists.sort(by("create_at")).reverse()
		this.$store.dispatch('changelist', {
			lists: sortedlisted
		})
		this.selectByTime = "按创建时间排序"
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
	font-size: 2.5vh;
	display: flex;
	align-items: center;
	justify-content: space-around;
}

.select img {
	width: 2.5vh;
	height: 2.5vh;
}

#lists {
	width: 100vw;
}

#lists ul {
	padding: 0;
	margin-top: 2vh;
}

#lists li {
	height: 8vh;
	list-style-type: none;
	background-color: #fff;
	border-bottom: 0.4vh solid #f2f3f5;
	font-size: 3vh;
	padding-left: 3vw;
	flex-direction: column;
	flex-wrap: wrap;
	display: flex;
	justify-content: center;
}
a {
	text-decoration: none;
	color: #000;
}
#time {
	font-size: 2vh;
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
	opacity: 0.6;
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
	height: 7vh;
	border: 0.2vh solid #f2f3f5;
	font-size: 2vh;
	display: flex;
	justify-content: center;
	align-items: center;
}

.my-footer {
	opacity: 0;
}
</style>