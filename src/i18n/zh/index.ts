import zh from '../language/zh.json'
import button from './button'
import install from "./install"
import icon from "./icon"
const global = {
  // 头部
  doc: '说明文档',
  help: '帮助中心',
  contact: '联系我们',
  logout: '退出登录'

}

export default {
  global,
  ...zh,
  button,
  install,
  icon
}
