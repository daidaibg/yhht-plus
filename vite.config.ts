import { defineConfig,loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path";
import externalGlobals from "rollup-plugin-external-globals";
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import dts from 'vite-plugin-dts'
const docsBuild = {
  outDir: 'dist',
  chunkSizeWarningLimit: 500,
  rollupOptions: {
    input: {
      main: resolve(__dirname, 'index.html'),
    },
    external: [
      'highlight.js'
    ],
    plugins: [
      externalGlobals({
        'highlight.js': 'hljs'
      }),
    ],
    output: {
    },

  }

}
const yhhtPlusBuild = {
  target: 'modules',
  outDir: "lib",  //打包文件目录
  minify: false,  //压缩
  cssCodeSplit: false,  //css分离
  // staticDirectory: './packages/asste',
  rollupOptions: {  // rollup配置
    external: ['vue',/lodash/,"raf","performance-now"],    //忽略打包vue文件
    input: { index: './packages/index.ts', "utils/index": "./packages/utils/index.ts" },
    output: [
      {
        format: 'es',
        //不用打包成.es.js,这里我们想把它打包成.js
        entryFileNames: '[name].js',
        //让打包目录和我们目录对应
        preserveModules: true,
        //配置打包根目录
        dir: 'lib',
        preserveModulesRoot: resolve(__dirname, './lib'),
        exports: 'named',
        globals: {
          vue: 'Vue',
          "lodash":"lodash",
          "raf":"raf",
          "performance-now":"performanceNow"

        },
      },
      {
        format: 'cjs',
        entryFileNames: '[name].js',
        preserveModules: true,
        dir: 'lib/cjs',
        preserveModulesRoot: resolve(__dirname, './lib'),
        exports: 'named',
        globals: {
          vue: 'Vue',
          "lodash":"lodash",
          "raf":"raf",
          "performance-now":"performanceNow"


        }
      }
    ],
    plugins: [
     
    ],

  },
  lib: {
    // entry: resolve(__dirname, './packages/index.ts'),
    entry: './packages/index.ts',
    // formats: ['es', 'cjs'],
  }
}


// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  console.log("mode", mode);
  let build: any = mode === "docs" ? docsBuild : yhhtPlusBuild
  const dtsFlag = mode !== "docs"
  const env = loadEnv(mode, process.cwd()); 
  return {
    plugins: [vue(),
    dtsFlag && dts({
      outDir: 'lib',
      tsconfigPath: './tsconfigBuild.json',
      // beforeWriteFile: (filePath: string, content: string) => {
      //   const regex = /lib\\utils\\index\.d\.ts/;
      //   if (regex.test(filePath)) {
      //     const newPath = filePath.replace(/\\index\.d\.ts$/, '.d.ts')
      //     // console.log("filePath", filePath, regex.test(filePath),newPath);
      //     return {filePath:newPath,content:content}
      //   }
      //   return {}
      // }
    }),
    dtsFlag && dts({
      outDir: 'lib/cjs',
      tsconfigPath: './tsconfigBuild.json'
    })
    ],
    publicDir: "public",
    // base: '/yhht-plus/',
    base: env.VITE_BASE_URL,
    build: build,
    // base : './',
    server: {
      host: '0.0.0.0',
      port: 8006,
      open: false,
      strictPort: false,
      proxy: { // 代理 
      }
    },
    resolve: {
      alias: {
        "@": resolve(__dirname, "./docs"),
      },
    },
    // css: {
    //   // css预处理器
    //   preprocessorOptions: {
    //     scss: {
    //       // charset: false,
    //       // additionalData: '@import "./src/assets/css/variable.scss";',
    //       additionalData: `@use "./src/assets/css/element/index.scss" as *;`,
    //     },
    //   },
    // },
  }

})
