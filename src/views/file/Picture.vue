<!--
 * @Author: xion
 * @Date: 2020-09-02 15:11:33
 * @LastEditors: xion
 * @LastEditTime: 2020-09-02 17:56:39
 * @FilePath: \redding\src\views\file\Picture.vue
 * @Description: 真是太开心了
-->
<template>
    <div class="picture">
        图片管理
        <input type="file" />
        <div @click="uploadFile">上传文件</div>
    </div>
</template>

<script>

export default {
    name: "Picture",
    data() {
        return {
            cos: null
        }
    },
    mounted() {
        // 
    },
    methods: {
        uploadFile(){
        //
        }
    }
    
}
</script>