<!--
 * @Author: xion
 * @Date: 2020-08-29 17:49:28
 * @LastEditors: xion
 * @LastEditTime: 2020-08-30 01:25:31
 * @FilePath: \redding\src\components\Drag.vue
 * @Description: 真是太开心了
-->
<template>
  <div class="transparent" @mousedown="onMoveDown" @mousemove="onMove" @mouseup="isMove=!isMove" draggable="true">
    <div class="drag-window"  ref="window" @click="onGetPos">
      client(X:Y): ({{clientX}},{{clientY}})
      <!-- style="left:10px;top:20px;" -->
    </div>
  </div>
</template>

<script>

export default {
  name: "Drag",
  data(){
    return {
      clientX: 0,
      clientY: 0,
      ox: 0,
      oy: 0,
      isMove: false,
      el: null,
    }
  },
  mounted(){
    this.el = this.$refs.window;
    console.log(this.el)
  },
  methods: {
    onGetPos(event){
      const mousePos = event;
      this.clientX = mousePos.clientX - mousePos.offsetX;
      this.clientY = mousePos.clientY - mousePos.offsetY;
      this.isMove = !this.isMove;
      this.ox = mousePos.offsetX;
      this.oy = mousePos.offsetY;
    },
    onMoveDown(event){
      // var disX=event.clientX-oDiv.offsetLeft;
      // var disY=event.clientY-oDiv.offsetTop;
      console.log(event)
      const mousePos = event;
      this.clientX = mousePos.clientX - mousePos.offsetX;
      this.clientY = mousePos.clientY - mousePos.offsetY;
      this.isMove = true;
      this.ox = mousePos.offsetX;
      this.oy = mousePos.offsetY;
      // this.el.style.left = this.clientX;
      // this.el.style.top = this.clientY;
      console.log(this.el)
    },
    onMove(event) {
      if(this.isMove){
        const mousePos = event;
        this.clientX = mousePos.clientX - this.ox;
        this.clientY = mousePos.clientY - this.oy;
        // this.el.clientX = this.clientX;
        // this.el.clientY = this.clientY;
        this.el.style.left = this.clientX + 'px';
        this.el.style.top = this.clientY + 'px';
        console.log("MOVE", event)
      }

    }
  }
};
</script>

<style>
.transparent {
  width: 100%;
  height: 100%;
}
.drag-window {
    width: 500px;
    height: 400px;
    background-color: rgba(16, 84, 211, 0.747);
    position: fixed;
    /* margin:0 auto;
    left: 0;
    right: 0; */

    /* left: 50%;
    top: 50%;
    transform: translate(-50%,-50%); */
}
</style>