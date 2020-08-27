<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div @click="goBack">返回</div>
  </div>
</template>
<script>
export default {
  name: "About",
  mounted () {
    if (window.history && window.history.pushState) {
        // 向历史记录中插入了当前页
        history.pushState(null, null, document.URL);
        window.addEventListener('popstate', this.goBack, false);
    }
    console.log("禁止返回")
  },  
  unmounted () {
      window.removeEventListener('popstate', this.goBack, false);
  },
  methods: {
      goBack () {
          console.log("点击了浏览器的返回按钮");
          history.pushState(null, null, document.URL);
      },
  } 
}
</script>