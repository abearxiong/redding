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
import Sidebar from './edit/Sidebar';
import Content from './edit/Content';
export default {
  name: "Home",
  components: {
    Sidebar,
    Content
  },
  data() {
    return {

    }
  },
  mounted() {
    console.log("Edit.vue页面", this.$store);
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