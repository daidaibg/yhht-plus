import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path";
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
  AutoImport({
    resolvers: [ElementPlusResolver()],
  }),
  Components({
    resolvers: [ElementPlusResolver()],
  }),
  ],
  publicDir: "public",
  base: './',
  // base : './',
  server: {
    host: '0.0.0.0',
    port: 8006,
    open: false,
    strictPort: false,
    proxy: { // 代理 
      // 字符串简写写法
      // '/foo': 'http://localhost:4567/foo',
      // 选项写法
      // '/api': {
      //   target: 'http://jsonplaceholder.typicode.com',
      //   changeOrigin: true,
      //   rewrite: (path) => path.replace(/^\/api/, '')
      // },
      // 正则表达式写法
      // '^/fallback/.*': {
      //   target: 'http://jsonplaceholder.typicode.com',
      //   changeOrigin: true,
      //   rewrite: (path) => path.replace(/^\/fallback/, '')
      // }

    }
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      "@components": resolve(__dirname, "./src/components"),
      'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js'
    },
  },
  css: {
    // css预处理器
    preprocessorOptions: {
      scss: {
        // charset: false,
        // additionalData: '@import "./src/assets/css/variable.scss";',
        additionalData: `@use "./src/assets/css/variable.scss" as *;`,
      },
    },
  },
  build: {
    outDir: 'dist',
    chunkSizeWarningLimit: 800,
    rollupOptions: {

      output: {

      }
    }

  },


})
