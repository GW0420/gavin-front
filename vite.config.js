import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path, { join } from 'path'

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
    host: '0.0.0.0',
    proxy: {
      // 代理所有 /api 的请求，该求情将被代理到 target 中
      '/api': {
        // 代理请求之后的请求地址
        target: 'https://api.imooc-front.lgdsunday.club/',
        // 跨域
        changeOrigin: true
      }
    }
  },
  plugins: [vue()]
})
