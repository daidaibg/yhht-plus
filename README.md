# vue3+vite+ts+Tailwind+自己项目中通常使用的ui



- 💪 Vue 3 Composition API![vue3](https://img.shields.io/badge/vue-3-brightgreen)
- 🔥 Written in TypeScript ![TS](https://img.shields.io/badge/TS-4-brightgreen)
- 🛠️从一组受限的原始实用程序构建复杂的组件tailwindcss![tailwindcss](https://img.shields.io/badge/tailwindcss-2-green)
- 💡 Instant Server Start![vite](https://img.shields.io/badge/vite-2-blue)

## 文档地址

文档地址： [http://www.eheretop.com:18080/yhht-plus](http://www.eheretop.com:18080/yhht-plus)

## 项目目录

```vue
    |-- public    静态目录                       
    |-- src       API页面
    |-- types     全局TS声明
    |-- yhht-plus yhht-plus目录
```



### src 目录结构

```vue
    |   |-- App.vue                      
    |   |-- main.ts   入口文件
    |   |-- api       接口目录
    |   |   |-- api.ts   接口封装api        
    |   |   |-- currency.ts   通用接口
    |   |   |-- index.ts      api接口暴露文件
    |   |-- assets     静态文件
    |   |   |-- tailwind.css   tailwind文件
    |   |   |-- css    css文件目录
    |   |   |   |-- code.scss       代码预览css
    |   |   |   |-- index.scss      css入口
    |   |   |   |-- variable.scss   全局css变量
    |   |   |   |-- element         element  css（做element的css重置修改等。。）
    |   |   |   |-- theme           主题
    |   |   |       |-- codehight  代码主题css
    |   |   |           |-- dark.scss   暗色
    |   |   |           |-- light.scss  浅色
    |   |   |-- img  图片目录
    |   |-- components  组件目录
    |   |-- config      配置目录
    |   |-- directives  自定义指令目录
    |   |-- enums       枚举目录
    |   |-- i18n        i18n目录
    |   |-- router      路由目录
    |   |   |-- index.ts  路由入口
    |   |-- store       pinia目录 
    |   |-- utils       JS工具目录 
    |   |-- views       页面目录
    |       |-- com     组件API目录
    |       |-- com-js  JS API目录
    |       |-- components-and-js   组件与js通用目录
```

### yhht-plus目录结构

```vue
    |-- directives  自定义指令
        |-- lib         静态文件
        |   |-- css     css
        |   |-- theme    皮肤
        |       |-- index.css  css入口
        |       |-- font       内置图标
        |       |-- modules     
        |           |-- _dark.css   深色变量
        |           |-- _light.css   浅色变量
        |-- packages  封装组件目录
        |   |-- common.ts  一些通用声明
        |   |-- index.ts   所有组件统一暴露
        |-- src
        |   |-- config.ts  配置文件
        |   |-- index.ts   入口文件
        |   |-- img        图片
        |   |-- util       JS工具(以后考虑删除此目录中js文件，只保留index.ts负责暴露所有js工具）
        |-- types tS声明
        |-- utils JS工具
```

