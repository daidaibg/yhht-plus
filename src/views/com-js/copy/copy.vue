<template>
    <h2 class="yh-title">复制到剪切板</h2>
    <p>把需要复制的内容复制到剪切板</p>
       <code-light wrapClass="codes" text="// 引入
import { Copy } from 'yhht-plus/utils';
//使用
Copy('需要复制的值').then((res) => {
  console.log('success', res);
}).catch((err) => {
  console.log('error', err);
});">
    </code-light>
    <h3 class="yh-title">例子</h3>
    <code-wrap :codeText="text.text" style="position: relative" code-type="language-xml vue">
      <div style="margin:10px;box-sizing: border-box;" class="flex ">
        <el-input v-model="input" placeholder="输入需要粘贴的值" style="margin:0 12px 0 0;"></el-input>
        <yh-button type="primary" @click="copy">复制到剪切板</yh-button>
      </div>
    </code-wrap>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import  Copy  from "@/utils/copy/copy";
import { textObj } from "./copy";
export default defineComponent({
  setup() {
    let input = ref("");
    let text=textObj
    function copy() {
      Copy(input.value)
        .then((res) => {
          console.log('success', res);
        })
        .catch((err) => {
          console.log('error', err);

        });
    }
    return {
      input,
      copy,
      text
    };
  },
});
</script>

<style lang="scss" scoped>
.box {
  display: flex;

  .el-input {
    margin-right: 10px;
  }
}
</style>