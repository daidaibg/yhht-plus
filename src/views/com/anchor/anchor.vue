<!--
 * @Author: daidai
 * @Date: 2022-03-04 14:12:12
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-02-21 17:29:32
 * @FilePath: \yhht-ui\src\views\com\button\button.vue
-->
<template>
  <div class="buttons ">
    <h2 class="yh-title" id="Anchor锚点">Anchor 锚点</h2>
    <p>页面内的超级链接，用于跳转到页面内指定位置</p>
    <h3 class="yh-title" :id="`基础锚点`" >基础锚点 </h3>
    <code-wrap :codeText="baseCodeText" style="position: relative" code-type="language-xml vue">
      <!-- <yh-affix container="body" :offset="120">
      </yh-affix> -->
      <yh-anchor container="body" :bounds="50" :currentActive="currentActive">
        <yh-anchor-item :href="`#基础锚点`" title="基础锚点">
        </yh-anchor-item>
        <yh-anchor-item href="#自定义游标锚点" title="自定义游标锚点" />
        <yh-anchor-item href="#注意" title="注意" />
        <yh-anchor-item href="#Anchor-Props" title="Anchor Props" />
      </yh-anchor>
    </code-wrap>
    <h3 class="yh-title" id="自定义游标锚点">自定义游标锚点</h3>
    <p>targetOffset 锚点滚动偏移量 </p>
    <code-wrap :codeText="curporCodeText" style="position: relative" code-type="language-xml vue">
      <div class="anchor-demo">
        <yh-anchor container="body" :bounds="50" :targetOffset="120" :currentActive="currentActive">
          <template #cursor>
            <div class="test-cursor" />
          </template>
          <yh-anchor-item href="#基础锚点" title="基础锚点" />
          <yh-anchor-item href="#自定义游标锚点" title="自定义游标锚点" />
          <yh-anchor-item href="#注意" title="注意" />
          <yh-anchor-item href="#Anchor-Props" title="Anchor Props" />
        </yh-anchor>
      </div>
    </code-wrap>
    <h3 class="yh-title" id="指定容器锚点">指定容器锚点</h3>
    <p>指定响应滚动的容器进行锚点定位</p>
    <div class="warning">
      <p>如果使用了指定容器配置container,如果您的元素充满整个html不用考虑以下，根据业务需求进行调整配置。使用no-link配置可以不把锚点拼接到url后边，拼接到路径后边会使指定容器也置顶。</p>
    </div>
    <code-wrap :codeText="containerCodeText" style="position: relative;" code-type="language-xml vue">
      <div id="container" class="anchor-demo anchor-container-demo">
        <yh-anchor id="default" container="#anchor-container" no-link>
          <yh-anchor-item :href="`#content-1`" title="content-1" />
          <yh-anchor-item :href="`#content-2`" title="content-2" />
          <yh-anchor-item :href="`#content-3`" title="content-3" />
          <yh-anchor-item :href="`#content-4`" title="content-4" />
        </yh-anchor>
        <div id="anchor-container">
          <div :id="`content-1`" class="anchor-content-1" style="">anchor-content-1</div>
          <div :id="`content-2`" class="anchor-content-2">anchor-content-2</div>
          <div :id="`content-3`" class="anchor-content-3">anchor-content-3</div>
          <div :id="`content-4`" class="anchor-content-4">anchor-content-4</div>
          <div :id="`content-5`" class="anchor-content-5">anchor-content-5</div>
        </div>
      </div>
    </code-wrap>
    <marked :text="AnchorProp"></marked>
    
  </div>
  <right-anchor :list="anchorList" isNoTranslate></right-anchor>

</template>

<script lang="ts" setup>
import { YhAnchor, YhAnchorItem } from 'yhht-plus'
import { ref ,reactive} from 'vue'
import { useRoute } from "vue-router";
import RightAnchor from "@/components/right-anchor/right-anchor.vue";
import {  curporCodeText,containerCodeText } from "./anchor"
import marked from "@/components/marked/marked.vue"
import AnchorProp from '@/docs/anchor/anchor-prop.md?raw'


const docsData=reactive({
})
const currentActive = ref('')
const route = useRoute()
if (route.hash && route.hash !== '') {
  currentActive.value = route.hash
}
const baseCodeText = `<yh-anchor container="body" :bounds="50" >
  <yh-anchor-item href="#基础锚点" title="基础锚点" />
  <yh-anchor-item href="#自定义游标锚点" title="自定义游标锚点" />
  <yh-anchor-item href="#注意" title="注意" />
  <yh-anchor-item href="#Anchor-Props" title="Anchor Props" />
</yh-anchor>`

const anchorList = ref([
  {
    href: '#基础锚点',
    title: '基础锚点'
  },
  {
    href: '#自定义游标锚点',
    title: '自定义游标锚点'
  },
  {
    href: '#指定容器锚点',
    title: '指定容器锚点'
  }, {
    href: '#注意',
    title: '注意'
  }, {
    href: '#Anchor-Props',
    title: 'Anchor Props'
  },
  {
    href: '#Anchor-Events',
    title: 'Anchor Events'
  },
  {
    href: '#AnchorItem-Props',
    title: 'AnchorItem Props'
  },

])


</script>
<style lang='scss' scoped>
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

.anchor-container-demo {
  display: flex;
  position: relative;
}

#anchor-container {
  flex-grow: 1;
  height: 200px;
  overflow: auto;

  >div {
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