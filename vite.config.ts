import { resolve } from 'node:path'
import uni from '@dcloudio/vite-plugin-uni'
import AutoImportTypes from 'auto-import-types'
import PiniaAutoRefs from 'pinia-auto-refs'
import Unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'

import env from './src/config/env'
import { LOCAL_PORT } from './src/config/app'
require('./src/utils/modifyManifest.js')

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  plugins: [
    AutoImportTypes(),
    PiniaAutoRefs(),
    AutoImport({
      dts: 'src/auto-imports.d.ts',
      imports: [
        'vue',
        'uni-app',
        'pinia',
        {
          '@/helper/pinia-auto-refs': ['useStore']
        }
      ],
      exclude: ['createApp'],
      eslintrc: {
        enabled: true
      }
    }),
    Components({
      extensions: ['vue'],
      dts: 'src/components.d.ts'
    }),
    uni(),
    Unocss()
  ],
  server: {
    port: LOCAL_PORT,
    open: true, // 本地运行时 ,自动在浏览器中打开应用程序
    proxy: {
      // 本地通过代理实现跨域，生产环境使用 nginx 转发
      '^/api': {
        target: env.apiBaseUrl, // 后端服务实际地址
        changeOrigin: true, // 开启代理
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
