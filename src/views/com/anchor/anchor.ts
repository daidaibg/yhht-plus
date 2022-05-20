export const warnCodeText = `<template>
<yh-anchor-item href="'#'+path+'#default'" title='基础锚点' />
<script setup>
  import { computed, getCurrentInstance } from 'vue';
  import get from 'lodash/get';

  const { ctx } = getCurrentInstance();
  const path = computed(() => get(ctx, '$route.path', ''));
</script> 
</template>
`
export const curporCodeText = `<template>
  <div class="anchor-demo">
    <yh-anchor container="body" :bounds="50" :targetOffset="120">
      <template #cursor>
        <div class="test-cursor" />
      </template>
      <yh-anchor-item href="#基础锚点" title="基础锚点" />
      <yh-anchor-item href="#自定义游标锚点" title="自定义游标锚点" />
      <yh-anchor-item href="#注意" title="注意" />
      <yh-anchor-item href="#Anchor-Props" title="Anchor Props" />
    </yh-anchor>
  </div>
</template>


<style lang="scss" scoped>
.anchor-demo {
  border: 1px solid transparent;
  padding: 20px;
  margin: -20px;

  .test-cursor {
    width: 10px;
    height: 10px;
    background-color: #018E9A;
    position: absolute;
    border-radius: 50%;
    left: 50%;
    margin-left: -5px;
    top: 50%;
    margin-top: -5px;
  }
}
</style>
`
export const containerCodeText = `<template>
    <div id="container" class="anchor-demo anchor-container-demo">
        <yh-anchor id="default" container="#anchor-container" no-link>
            <yh-anchor-item href="#content-1" title="content-1" />
            <yh-anchor-item href="#content-2" title="content-2" />
            <yh-anchor-item href="#content-3" title="content-3" />
            <yh-anchor-item href="#content-4" title="content-4" />
        </yh-anchor>
        <div id="anchor-container">
            <div id="content-1" class="anchor-content-1" style="">anchor-content-1</div>
            <div id="content-2" class="anchor-content-2">anchor-content-2</div>
            <div id="content-3" class="anchor-content-3">anchor-content-3</div>
            <div id="content-4" class="anchor-content-4">anchor-content-4</div>
            <div id="content-5" class="anchor-content-5">anchor-content-5</div>
        </div>
    </div>
</template>
<style lang="less" scoped>
.anchor-container-demo {
  display: flex;
}
#anchor-container {
  flex-grow: 1;
  height: 200px;
  overflow: auto;
  > div {
    text-align: center;
    font-size: 22px;
    line-height: 100px;
  }
  .anchor-content-1 {
    background: #ecf2fe;
  }
  .anchor-content-2 {
    background: #d4e3fc;
  }
  .anchor-content-3 {
    background: #bbd3fb;
  }
  .anchor-content-4 {
    background: #96bbf8;
  }
  .anchor-content-5 {
    background: #699ef5;
  }
}
</style>
`
export const propsData = [
    {
        key: "bounds",
        explain: "	锚点区域边界",
        type: "Number",
        opt: "-",
        def: "5",
    },
    {
        key: "container",
        explain: "指定滚动的容器。数据类型为 String 时，会被当作选择器处理，进行节点查询。示例：'body' 或 () => document.body。TS 类型：ScrollContainer",
        type: "String / Function",
        opt: "-",
        def: "() => (() => window)",
    },
    {
        key: "currentActive",
        explain:
            "当前锚点，首次进入页面的锚点需要传入 ",
        type: "String",
        opt: "-",
        def: "",
    },
    {
        key: "size",
        explain: "组件尺寸",
        type: "String",
        opt: "可选项：small/medium/large",
        def: "medium",
    },
    {
        key: "targetOffset",
        explain:
            "锚点滚动偏移量",
        type: "Number",
        opt: "-",
        def: "0",
    },
    {
        key: "cursor",
        explain:
            "用于自定义选中项左侧游标。",
        type: "Slot",
        opt: "-",
        def: "-",
    },
]

export const propsEvent = [
    {
        method: "change",
        explain: "锚点区域边界",
        parms: "(currentLink: string, prevLink: string)",
    },
    {
        method: "click",
        explain: "锚点被点击时触发",
        parms: "(link: { href: string; title: string; e: MouseEvent })",
    },

]

export const propsItemData = [
    {
        key: "href",
        explain: "必需。锚点链接, 如果是 hash 模式需要加上当前 path",
        type: "String",
        opt: "-",
        def: "-",
    },
    {
        key: "target",
        explain: "锚点文本。可选项：_self/_blank/_parent/_top",
        type: "String",
        opt: "_self/_blank/_parent/_top",
        def: "_self",
    },
    {
        key: "title",
        explain:
            "锚点文本",
        type: "String / Slot",
        opt: "-",
        def: "",
    },

]