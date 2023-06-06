## Anchor 锚点

页面内的超级链接，用于跳转到页面内指定位置

### 基础锚点 

``` yhht-plus-demo

/src/docs/anchor/anchor-basic.vue

```

### 自定义游标锚点

targetOffset 锚点滚动偏移量 

``` yhht-plus-demo

/src/docs/anchor/anthor-custom-cursor.vue

```

### 指定容器锚点

指定响应滚动的容器进行锚点定位


!!! warning 

如果使用了指定容器配置`container`,如果您的元素充满整个html不用考虑以下，根据业务需求进行调整配置。使用`no-link`配置可以不把锚点拼接到url后边，拼接到路径后边会使指定容器也置顶。

!!!

``` yhht-plus-demo

/src/docs/anchor/anchor-container.vue

```

### 注意

!!! warning 

锚点链接, 如果是 hash路由 请按照以下方式,传入`hashRouter`参数

!!!

```vue
<script setup lang="ts"> 
    import { useRoute } from "vue-router";
    const route = useRoute();
</script> 

<template> 
    <yh-anchor-item 
        href="#default" 
        title='基础锚点' 	
        :hashRouter="route.path"
    /> 
</template>
```
### Anchor Props

| 参数          | 说明                                                         | 类型              | 默认值               | 可选值                     |
| ------------- | ------------------------------------------------------------ | ----------------- | -------------------- | -------------------------- |
| bounds        | 锚点区域边界                                                 | Number            | 5                    | -                          |
| container     | 指定滚动的容器。数据类型为 String 时，会被当作选择器处理，进行节点查询。示例：'body' 或 () => document.body。TS 类型：ScrollContainer | String 、 Function | () => (() => window) | -                          |
| currentActive | 当前锚点，首次进入页面的锚点需要传入                         | String            |                      | -                          |
| size          | 组件尺寸                                                     | String            | medium               | 可选项：small、medium、large |
| targetOffset  | 锚点滚动偏移量                                               | Number            | 0                    | -                          |
| cursor        | 用于自定义选中项左侧游标。                                   | Slot              | -                    | -                          |
| noLink        | 不在当前路径张增加参数                                       | Boolean           | false                | -                          |
| hashRouter    | 如果是hash路由 词参数必填，上面注意情况                      | String 、 Slot     |                      | -                          |

### Anchor Events

| 事件名称 | 参数                                                   | 说明             | 备注                                     |
| -------- | ------------------------------------------------------ | ---------------- | ---------------------------------------- |
| change   | (currentLink: string, prevLink: string)                | 锚点区域边界     | currentLink 当前连接，prevLink下一个链接 |
| click    | (link: { href: string; title: string; e: MouseEvent }) | 锚点被点击时触发 |                                          |

### AnchorItem Props

| 参数   | 说明                                              | 类型          | 默认值 | 可选值                    |
| ------ | ------------------------------------------------- | ------------- | ------ | ------------------------- |
| href   | 必需。锚点链接, 如果是 hash 模式需要加上当前 path | String        | -      | -                         |
| target | 锚点文本。可选项：_self、_blank、_parent、_top       | String        | _self  | `_self`、`_blank`、`_parent`、`_top` |
| title  | 锚点文本                                          | String 、 Slot |        | -                         |