<!--
 * @Author: xion
 * @Date: 2020-08-31 16:46:15
 * @LastEditors: xion
 * @LastEditTime: 2020-09-01 18:04:27
 * @FilePath: \redding\src\components\WindowHelp.vue
 * @Description: 真是太开心了
-->
<template>
    <div class="show-help el-card padding-8" :style="showStyle">帮助:{{showName}}<small>ctrl+h隐藏帮助</small>
        <div>
            <slot></slot>
            <table class="el-table">
                <tr>
                    <th>命名</th>
                    <th>按键</th>
                    <th>介绍</th>
                </tr>
                <tr v-for="(item,index) in showIntroduce" :key="index+showName">
                    <td>{{ item.name }}</td>
                    <td>{{ item.hotkey }}</td>
                    <td><div v-html="item.introduce"></div></td>
                </tr>
            </table>
        </div>
    </div>
</template>
<script>
import { getFormatStyle } from '@/utils';
export default {
    name: "WindowHelp",
    props: {
        helpContent: {
            type: Object,
            default: () => {
                return {
                    name: ()=>"帮助",
                    introduce: ()=>[],
                    style: ()=>""
                }
            }
        }
    },
    computed: {
        showIntroduce(){
            return this.helpContent.introduce();
        },
        showName() {
            return this.helpContent.name();
        },
        showStyle() {
            return getFormatStyle(this.helpContent.style());
        }
    }
}
</script>
<style lang="sass" scoped>

</style>