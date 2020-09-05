<!--
 * @Author: xion
 * @Date: 2020-09-03 21:50:29
 * @LastEditors: xion
 * @LastEditTime: 2020-09-05 08:20:20
 * @FilePath: \redding\src\views\user\Login.vue
 * @Description: 真是太开心了
-->
<template>
  <div class="login">
    <form class="login-main el-card">
      <div class="login-field">
        <label for="login-name-input"><Icon name="icon-yonghu"  key="icon-yonghu"/></label>
        <input id="login-name-input"
          autocomplete 
          v-model="username"  
          placeholder ="邮箱" />
      </div>
      <div class="login-field">
        <label for="login-password-input"><Icon name="icon-mima" key="icon-mima"/></label>
        <input id="login-password-input" 
          autocomplete
          v-model="password" 
          :type="passwordType" 
          placeholder ="密码" />
      </div>
      <div class="login-field-complement">
        <div class="login-register" @click="onToRegister">{{wantToLogin?"注册":"登录"}}</div>
        <div class="login-forget-password" @click="onToForgetPassword">忘记密码？</div>
      </div>
      <div class="login-button-group">
        <div class="login-button-success el-button" @click="onLoginOrRegister">{{!wantToLogin?"注册":"登录"}}</div>
        <div class="login-button-success el-button" @click="anonymousLogin">匿名登录</div>
      </div>
      <div class="login-other-way">

      </div>
    </form>
  </div>
</template>
<script>
import Icon from "@/components/Icon";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "UserLogin",
  components: {
    Icon
  },
  data() {
    return {
      wantToLogin: true,
      username: "",
      password: "",
      passwordType: "password"
    }
  },
  // mounted () {
  //   //
  // },  
  // unmounted () {
  //   //
  // },
  computed: {
    ...mapGetters(["isLogin"])
  },
  methods: {
    ...mapActions([ "login", "register", "anonymousLogin"]),
    onLoginOrRegister() {
      const username = this.username;
      const password = this.password;
      this.wantToLogin? this.login({ username, password }) : this.register({ username, password });
    },
    onToRegister() {
      this.wantToLogin = !this.wantToLogin;
    },
    onToForgetPassword() {
      this.$route("/user/forget/password")
    }
  } 
}
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: absolute;
}
.login-main {
  width: 20rem;
  min-height: 10rem;
  margin: auto;
  margin-top: 10rem;
  padding: 1.2rem;
  .login-field {
    margin: 0.3rem 0.2rem;
    padding: 0.4rem;
  }
  .login-field-complement {
    margin-top: 0.2rem;
  }
  .login-register {
    margin-right: 0.3rem;
  }
  .login-forget-password {
    margin-right: 0.5rem;
  }
  .login-button-group {
    margin: 2rem 2rem;
    .login-button-success {
      width: 6.4rem;
      font-size: 1.2rem;
      padding: 0.4rem 0.8rem 0.4rem 0.8rem;
      text-align: center;
    }
  }
}
.login {
  .login-field {
    border: 1px solid #e5dfa1;
    box-sizing: border-box;
    border-radius: 0.3rem;
    background-color: #e5dfa186;
    label {
      color: red;
    }
    input {
      outline: none;
      border: 0px;
      margin-left: 0.8rem;
      height: 2rem;
      line-height: 2rem;
      width: 75%;
      background-color: transparent
    }
    input, .login-field{
      font-size: 1rem;
    }
  }
  .login-field-complement {
    float: right;
    color: rgba(0, 0, 0, 0.514);
    display: flex;
    font-size: 0.5rem;
    .login-register {
      
    }
    .login-forget-password {

    }
  }
}

</style>