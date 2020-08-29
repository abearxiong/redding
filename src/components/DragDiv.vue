<!--
 * @Author: xion
 * @Date: 2020-08-29 17:49:28
 * @LastEditors: xion
 * @LastEditTime: 2020-08-29 18:19:01
 * @FilePath: \reding\src\components\DragDiv.vue
 * @Description: 真是太开心了
-->
<template>
  <div class="drag-window"></div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({})
export default class DragDiv extends Vue{};
</script>

<style>
.drag-window {
    width: 500px;
    height: 400px;
    background-color: rgba(16, 84, 211, 0.747);
    position: fixed;
    /* margin:0 auto;
    left: 0;
    right: 0; */
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
}
</style>