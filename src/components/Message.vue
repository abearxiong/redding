<template>
  <div :class="{'tip':true, 'tip-hide': !isShowMsg}">
    <div class="header">
      卡片面板
      <span style="margin-left: 280px;">
        <i @click="onCloseMsg">x</i>
      </span>
    </div>

    <div class="card-body">
      卡片式面板面板通常用于非白色背景色的主体内
      <br />从而映衬出边框投影
    </div>
  </div>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      isShowMsg: false
    };
  },
  methods: {
    onCloseMsg() {
      console.log("hidden")
      this.isShowMsg = !this.isShowMsg;
    }
  }
};
</script>

<style>
.tip {
  display: block;
  border: 1px solid #e8e8e8;
  border-radius: 2%;
  /* background-color: #8D8D8D; */
  position: fixed;
  width: 400px;
  height: 400px;

  right: 20px;
  bottom: -370px;
  -webkit-transition: all 3s;
  -webkit-transform: translate(0, -400px);
}
.tip-hide {
  -webkit-transform: translate(0, 50px);
}
.tip .header {
  height: 42px;
  line-height: 42px;
  padding: 0 15px;
  border-bottom: 1px solid #e8e8e8;
  color: #333;
  border-radius: 2px 2px 0 0;
  font-size: 14px;
}

.tip .card-body {
  padding: 10px 15px;
  line-height: 24px;
}
</style>