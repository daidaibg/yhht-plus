let textObj:codeText ={
    text:`<template>
    <el-input v-model="input" placeholder="输入需要粘贴的值" style="margin:0 12px 0 0;"></el-input>
    <yh-button type="primary" @click="copy">复制到剪切板</yh-button>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Copy } from "yhht-plus/utils";
import { ElInput } from "element-plus";
export default defineComponent({
  components: { ElInput },
  setup() {
    let input = ref("");
    const copy=()=> {
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
    };
  },
});
</script>
`,

}
export  {textObj}