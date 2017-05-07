<template>
  <div>
    <input id="addtitle" type="text" name="title" v-model='newlist.title'>
    <ul>
      <li v-for='(newlist, index) in newlist.details'>
        <input id="checkbox" type="checkbox" @click='ischecked' :name='index'>
        <input id="addlist" @input='adddetail' type="text" :name='index' placeholder="输入内容">
      </li>
    </ul>
    <div id="add" type="button" @click='addlist'><span>+</span>添加</div>
    <a href='/'>
      <button id="save" @click='savelist'>保存</button>
    </a>
    <!-- {{ newlist.title }} -->
  </div>
</template>

<script>
  export
  default {
    name: 'addnewlist',
    data() {
      return {
        newlist: {
          title: '未命名清单',
          details: [],
          create_at: Date.now().toString(),
          update_at: Date.now().toString(),
          isChecked: []
        }
      }
    },
    methods: {
      addlist() {
          this.newlist.details.push('点击编辑')
          this.newlist.isChecked.push(false)
        },
        adddetail: function (event) {
          this.newlist.details.splice(event.target.name, 1, event.target.value)
        },
        ischecked(event) {
          this.newlist.isChecked.splice(event.target.name, 1, event.target.checked)
        },
        savelist() {
          this.$http.post('/api/list', {
              title: this.newlist.title,
              details: this.newlist.details,
              create_at: this.newlist.create_at,
              update_at: this.newlist.update_at,
              isChecked: this.newlist.isChecked
            })
            .then(res => {
              console.log(res.data)
              this.newlist.title = '未命名清单'
              this.newlist.details = []
              this.newlist.create_at = Date.now().toString()
              this.newlist.update_at = Date.now().toString()
              this.newlist.list_id = ""
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
    width: 97vw;
    height: 5vh;
    margin-top: 1vh;
    font-size: 2vh;
    border: 1vh solid #fff;
  }
  ul {
    margin: 0;
    padding: 0
  }
  li {
    width: 100vw;
    height: 7vh;
    margin: 0.5vh 0;
    background-color: #fff;
    display: flex;
    direction: row;
    align-items: center;
  }
  #checkbox {
    width: 3vh;
    height: 3vh;
    border: 2vh solid #000;
    background: #fff;
  }
  #addlist {
    height: 6vh;
    width: 96vw;
    border: none;
    font-size: 2vh;
  }
  #add {
    background-color: green;
    color: #fff;
    width: 20vw;
    height: 5vh;
    margin-top: 2vh;
    border-radius: 1vh;
    font-size: 2.5vh;
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
    font-size: 3vh;
  }
</style>