<template>
  <div id="login-box">
    <form>
      <div id="tips">请使用邮箱登录</div>
      <input type="email" name="email" placeholder="please input email" v-model="email">
      </input>
      <input type="password" name="password" placeholder="please input password" v-model="password">
      <input class="btn" type="button" value="登录" @click="login">
      <input class="btn" type="button" name="register" value="还没有帐号？去注册" @click="gotoreg">
    </form>
  </div>
</template>

<script>
  import {
    mapAction
  }
  from 'vuex'
  export
  default {
    data() {
        return {
          email: "",
          password: "",
          isLogined: this.$cookie.get('wedo')
        }
      },
      methods: {
        login() {
            if (this.email.length > 0 && this.password.length > 0) {
              let that = this
              this.$http.post('/api/login', {
                  user: this.email,
                  password: this.password
                })
                .then(res => {
                  let userPwd = res.data
                  if (userPwd) {
                    this.$store.dispatch('isLogin', {
                      secret: this.$cookie.get('wedo')
                    })
                    this.$router.push('/')
                  }
                })
                .catch(err => {
                  console.log(err)
                })
            } else {
              alert("输入错误！")
            }
          },
          gotoreg() {
            this.$router.push("/register")
          },
          redirect() {
            if (this.isLogined) {
              this.$router.push('/')
            }
          }
      },
      created() {
        this.redirect()
      }
  }
</script>

<style scoped>
  #login-box {
    width: 100vw;
    height: 88vh;
    display: flex;
    align-items: flex-start;
  }
  form {
    width: 100vw;
    /*height: 30vh;*/
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
  #tips {
    width: 90vw;
    height: 10vw;
    font-size: 3vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  input {
    width: 90vw;
    height: 10vw;
    font-size: 2vh;
    margin-top: 1vh;
    border: 0.2vh solid #f2f3f5;
  }
  .btn {
    background: green;
    color: #fff;
  }
</style>