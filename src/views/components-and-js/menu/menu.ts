
import i18n from '@/i18n/index'
const t= i18n.global.t
const comMenu = [
    {
        title: "DevelopmentGuide",
        content: "开发指南",
        isTranslate: true,
        sub: [
            {
                name: "安装",
                default: () => t('menu.install'),
                isTranslate: true,
                url: "/components/installation",
            },

        ],
    },
    {
        title: "components",
        content: "组件",
        isTranslate: true,
        tip: "Basic",
        sub: [
            {
                name: "Icon图标",
                url: "/components/icon",
            },
            {
                name: "Button按钮",
                url: "/components/buttons",
            }
        ],
    },
    {
        tip: "Navigation",
        sub: [
            {
                name: "Anchor锚点",
                url: "/components/anchor",
            },
        ],
    },

]
const jsMenu = [
    {
        title: "toolLibrary",
        content: "工具库",
        isTranslate: true,
        // tip: "Basic",
        sub: [
            {
                name: "复制Copy",
                url: "/js/copy",
            },

        ],
    },
    {
        title: "directives",
        content: "自定义指令",
        isTranslate: true,
        // tip: "Basic",
        sub: [
            // {
            //     name: "---",
            //     url: "---",
            // },
        ],
    },
]
let comMenuPathList:any = []
   
for (let index = 0; index < comMenu.length; index++) {
    const element = comMenu[index];
    element.sub.forEach(item=>{
        comMenuPathList.push(item)
    })
}

let jsMenuList:any = []
   
for (let index = 0; index < jsMenu.length; index++) {
    const element = jsMenu[index];
    element.sub.forEach(item=>{
        jsMenuList.push(item)
    })
}

export {jsMenu,comMenu,comMenuPathList,jsMenuList}