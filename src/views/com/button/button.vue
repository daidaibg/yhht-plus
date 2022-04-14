<!--
 * @Author: daidai
 * @Date: 2022-03-04 14:12:12
 * @LastEditors: daidai
 * @LastEditTime: 2022-03-31 09:01:16
 * @FilePath: \yhht-ui\src\views\com\button\button.vue
-->
<template>
  <div class="buttons pages">
  

    <h2>Button 按钮</h2>
    <p>按钮用于开启一个闭环的操作任务，如“删除”对象、“购买”商品等。</p>
    <h3>填充按钮</h3>
    <p>
      一般用于主按钮，是用户在整个页面需要关注优先级最高的操作，引导用户关注并操作。
    </p>
    <h3>文字按钮</h3>
    <p>
      直接使用文字作为按钮。是视觉吸引力最弱的一个按钮，通常出现在表格操作栏、标题和字段旁等。
    </p>
    <code-wrap :codeText="text.text" style="position: relative">
      <div class="row">
        <yh-button>默认按钮</yh-button>
        <yh-button theme="primary">主要按钮</yh-button>
        <yh-button theme="danger">危险按钮</yh-button>
        <yh-button theme="warning">警告按钮</yh-button>
        <yh-button theme="success">成功按钮</yh-button>
      </div>
      <div class="row">
        <yh-button disabled shape="round">禁用按钮</yh-button>
        <yh-button theme="primary" disabled shape="round">禁用主要</yh-button>
        <yh-button theme="danger" disabled shape="round">禁用危险</yh-button>
        <yh-button theme="warning" disabled shape="round">禁用警告</yh-button>
        <yh-button theme="success" disabled shape="round">禁用成功</yh-button>
      </div>
   <div class="row">
        <yh-button loading>默认按钮</yh-button>
        <yh-button theme="primary" loading>主要按钮</yh-button>
        <yh-button theme="danger" loading>危险按钮</yh-button>
        <yh-button theme="warning" loading>警告按钮</yh-button>
        <yh-button theme="success" loading>成功按钮</yh-button>
      </div>
      <div class="row">
        <yh-button variant="text">文字按钮</yh-button>
        <yh-button theme="primary" variant="text">禁用主要</yh-button>
        <yh-button theme="danger" variant="text">禁用危险</yh-button>
        <yh-button theme="warning" variant="text">禁用警告</yh-button>
        <yh-button theme="success" variant="text">禁用成功</yh-button>
      </div>
      <div class="row">
        <yh-button variant="text" disabled>文字按钮</yh-button>
        <yh-button theme="primary" variant="text" disabled>禁用主要</yh-button>
        <yh-button theme="danger" variant="text" disabled>禁用危险</yh-button>
        <yh-button theme="warning" variant="text" disabled>禁用警告</yh-button>
        <yh-button theme="success" variant="text" disabled>禁用成功</yh-button>
      </div>
    </code-wrap>
    <h3>描边按钮</h3>
    <p>
      描边按钮常见白底加文字的形式，在视觉强调程度上弱于填充按钮，通常与填充按钮搭配成组使用。
    </p>
    <h3>虚框按钮</h3>
    <p>按钮边框线为虚线，常用于表单中的添加配置项。</p>
    <code-wrap :codeText="text.otlineDashed" style="position: relative">
      <div class="row">
        <yh-button variant="outline">描边按钮</yh-button>
        <yh-button theme="primary" variant="outline">禁用主要</yh-button>
        <yh-button theme="danger" variant="outline">禁用危险</yh-button>
        <yh-button theme="warning" variant="outline">禁用警告</yh-button>
        <yh-button theme="success" variant="outline">禁用成功</yh-button>
      </div>
      <div class="row">
        <yh-button variant="outline" disabled>实线禁用</yh-button>
        <yh-button theme="primary" variant="outline" disabled
          >禁用主要</yh-button
        >
        <yh-button theme="danger" variant="outline" disabled
          >禁用危险</yh-button
        >
        <yh-button theme="warning" variant="outline" disabled
          >禁用警告</yh-button
        >
        <yh-button theme="success" variant="outline" disabled
          >禁用成功</yh-button
        >
      </div>
      <div class="row">
        <yh-button variant="dashed">虚线按钮</yh-button>
        <yh-button theme="primary" variant="dashed">禁用主要</yh-button>
        <yh-button theme="danger" variant="dashed">禁用危险</yh-button>
        <yh-button theme="warning" variant="dashed">禁用警告</yh-button>
        <yh-button theme="success" variant="dashed">禁用成功</yh-button>
      </div>
      <div class="row">
        <yh-button variant="dashed" disabled>虚线禁用</yh-button>
        <yh-button theme="primary" variant="dashed" disabled
          >禁用主要</yh-button
        >
        <yh-button theme="danger" variant="dashed" disabled>禁用危险</yh-button>
        <yh-button theme="warning" variant="dashed" disabled
          >禁用警告</yh-button
        >
        <yh-button theme="success" variant="dashed" disabled
          >禁用成功</yh-button
        >
      </div>
    </code-wrap>
    <h3>按钮形状与尺寸</h3>
    <p>提供大、中（默认）、小三种尺寸。</p>
    <p>提供长方形、圆角长方形、圆形四种形状。</p>
    <code-wrap :codeText="text.sharpSize" style="position: relative">
      <div class="row">
        <yh-button size="small">小按钮</yh-button>
        <yh-button>默认按钮</yh-button>
        <yh-button size="large">大按钮</yh-button>
      </div>
      <div class="row">
        <yh-button size="small" shape="round">小按钮</yh-button>
        <yh-button shape="round">默认按钮</yh-button>
        <yh-button size="large" shape="round">大按钮</yh-button>
      </div>
      <div class="row">
        <yh-button size="small" shape="circle" theme="primary">小</yh-button>
        <yh-button shape="circle" theme="warning">中</yh-button>
        <yh-button size="large" shape="circle" theme="success">大</yh-button>
      </div>
    </code-wrap>
    <h3>Block 按钮</h3>
    <p>
      Block 按钮在宽度上充满其所在的父容器（无 padding 和 margin
      值）。该按钮常见于移动端和一些表单场景中。
    </p>
    <div class="warning">
      <p>圆形按钮将会失效</p>
    </div>
    <code-wrap :codeText="text.block" style="position: relative">
      <div class="block_wrap">
        <yh-button theme="primary" block>主要按钮</yh-button>
        <yh-button theme="success" variant="outline" block>禁用成功</yh-button>
        <yh-button theme="warning" variant="dashed" block>禁用警告</yh-button>
        <yh-button theme="danger" variant="text" block>禁用危险</yh-button>
        <yh-button theme="primary" block size="small" shape="round">主要小按钮</yh-button>
        <yh-button theme="primary" block loading shape="round">主要默认按钮</yh-button>
        <yh-button theme="primary" block size="large" loading shape="round">主要大按钮</yh-button>
      </div>
    </code-wrap>
    <h3>参数</h3>
    <TableParam :data="paramData" />
  </div>
