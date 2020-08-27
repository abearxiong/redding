<template>
  <div id="app">
    <router-view />
    <Message :msg="showMsg"/>
  </div>
</template>
<script>
import Message from "@/components/Message"; 
import { mapGetters } from "vuex";
export default {
  name: "App",
  components: {
    Message
  },
  computed: {
    ...mapGetters(["showMsg"])
  }
}
</script>
<style lang="scss">
body,html,#app{
  margin: 0;
  width: 100%;
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}
.is-ok {
  border: 1px dotted  red;
  box-sizing: border-box;
}
// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
.x-btn {
  user-select: none;
  cursor: pointer;
}
</style>
