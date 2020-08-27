<template>
  <div class="edit">
    <div class="index-wrapper">
      <Sidebar></Sidebar>
    </div>
    <div class="content-wrapper">
      <Content></Content>
    </div>
  </div>
</template>

<script>
// 侧边栏控制
import Sidebar from "./edit/Sidebar";
import Content from "./edit/Content";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Home",
  components: {
    Sidebar,
    Content
  },
  data() {
    return {};
  },
  mounted() {
    console.log("Edit.vue页面", this.$store);
    // const c = null
    // console.log('内容-',c??"不存在",'-');
    this.requestPages();
    this.requestBlocks();
  },
  methods: {
    ...mapActions(["requestPages", "requestBlocks"]),
  }
};
</script>

<style lang="scss" scoped>
.edit {
  display: flex;
  width: 100%;
  height: 100%;
}
.content-wrapper {
  flex-grow: 1;
}
</style>
