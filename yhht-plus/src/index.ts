/*
 * @Author: daidai
 * @Date: 2021-07-12 09:26:26
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-05-18 16:28:16
 * @FilePath: \yhht-ui\yhht-ui\src\index.js
 */

import { App } from 'vue'
import YhButton from '../packages/button'
import YhAnchor from '../packages/anchor'
import YhAnchorItem from '../packages/anchor-item'
import YhAffix from '../packages/affix'




const components = [
  YhButton,
  YhAnchor,
  YhAnchorItem,
  YhAffix
];
// 定义 install 方法， App 作为参数
const install = (app: App): void => {
  // 遍历注册所有组件
  components.map((component) => app.component(component.name, component))
}


export default {
  version: '1.0.1',
  install,
  YhButton,
  YhAnchor,
  YhAnchorItem,
  YhAffix
};

export {
  YhButton,
  YhAnchor,
  YhAnchorItem,
  YhAffix
}