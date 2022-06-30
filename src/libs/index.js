import SvgIcon from './SvgIcon/index.vue'
import Popup from './Popup/index.vue'

export default function (app) {
  app.component('gw-icon', SvgIcon)
  app.component('gw-popup', Popup)
}
