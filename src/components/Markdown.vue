<template>
    <Cover>
      <div class="markdown-edit" :style="{pointerEvents:!isShowRight&&!isShowLeft?'none':'auto'}">
          <slot></slot>
        <div class="markdown-edit-content">
          <transition name="reslide-fade">
            <div class="content-left" v-show="isShowLeft">
                <div id="editor" @change="onChangeAce" @click="onChangeLeft(true)"></div>
            </div>
          </transition>
           <transition name="slide-fade" >
                <div class="content-right" ref="rightElement" v-if="isShowRight" :style="{'width': !isShowLeft?'100%':'45%'}">
                    <div 
                        class="markdown-preview" 
                        ref="markdown-preview"  
                        v-html="html"
                        :contenteditable="true"
                        @input="onChangeContent"
                        @click="onChangeLeft(false)"
                    ></div>
                </div> 
          </transition>
        </div>
      </div>
    </Cover>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import ace, {Ace, edit} from "ace-builds";
import Cover from "@/components/Cover";
import Icon from "@/components/Icon";
import { parseText, parseHtml, debounce } from "@/utils";
import hotkeys from 'hotkeys-js';

export default {
    name: "Markdown",
    components: {
        Cover
    },
    props: {
        markdown: {
            type: Object,
            default: ()=>{
                return {value: "##"};
            }
        }
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
        editor.setShowPrintMargin(false); 
        this.editor = editor;
        editor.getSession().on("change", this.onChangeAce);
        const value = this.markdown.value||"code";
        editor.setValue(value);
        editor.clearSelection()
        editor.on("blur", this.onFinish);   

        hotkeys("ctrl+q,ctrl+l", "markdown",this.onShowLeft);
        hotkeys("ctrl+e", "markdown", this.onShowRight);
        hotkeys("ctrl+enter,ctrl+s","markdown", this.onOk);
        hotkeys("esc", "markdown", this.closeLeft)
        hotkeys("ctrl+h","markdown",this.showHelp);
        hotkeys.setScope("markdown");
        hotkeys.filter = ()=>true;
    },
    unmounted(){
        hotkeys.unbind("ctrl+q,ctrl+l","markdown",this.onShowLeft);
        hotkeys.unbind("ctrl+e", "markdown", this.onShowRight);
        hotkeys.unbind("ctrl+enter,ctrl+s", "markdown", this.onOk);
        hotkeys.unbind("esc", "markdown", this.closeLeft)
        hotkeys.unbind("ctrl+h","markdown",this.showHelp);
        hotkeys.setScope("all")
    },
    methods: {
        onShowLeft(e) {
            this.isShowLeft = !this.isShowLeft;
            console.log("key", e)
            e.preventDefault()
        },
        onShowRight(e) {
            this.isShowRight = !this.isShowRight;
            e.preventDefault()
        },
        onOk(e) {
            this.onShowMarkdown();
            e.preventDefault();
        },
        onChangeAce() { 
            if( this.isEditLeft ) {
                this.text = this.editor.getValue();
                this.html = parseText(this.text );
            }
        },
        onChangeContent(e) {
            if( !this.isEditLeft ){           
                const html = e.target.innerHTML;
                const text = parseHtml(html);
                this.editor.setValue(text);
                this.editor.clearSelection();
            }
        },
        onChangeLeft(val) {
            this.isEditLeft = val;
        },
        onFinish( ) {
            this.isEditLeft = false;
        },
        onShowMarkdown() {
            const newContent = this.markdown;
            newContent.value = this.text;
            this.$emit("update", newContent);
        },
        preventDefault(event, handler) {
            event.preventDefault();
        },
        showHelp(event, handler){
            this.$emit("markdown-help");
            event.preventDefault();
        },
        closeLeft(e){
            if(!this.isShowLeft&&!this.isShowRight){
                this.onShowMarkdown()
            }else if( this.isShowLeft && this.isShowRight){
                this.isShowLeft = !this.isShowLeft;
            }else if( this.isShowLeft && !this.isShowRight){
                this.isShowLeft = !this.isShowLeft;
            }else if( !this.isShowLeft && this.isShowRight){
                this.isShowLeft = !this.isShowLeft;
            }
            
            e.preventDefault();
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
    .slide-fade-leave-to {
        transform: translate(400px, 0);
        opacity: 0;
    }

   .reslide-fade-leave-active {
        opacity: 1;
        transform: translate(400, 0);
        transition: all 3.8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .reslide-fade-leave-to {
        transform: translate(0, 0);
        opacity: 0;
    }
    .reslide-fade-enter-active {
        transform: translate(-400px, -100);
        opacity: 0.5;
        transition: all 4.8s ease;
        z-index: 10;
    }
    .reslide-fade-enter-to {
        transform: translate(100, 0);
        opacity: 1;
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