</template>

<script lang="ts">
import text from "./button";
export default {
  
  data() {
    return {
      text: text,
      paramData: [
        {
          key: "block",
          explain: "是否为块级元素",
          type: "Boolean",
          opt: "true",
          def: "false",
        },
        {
          key: "disabled",
          explain: "是否禁用按钮",
          type: "Boolean",
          opt: "true",
          def: "false",
        },
        {
          key: "shape",
          explain:
            "按钮形状，有 4 种：长方形、正方形、圆角长方形、圆形可选项：rectangle/square/round/circle 正方形暂不支持使用 ",
          type: "String",
          opt: "rectangle/square/round/circle",
          def: "rectangle",
        },
        {
          key: "size",
          explain: "组件尺寸",
          type: "String",
          opt: "可选项：small/medium/large",
          def: "medium",
        },
        {
          key: "theme",
          explain:
            "组件风格，依次为默认色、品牌色、危险色、警告色、成功色。可选项：default/primary/danger/warning/success",
          type: "String",
          opt: "default/primary/danger/warning/success",
          def: "default",
        },
        {
          key: "variant",
          explain:
            "按钮形式，基础、线框、虚线、文字。可选项：base/outline/dashed/text",
          type: "String",
          opt: "base/outline/dashed/text",
          def: "base",
        },
          {
          key: "loading",
          explain:
            "是否显示为加载状态",
          type: "Boolean",
          opt: "true",
          def: "false",
        },
      ],
    };
  },
  created() {},

  mounted() {},
  methods: {},
};
</script>
<style lang='scss' scoped>
.row {
  margin: 0 0 20px 0;
  .yh-button + .yh-button {
    margin-left: 8px;
  }
}
.block_wrap {
  display: flex;
  flex-wrap: wrap;
  row-gap: 16px;
  column-gap: 16px;
}

</style>