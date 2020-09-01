<!--
 * @Author: xion
 * @Date: 2020-08-26 21:47:29
 * @LastEditors: xion
 * @LastEditTime: 2020-08-31 17:17:11
 * @FilePath: \redding\src\components\Cover.vue
 * @Description: 真是太开心了
-->
<template>
  <div class="cover" style="pointer-events:none;">
      <slot></slot>
  </div>
</template>

<script>
export default {
    name: "Cover"
}
</script>

<style>
.cover {
    position: fixed;
    /* background-color: white; */
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
}
</style>