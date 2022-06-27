import { createRouter, createWebHashHistory } from 'vue-router'
import pcTerminalRoutes from './modules/pc-routes'
import mobileTerminalRoutes from './modules/mobile-routes'
import { isMobileTerminal } from '../utils/flexible'

// 创建 vue-router实例
const router = createRouter({
  history: createWebHashHistory(),
  routes: isMobileTerminal.value ? mobileTerminalRoutes : pcTerminalRoutes
})

export default router
