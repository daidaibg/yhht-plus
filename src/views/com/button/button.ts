/*
 * @Author: daidai
 * @Date: 2022-03-04 16:46:05
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-05-06 15:29:28
 * @FilePath: \yhht-ui\src\views\com\button\button.js
 */

let textObj:object ={
    text:`<template>
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
</template>
`,
sharpSize:` <div class="row">
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
    <yh-button size="small" shape="circle">小</yh-button>
    <yh-button shape="circle">中</yh-button>
    <yh-button size="large" shape="circle">大</yh-button>
</div>`,
otlineDashed:`
<div class="row">
    <yh-button variant="outline">实线按钮</yh-button>
    <yh-button theme="primary" variant="outline">禁用主要</yh-button>
    <yh-button theme="danger" variant="outline">禁用危险</yh-button>
    <yh-button theme="warning" variant="outline">禁用警告</yh-button>
    <yh-button theme="success" variant="outline">禁用成功</yh-button>
</div>
<div class="row">
    <yh-button variant="outline" disabled>实线禁用</yh-button>
    <yh-button theme="primary" variant="outline" disabled>禁用主要</yh-button>
    <yh-button theme="danger" variant="outline" disabled>禁用危险</yh-button>
    <yh-button theme="warning" variant="outline" disabled>禁用警告</yh-button>
    <yh-button theme="success" variant="outline" disabled>禁用成功</yh-button>
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
    <yh-button theme="primary" variant="dashed" disabled>禁用主要</yh-button>
    <yh-button theme="danger" variant="dashed" disabled>禁用危险</yh-button>
    <yh-button theme="warning" variant="dashed" disabled>禁用警告</yh-button>
    <yh-button theme="success" variant="dashed" disabled>禁用成功</yh-button>
</div>`,
block:` <div class="block_wrap">
    <yh-button theme="primary" block>主要按钮</yh-button>
    <yh-button theme="success" variant="outline" block>禁用成功</yh-button>
    <yh-button theme="warning" variant="dashed" block>禁用警告</yh-button>
    <yh-button theme="danger" variant="text" block>禁用危险</yh-button>
    <yh-button theme="primary" block size="small" shape="round">主要小按钮</yh-button>
    <yh-button theme="primary" block loading shape="round">主要默认按钮</yh-button>
    <yh-button theme="primary" block size="large" loading shape="round">主要大按钮</yh-button>
</div>
<style lang='scss' scoped>
.block_wrap {
  display: flex;
  flex-wrap: wrap;
  row-gap: 16px;
  column-gap: 16px;
}
`
}
export default textObj