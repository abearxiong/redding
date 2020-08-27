<template>
  <i :class="iconfont" :style="style"></i>
</template>

<script>
export default {
    name: "Icon",
    props: {
        name: {
            type: String
        },
        size: {
            type: Number,
            default: 1.5
        }
    },
    data() {
        return {
            iconfont: "iconfont",
            style: ""
        }
    },
    mounted() {
        this.iconfont = this.iconfont + " "+ this.name
        this.style = `font-size:${this.size}rem;`
    }
}
</script>

<style>

</style>