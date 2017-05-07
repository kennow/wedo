<template>
  <footer id="footer">
    <a href="/" class="table-btn lists">
      <img src="../assets/todolist.svg" alt="">
      <span id="lists">清单</span>
    </a>
    <a href="/add" id="add-btn" class="table-btn">+
	</a>
    <router-link :to="{ name: 'about', params: { email: this.user }}" class="table-btn  lists">
      <img src="../assets/my.svg" alt="">
      <span>我</span>
    </router-link>

    </div>
  </footer>
</template>

<script>
  import {
    mapState
  }
  from 'vuex'
  export
  default {
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
  img {
    width: 5vh;
    height: 5vh;
  }
  #footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 10vh;
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
    width: 5vh;
    height: 5vh;
    display: inline;
    text-decoration: none;
  }
  .lists {
    display: flex;
    flex-direction: column;
    color: green;
  }
  .lists span {
    font-size: 2vh;
  }
  #add-btn {
    font-size: 2vh;
    border-radius: 50%;
    background: green;
    color: #fff;
    border: 1px solid green;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>