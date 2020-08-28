<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import Message from "@/components/Message"; 
import { mapGetters } from "vuex";
export default {
  name: "App",
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
.x-btn {
  user-select: none;
  cursor: pointer;
}
</style>
