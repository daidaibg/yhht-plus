// vite.config.ts
import { defineConfig, loadEnv } from "file:///E:/allPro/daidai/npm-package/yhht-plus/node_modules/vite/dist/node/index.js";
import vue from "file:///E:/allPro/daidai/npm-package/yhht-plus/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import { resolve } from "path";
import externalGlobals from "file:///E:/allPro/daidai/npm-package/yhht-plus/node_modules/rollup-plugin-external-globals/index.js";
import dts from "file:///E:/allPro/daidai/npm-package/yhht-plus/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_dirname = "E:\\allPro\\daidai\\npm-package\\yhht-plus";
var docsBuild = {
  outDir: "dist",
  chunkSizeWarningLimit: 500,
  rollupOptions: {
    input: {
      main: resolve(__vite_injected_original_dirname, "index.html")
    },
    external: [
      "highlight.js"
    ],
    plugins: [
      externalGlobals({
        "highlight.js": "hljs"
      })
    ],
    output: {}
  }
};
var yhhtPlusBuild = {
  target: "modules",
  outDir: "lib",
  //打包文件目录
  minify: false,
  //压缩
  cssCodeSplit: false,
  //css分离
  // staticDirectory: './packages/asste',
  rollupOptions: {
    // rollup配置
    external: ["vue", /lodash/, "raf", "performance-now"],
    //忽略打包vue文件
    input: { index: "./packages/index.ts", "utils/index": "./packages/utils/index.ts" },
    output: [
      {
        format: "es",
        //不用打包成.es.js,这里我们想把它打包成.js
        entryFileNames: "[name].js",
        //让打包目录和我们目录对应
        preserveModules: true,
        //配置打包根目录
        dir: "lib",
        preserveModulesRoot: resolve(__vite_injected_original_dirname, "./lib"),
        exports: "named",
        globals: {
          vue: "Vue",
          "lodash": "lodash",
          "raf": "raf",
          "performance-now": "performanceNow"
        }
      },
      {
        format: "cjs",
        entryFileNames: "[name].js",
        preserveModules: true,
        dir: "lib/cjs",
        preserveModulesRoot: resolve(__vite_injected_original_dirname, "./lib"),
        exports: "named",
        globals: {
          vue: "Vue",
          "lodash": "lodash",
          "raf": "raf",
          "performance-now": "performanceNow"
        }
      }
    ],
    plugins: []
  },
  lib: {
    // entry: resolve(__dirname, './packages/index.ts'),
    entry: "./packages/index.ts"
    // formats: ['es', 'cjs'],
  }
};
var vite_config_default = defineConfig(({ command, mode }) => {
  console.log("mode", mode);
  let build = mode === "docs" ? docsBuild : yhhtPlusBuild;
  const dtsFlag = mode !== "docs";
  const env = loadEnv(mode, process.cwd());
  return {
    plugins: [
      vue(),
      dtsFlag && dts({
        outDir: "lib",
        tsconfigPath: "./tsconfigBuild.json"
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
        outDir: "lib/cjs",
        tsconfigPath: "./tsconfigBuild.json"
      })
    ],
    publicDir: "public",
    // base: '/yhht-plus/',
    base: env.VITE_BASE_URL,
    build,
    // base : './',
    server: {
      host: "0.0.0.0",
      port: 8006,
      open: false,
      strictPort: false,
      proxy: {
        // 代理 
      }
    },
    resolve: {
      alias: {
        "@": resolve(__vite_injected_original_dirname, "./docs")
      }
    }
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
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxhbGxQcm9cXFxcZGFpZGFpXFxcXG5wbS1wYWNrYWdlXFxcXHloaHQtcGx1c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRTpcXFxcYWxsUHJvXFxcXGRhaWRhaVxcXFxucG0tcGFja2FnZVxcXFx5aGh0LXBsdXNcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0U6L2FsbFByby9kYWlkYWkvbnBtLXBhY2thZ2UveWhodC1wbHVzL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnLGxvYWRFbnYgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSBcInBhdGhcIjtcbmltcG9ydCBleHRlcm5hbEdsb2JhbHMgZnJvbSBcInJvbGx1cC1wbHVnaW4tZXh0ZXJuYWwtZ2xvYmFsc1wiO1xuaW1wb3J0IHsgbm9kZVJlc29sdmUgfSBmcm9tICdAcm9sbHVwL3BsdWdpbi1ub2RlLXJlc29sdmUnO1xuaW1wb3J0IGNvbW1vbmpzIGZyb20gJ0Byb2xsdXAvcGx1Z2luLWNvbW1vbmpzJztcbmltcG9ydCBkdHMgZnJvbSAndml0ZS1wbHVnaW4tZHRzJ1xuY29uc3QgZG9jc0J1aWxkID0ge1xuICBvdXREaXI6ICdkaXN0JyxcbiAgY2h1bmtTaXplV2FybmluZ0xpbWl0OiA1MDAsXG4gIHJvbGx1cE9wdGlvbnM6IHtcbiAgICBpbnB1dDoge1xuICAgICAgbWFpbjogcmVzb2x2ZShfX2Rpcm5hbWUsICdpbmRleC5odG1sJyksXG4gICAgfSxcbiAgICBleHRlcm5hbDogW1xuICAgICAgJ2hpZ2hsaWdodC5qcydcbiAgICBdLFxuICAgIHBsdWdpbnM6IFtcbiAgICAgIGV4dGVybmFsR2xvYmFscyh7XG4gICAgICAgICdoaWdobGlnaHQuanMnOiAnaGxqcydcbiAgICAgIH0pLFxuICAgIF0sXG4gICAgb3V0cHV0OiB7XG4gICAgfSxcblxuICB9XG5cbn1cbmNvbnN0IHloaHRQbHVzQnVpbGQgPSB7XG4gIHRhcmdldDogJ21vZHVsZXMnLFxuICBvdXREaXI6IFwibGliXCIsICAvL1x1NjI1M1x1NTMwNVx1NjU4N1x1NEVGNlx1NzZFRVx1NUY1NVxuICBtaW5pZnk6IGZhbHNlLCAgLy9cdTUzOEJcdTdGMjlcbiAgY3NzQ29kZVNwbGl0OiBmYWxzZSwgIC8vY3NzXHU1MjA2XHU3OUJCXG4gIC8vIHN0YXRpY0RpcmVjdG9yeTogJy4vcGFja2FnZXMvYXNzdGUnLFxuICByb2xsdXBPcHRpb25zOiB7ICAvLyByb2xsdXBcdTkxNERcdTdGNkVcbiAgICBleHRlcm5hbDogWyd2dWUnLC9sb2Rhc2gvLFwicmFmXCIsXCJwZXJmb3JtYW5jZS1ub3dcIl0sICAgIC8vXHU1RkZEXHU3NTY1XHU2MjUzXHU1MzA1dnVlXHU2NTg3XHU0RUY2XG4gICAgaW5wdXQ6IHsgaW5kZXg6ICcuL3BhY2thZ2VzL2luZGV4LnRzJywgXCJ1dGlscy9pbmRleFwiOiBcIi4vcGFja2FnZXMvdXRpbHMvaW5kZXgudHNcIiB9LFxuICAgIG91dHB1dDogW1xuICAgICAge1xuICAgICAgICBmb3JtYXQ6ICdlcycsXG4gICAgICAgIC8vXHU0RTBEXHU3NTI4XHU2MjUzXHU1MzA1XHU2MjEwLmVzLmpzLFx1OEZEOVx1OTFDQ1x1NjIxMVx1NEVFQ1x1NjBGM1x1NjI4QVx1NUI4M1x1NjI1M1x1NTMwNVx1NjIxMC5qc1xuICAgICAgICBlbnRyeUZpbGVOYW1lczogJ1tuYW1lXS5qcycsXG4gICAgICAgIC8vXHU4QkE5XHU2MjUzXHU1MzA1XHU3NkVFXHU1RjU1XHU1NDhDXHU2MjExXHU0RUVDXHU3NkVFXHU1RjU1XHU1QkY5XHU1RTk0XG4gICAgICAgIHByZXNlcnZlTW9kdWxlczogdHJ1ZSxcbiAgICAgICAgLy9cdTkxNERcdTdGNkVcdTYyNTNcdTUzMDVcdTY4MzlcdTc2RUVcdTVGNTVcbiAgICAgICAgZGlyOiAnbGliJyxcbiAgICAgICAgcHJlc2VydmVNb2R1bGVzUm9vdDogcmVzb2x2ZShfX2Rpcm5hbWUsICcuL2xpYicpLFxuICAgICAgICBleHBvcnRzOiAnbmFtZWQnLFxuICAgICAgICBnbG9iYWxzOiB7XG4gICAgICAgICAgdnVlOiAnVnVlJyxcbiAgICAgICAgICBcImxvZGFzaFwiOlwibG9kYXNoXCIsXG4gICAgICAgICAgXCJyYWZcIjpcInJhZlwiLFxuICAgICAgICAgIFwicGVyZm9ybWFuY2Utbm93XCI6XCJwZXJmb3JtYW5jZU5vd1wiXG5cbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGZvcm1hdDogJ2NqcycsXG4gICAgICAgIGVudHJ5RmlsZU5hbWVzOiAnW25hbWVdLmpzJyxcbiAgICAgICAgcHJlc2VydmVNb2R1bGVzOiB0cnVlLFxuICAgICAgICBkaXI6ICdsaWIvY2pzJyxcbiAgICAgICAgcHJlc2VydmVNb2R1bGVzUm9vdDogcmVzb2x2ZShfX2Rpcm5hbWUsICcuL2xpYicpLFxuICAgICAgICBleHBvcnRzOiAnbmFtZWQnLFxuICAgICAgICBnbG9iYWxzOiB7XG4gICAgICAgICAgdnVlOiAnVnVlJyxcbiAgICAgICAgICBcImxvZGFzaFwiOlwibG9kYXNoXCIsXG4gICAgICAgICAgXCJyYWZcIjpcInJhZlwiLFxuICAgICAgICAgIFwicGVyZm9ybWFuY2Utbm93XCI6XCJwZXJmb3JtYW5jZU5vd1wiXG5cblxuICAgICAgICB9XG4gICAgICB9XG4gICAgXSxcbiAgICBwbHVnaW5zOiBbXG4gICAgIFxuICAgIF0sXG5cbiAgfSxcbiAgbGliOiB7XG4gICAgLy8gZW50cnk6IHJlc29sdmUoX19kaXJuYW1lLCAnLi9wYWNrYWdlcy9pbmRleC50cycpLFxuICAgIGVudHJ5OiAnLi9wYWNrYWdlcy9pbmRleC50cycsXG4gICAgLy8gZm9ybWF0czogWydlcycsICdjanMnXSxcbiAgfVxufVxuXG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKHsgY29tbWFuZCwgbW9kZSB9KSA9PiB7XG4gIGNvbnNvbGUubG9nKFwibW9kZVwiLCBtb2RlKTtcbiAgbGV0IGJ1aWxkOiBhbnkgPSBtb2RlID09PSBcImRvY3NcIiA/IGRvY3NCdWlsZCA6IHloaHRQbHVzQnVpbGRcbiAgY29uc3QgZHRzRmxhZyA9IG1vZGUgIT09IFwiZG9jc1wiXG4gIGNvbnN0IGVudiA9IGxvYWRFbnYobW9kZSwgcHJvY2Vzcy5jd2QoKSk7IFxuICByZXR1cm4ge1xuICAgIHBsdWdpbnM6IFt2dWUoKSxcbiAgICBkdHNGbGFnICYmIGR0cyh7XG4gICAgICBvdXREaXI6ICdsaWInLFxuICAgICAgdHNjb25maWdQYXRoOiAnLi90c2NvbmZpZ0J1aWxkLmpzb24nLFxuICAgICAgLy8gYmVmb3JlV3JpdGVGaWxlOiAoZmlsZVBhdGg6IHN0cmluZywgY29udGVudDogc3RyaW5nKSA9PiB7XG4gICAgICAvLyAgIGNvbnN0IHJlZ2V4ID0gL2xpYlxcXFx1dGlsc1xcXFxpbmRleFxcLmRcXC50cy87XG4gICAgICAvLyAgIGlmIChyZWdleC50ZXN0KGZpbGVQYXRoKSkge1xuICAgICAgLy8gICAgIGNvbnN0IG5ld1BhdGggPSBmaWxlUGF0aC5yZXBsYWNlKC9cXFxcaW5kZXhcXC5kXFwudHMkLywgJy5kLnRzJylcbiAgICAgIC8vICAgICAvLyBjb25zb2xlLmxvZyhcImZpbGVQYXRoXCIsIGZpbGVQYXRoLCByZWdleC50ZXN0KGZpbGVQYXRoKSxuZXdQYXRoKTtcbiAgICAgIC8vICAgICByZXR1cm4ge2ZpbGVQYXRoOm5ld1BhdGgsY29udGVudDpjb250ZW50fVxuICAgICAgLy8gICB9XG4gICAgICAvLyAgIHJldHVybiB7fVxuICAgICAgLy8gfVxuICAgIH0pLFxuICAgIGR0c0ZsYWcgJiYgZHRzKHtcbiAgICAgIG91dERpcjogJ2xpYi9janMnLFxuICAgICAgdHNjb25maWdQYXRoOiAnLi90c2NvbmZpZ0J1aWxkLmpzb24nXG4gICAgfSlcbiAgICBdLFxuICAgIHB1YmxpY0RpcjogXCJwdWJsaWNcIixcbiAgICAvLyBiYXNlOiAnL3loaHQtcGx1cy8nLFxuICAgIGJhc2U6IGVudi5WSVRFX0JBU0VfVVJMLFxuICAgIGJ1aWxkOiBidWlsZCxcbiAgICAvLyBiYXNlIDogJy4vJyxcbiAgICBzZXJ2ZXI6IHtcbiAgICAgIGhvc3Q6ICcwLjAuMC4wJyxcbiAgICAgIHBvcnQ6IDgwMDYsXG4gICAgICBvcGVuOiBmYWxzZSxcbiAgICAgIHN0cmljdFBvcnQ6IGZhbHNlLFxuICAgICAgcHJveHk6IHsgLy8gXHU0RUUzXHU3NDA2IFxuICAgICAgfVxuICAgIH0sXG4gICAgcmVzb2x2ZToge1xuICAgICAgYWxpYXM6IHtcbiAgICAgICAgXCJAXCI6IHJlc29sdmUoX19kaXJuYW1lLCBcIi4vZG9jc1wiKSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICAvLyBjc3M6IHtcbiAgICAvLyAgIC8vIGNzc1x1OTg4NFx1NTkwNFx1NzQwNlx1NTY2OFxuICAgIC8vICAgcHJlcHJvY2Vzc29yT3B0aW9uczoge1xuICAgIC8vICAgICBzY3NzOiB7XG4gICAgLy8gICAgICAgLy8gY2hhcnNldDogZmFsc2UsXG4gICAgLy8gICAgICAgLy8gYWRkaXRpb25hbERhdGE6ICdAaW1wb3J0IFwiLi9zcmMvYXNzZXRzL2Nzcy92YXJpYWJsZS5zY3NzXCI7JyxcbiAgICAvLyAgICAgICBhZGRpdGlvbmFsRGF0YTogYEB1c2UgXCIuL3NyYy9hc3NldHMvY3NzL2VsZW1lbnQvaW5kZXguc2Nzc1wiIGFzICo7YCxcbiAgICAvLyAgICAgfSxcbiAgICAvLyAgIH0sXG4gICAgLy8gfSxcbiAgfVxuXG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE4UyxTQUFTLGNBQWEsZUFBZTtBQUNuVixPQUFPLFNB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
