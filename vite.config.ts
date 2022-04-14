import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path";
import externalGlobals from "rollup-plugin-external-globals";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
  ],
  publicDir: "public",
  base : './',
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
    },
  },
  // css: {
  //   // css预处理器
  //   preprocessorOptions: {
  //     scss: {
  //       charset: false,
  //       additionalData: '@import "./src/assets/css/variable.scss";',
  //     },
  //   },
  // },
  build: {
    outDir: 'dist',
    chunkSizeWarningLimit:500,
    rollupOptions: {
      external: [
        'highlight.js'
      ],
      plugins:[
        externalGlobals({
          'highlight.js': 'hljs'
        }),
      ],
      output: {
        // globals: {
        //   'highlight.js': 'hljs',  //暂不支持 使用上边plugins.externalGlobals方式
        // }
        // manualChunks(id) {
        //   if (id.includes('node_modules')) {
        //     const arr = id.toString().split('node_modules/')[1].split('/')
        //     switch(arr[0]) {
        //       case 'highlight.js':
        //         return '_' + arr[0]
        //         break
        //       default :
        //         return '__vendor'
        //         break
        //     }
        //     return id.toString().split('node_modules/')[1].split('/')[0].toString();
        //   }
        // }
      }
    }
    // lib: {
    //   entry: 'packages/index.js',
    //   formats: ['es'],
    //   fileName: (format) => `index.${format}.js`
    // },
  },


})
