
const comMenu = [
    {
        title: "menu.DevelopmentGuide",
        content: "开发指南",
        sub: [
            {
                name: "menu.install",
                url: "/components/installation",
            },
            {
                name: "menu.cssVariable",
                url: "/components/cssVariable",
            },
        ],
    },
    {
        title: "menu.components",
        content: "组件",
        tip: "menu.basic",
        sub: [
            {
                name: "menu.icon",
                url: "/components/icon",
            },
            {
                name: "menu.button",
                url: "/components/buttons",
            }
        ],
    },
    {
        tip: "menu.navigation",
        sub: [
            {
                name: "menu.anchor",
                url: "/components/anchor",
            },
        ],
    },
    {
        tip: "menu.others",
        sub: [
            {
                name: "menu.contextMenu",
                url: "/components/contextMenu",
            },
        ],
    },

]
const jsMenu = [
    {
        title: "menu.toolLibrary",
        content: "工具库",
        isTranslate: true,
        // tip: "Basic",
        sub: [
            {
                name: "menu.commonMethod",
                url: "/common-method",
            },

        ],
    },
    // {
    //     title: "directives",
    //     content: "自定义指令",
    //     isTranslate: true,
    //     // tip: "Basic",
    //     sub: [
    //         // {
    //         //     name: "---",
    //         //     url: "---",
    //         // },
    //     ],
    // },
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