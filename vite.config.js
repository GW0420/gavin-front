import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path, { join } from 'path'

const alias = {
  '@': 'src'
}

export default defineConfig({
  // 软连接
  resolve: {
    alias: {
      '@': join(__dirname, '/src')
    }
  },
  // 端口代理地址
  server: {
    port: '8989',
    host: '0.0.0.0'
  },
  plugins: [vue()]
})
