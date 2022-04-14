/*
 * @Author: daidai
 * @Date: 2021-07-12 09:26:26
 * @LastEditors: daidai
 * @LastEditTime: 2022-03-04 14:29:47
 * @FilePath: \yhht-ui\yhht-ui\src\index.js
 */

import { App } from 'vue'
import YhButton from '../packages/button'

const components = [
  YhButton
];
// 定义 install 方法， App 作为参数
const install = (app: App): void => {
  // 遍历注册所有组件
  components.map((component) => app.component(component.name, component))
}


export default {
  version: '1.0.1',
  install,
  YhButton
};

export {
  YhButton

}