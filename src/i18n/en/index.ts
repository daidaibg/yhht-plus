import en from '../language/en.json'
import button from './button'
import install from "./install"
import icon from "./icon"

const global = {
  doc: 'Document',
  help: 'Help',
  contact: 'Contact Us',
  logout: 'Logout',

}

export default {
  global,
  ...en,
  button,
  install,
  icon
}
