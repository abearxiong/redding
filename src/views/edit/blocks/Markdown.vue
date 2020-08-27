<template>
    <Cover>
      <div class="markdown-edit" :style="{pointerEvents:!isShowRight&&!isShowLeft?'none':'auto'}">
        <div class="markdown-edit-header"><div @click="onShowMarkdown">关闭全屏编辑</div></div>
        <div class="markdown-edit-content">
          <div class="middle content-middle-left">
              <div @click.stop="isShowLeft=!isShowLeft" v-if="isShowLeft"><Icon name="icon-icon_arrowleft-01"/></div>
              <div @click.stop="isShowLeft=!isShowLeft" v-if="!isShowLeft"><Icon name="icon-icon_arrowright"/></div>
          </div>
          <transition name="reslide-fade">
          <div class="content-left" v-show="isShowLeft">
              <div id="editor" @change="onChangeAce" @click="onChangeLeft(true)"></div>
          </div>
          </transition>
          <div class="middle content-middle">
              <!-- <div @click.stop="onShowRight"><Icon name="icon-icon_arrowright"/></div>
              <div @click.stop="onShowRight"><Icon name="icon-icon_arrowleft-01"/></div> -->
          </div>
            <div style="flex-grow:1;pointer-events:none;" v-if="!isShowRight&&!isShowLeft"></div>
           <transition name="slide-fade"  >
                <div class="content-right" ref="rightElement" v-if="isShowRight" :style="{'width': !isShowLeft?'100%':'45%'}">
                    <div 
                        class="markdown-preview" 
                        ref="markdown-preview"  
                        v-html="html"
                        :contenteditable="currentBlock?.setting?.previewCanEdit??true"
                        @input="onChangeContent"
                        @click="onChangeLeft(false)"
                        @blur="onFinishRight"
                    ></div>
                </div> 
          </transition>
          <div class="middle content-middle-right">
              <div @click.stop="isShowRight=!isShowRight" v-if="!isShowRight"><Icon name="icon-icon_arrowleft-01"/></div>
              <div @click.stop="isShowRight=!isShowRight" v-if="isShowRight"><Icon name="icon-icon_arrowright"/></div>
          </div>
        </div>
        <div class="markdown-edit-footer">查看信息</div>
      </div>
    </Cover>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ace, {Ace, edit} from "ace-builds";
import Cover from "@/components/Cover";
import Icon from "@/components/Icon";
import { parseText, parseHtml, debounce } from "@/utils";

export default {
    name: "Markdown",
    components: {
        Cover,
        Icon,
    },
    data() {
        return {
            isShowRight: true,
            isShowLeft: true,
            editor: "", 
            code: "code",
            html: "",
            isEditLeft: true,
        }
    },
    computed: {
        ...mapGetters(["currentBlock"])
    },
    mounted() {
        const element = this.$refs.rightElement;
        const text = this.$refs.textarea
        const editor = ace.edit("editor",{
            // maxLines: 20, // 最大行数，超过会自动出现滚动条
            minLines: 10, // 最小行数，还未到最大行数时，编辑器会自动伸缩大小
            fontSize: 12, // 编辑器内字体大小
            // theme: this.themePath, // 默认设置的主题
            // mode: this.modePath, // 默认设置的语言模式
            tabSize: 4, // 制表符设置为 4 个空格大小
            readOnly: false,
            highlightActiveLine: false,
            value: this.code
        });
        ace.config.set(
            "basePath", 
            "https://cdn.jsdelivr.net/npm/ace-builds@1.4.3/src-noconflict/"
        )
        // editor.setTheme("ace/theme/monokai"); 
        editor.getSession().setMode("ace/mode/markdown");
        editor.getSession().setUseWrapMode(true); // 自动换行
        // editor.setPrintMarginColumn(80);
        // class=ace_print-margin 多的一条线
        editor.setShowPrintMargin(false); 
        // console.log(editor.getShowPrintMargin()); 
        this.editor = editor;
        editor.getSession().on("change", this.onChangeAce);
        editor.setValue(this.currentBlock?.value);
        editor.clearSelection()
        editor.on("blur", this.onFinish);
        if(window){
            window.markdown = editor;
        }     
    },

    methods: {
        ...mapActions(["setBlock"]),
        onShowRight() {
            this.isShowRight = !this.isShowRight;
        },
        onChangeAce() { 
            if( this.isEditLeft ) {
                this.html = parseText(this.editor.getValue());
                this.updateBlock();
            }
        },
        onChangeContent(e) {
            if( !this.isEditLeft ){           
                const html = e.target.innerHTML;
                const text = parseHtml(html);
                // console.log("change state")
                this.editor.setValue(text);
                this.editor.clearSelection();
            }
        },
        onChangeLeft(val) {
            this.isEditLeft = val;
        },
        onFinishRight() {
            this.updateBlock();
        },
        updateBlock() {
            const currentBlock = this.currentBlock;
            currentBlock.update({value : this.editor.getValue()});
            this.setBlock(currentBlock)
        },
        onFinish( ) {
            this.isEditLeft = false;
        },
        onShowMarkdown() {
            this.$emit("on-show-markdown");
        }
    },
}
</script>

<style lang="scss">
// markdown-edit
.markdown-edit {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  .markdown-edit-content {
    flex-grow: 1;
    display: flex;
    overflow-y: scroll;
    .content-left {
      flex-grow: 1;
      display: flex;
      #editor {
          width: 100%;
          height: 100%;
      }
    }
    .content-right {
        width: 45%;
        height: 100%;
        overflow-y: scroll;
        display: flex;
        .markdown-preview {
            flex-grow: 1;
        }
    }
    /* 可以设置不同的进入和离开动画 */
    /* 设置持续时间和动画函数 */
    .slide-fade-enter-active {
        transform: translate(400px, 0);
        opacity: 0;
        transition: all 2.8s ease;
    }
    .slide-fade-leave-active {
        transition: all 1.8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter-to {
        transform: translate(0, 0);
        opacity: 1;
    }
    .slide-fade-leave-to, .reslide-fade-leave-to {
        transform: translate(400px, 0);
        opacity: 0;
    }
    .reslide-fade-enter-active {
        transform: translate(-400px, 0);
        opacity: 1;
        transition: all 2.8s ease;
    }
    .reslide-fade-enter-to {
        transform: translate(0, 0);
        opacity: 1;
    }
    .reslide-fade-leave-active {
        transition: all 1.8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }

    .reslide-fade-leave-to {
        transform: translate(-400px, 0);
        opacity: 0;
    }
    @media (max-width: 1024px) {
        .content-right {
            display: none;
        }
        .content-middle {
            display: none;
        }
    }
  }
}
// markdown-edit-style
.markdown-edit {
    .markdown-edit-header, .markdown-edit-footer{
        background-color: white;
    };
    .middle {
        background-color: white;
        pointer-events: auto;
    }
    .content-left {
        background-color: grey;
        textarea::selections {    background-color: red;    color: #fff;}
    }
    .content-right {
        background-color: #fcfaf2;
        .markdown-preview {
            text-align: left;
            // margin: 2rem;
            outline: none;
            padding: 0 2rem 0 1rem;
        }
    }
}
</style>
