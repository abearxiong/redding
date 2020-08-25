<template>
    <div class="sidebar-btn x-btn" @click="appCall">
        <div style="display:flex;align-items: center;width:100%;padding: 0.15rem 1rem">
            <div><i :class="icon+' iconfont'"></i></div>
            <div>{{title}}</div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    name: "SidebarBtn",
    props: {
        title: {
            type: String,
            default: "命令"
        },
        icon: {
            type: String,
            default: "icon-bucunzai"
        }
    },
      computed: {
        ...mapGetters([
        'hasV',
        'hasIcon'
        ])
      },
    data() {
        return {
            isNoIcon: false, // icon不存在，设置title提示
        }
    },
    mounted() {
        // console.log("title", this.title)
        // todo: 检测icon是否存在
    },
    methods: {
        appCall() {
            this.$store.getters.msg('临时');
        }
    }
}
</script>