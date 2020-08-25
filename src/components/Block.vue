<template>
  <div class="page-block" >
    <textarea class="page-input" v-model="text" @focus="onChangeStart(1)" @blur="onChangeFinish(1)"></textarea>
    <div class="page-content" :contenteditable="canEdit" @input="onChangeContent" @focus="onChangeStart(2)" v-html="getTextToHtml" @blur="onChangeFinish(2)"></div>
  </div>
  
</template>

<script>
import { parseText, parseHtml } from "@/utils";
export default {
  name: "Block",
  props: {
      content : {
          type: Object
      }
  },
  data() {
      return {
          isTextarea: 0,
          text: "",
          html: "",
          newHtml: "",
          canEdit: false,
          setting: {

          }
      }
  },
  computed: {
      getTextToHtml(){
          return parseText(this.text);
      }
  },
  mounted() {
      this.text = this.content.text;
      this.html = parseText(this.text);
      this.newHtml = this.html;

  },
  methods: {
      onChangeStart(val) {
          this.isTextarea = val;
      },
      onChangeFinish(val) {
          this.isTextarea = 0;
          if(val===2 && this.html !== this.newHtml) {
              console.log("new", this.newHtml);
              this.text = parseHtml(this.newHtml)
              this.html = this.newHtml;
          }else if(val ===1 ) {
              this.html = parseText(this.text);
          }
      },
      onChangeContent(e) {
        this.newHtml = e.target.innerHTML;
      },
      contentToHtml(content) {
          return content;
      },
      htmlToContent(html) {
          const markdown = parseHtml(html);
          return markdown;
      },
      updateBlock() {
          const a = 1;
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
.page-preview {
    margin-top: 20px;
    border: 4px solid khaki ;
    box-sizing: border-box;
}
</style>