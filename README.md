## 此分支为yhht-plus的文档项目

书写使用文档，在此分支，一直想用读取md方式书写文档，但是不太友好，因为还要有例子之类。如有好的方法可以提交

## 文档地址

文档地址： 暂无

## 项目目录

```vue
    |-- public    静态目录                       
    |-- src       API页面
    |-- types     全局TS声明
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

