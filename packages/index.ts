import { App } from 'vue'
import YhButton from './components/button'
import YhAnchor from './components/anchor'
import YhAnchorItem from './components/anchor-item'
import YhAffix from './components/affix'
import  "./assets/theme/index.css"

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
};

export {
  YhButton,
  YhAnchor,
  YhAnchorItem,
  YhAffix
}

