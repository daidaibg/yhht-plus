
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
</style>`
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
</style>`
