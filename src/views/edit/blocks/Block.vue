<template>
  <div class="page-block" @click="toBlock(content.openid)">
    <textarea
      class="page-input"
      :value="text"
      @input="onChangeText"
      @focus="onChangeStart(1)"
      @blur="onChangeFinish"
    ></textarea>
    <div
      class="page-content"
      :contenteditable="canEdit"
      @input="onChangeHtml"
      @focus="onChangeStart(2)"
      @blur="onChangeFinish"
      v-html="html"
    ></div>
  </div>
</template>

<script>
import { parseText, parseHtml } from "@/utils";
import { mapGetters,mapActions } from "vuex"
export default {
  name: "Block",
  props: {
    content: {
      type: Object,
    },
  },
  data() {
    return {
      isFocus: 0,
      text: "",
      html: "",
      editText: "",
      editHtml: "",
      canEdit: true,
    };
  },
  computed: {
    ...mapGetters(['currentPage','currentBlock']),
    hash() {
      return this.content.hash;
    }
  },
  mounted(){
    this.onText();
  },
  methods: {
    ...mapActions(['toBlock', 'setBlock']),
    onText(){
      if(this.isFocus===0){
        this.text = this.content.value;
        this.html = parseText(this.text);
      }else if(this.isFocus===1){
        this.html = parseText(this.text);
        this.updateBlock()
      }else{
        this.text = parseHtml(this.editHtml);
        this.updateBlock()
      }
    },
    onChangeStart(val) {
      this.isFocus = val;
    },
    onChangeFinish() {
      this.isFocus = 0;
    },
    onChangeText(e) {
      this.text = e.target.value;
      this.onText();
    },
    onChangeHtml(e) {
      this.editHtml = e.target.innerHTML;
      this.onText()
    },
    updateBlock() {
        const currentBlock = this.currentBlock;
        currentBlock.update({value: this.text});
        this.setBlock(currentBlock);
    },
  },
  watch: {
    hash(val,oldVal){
      this.onText();
    }
  }
};
</script>
<style lang="scss" scoped>
.page-input {
  flex-grow: 1;
  width: 100%;
  min-height: 100px;
}
.page-block {
  flex-grow: 1;
  margin: auto;
}
.page-content {
  margin-top: 20px;
  padding: 1rem 0.5rem 0 0.5rem;
  // border: 4px solid khaki;
  // box-sizing: border-box;
  text-align: left;
}
</style>
