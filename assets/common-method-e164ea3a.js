import{_ as r}from"./marked.vue_vue_type_script_setup_true_lang-0444de3d.js";import{d as n,h as o,u as t,f as e}from"./index-8e420cd2.js";import"./right-anchor-ea2c36dc.js";const l=`## on(绑定事件)\r
\r
同原生的\`addEventListener\`只是简单做了优化\r
\r
\`\`\`js\r
import { on } from "yhht-plus/lib/utils"\r
\r
const onScroll=(e)=>{\r
    \r
}\r
\r
on(document.querySelector("body"), "scroll", onScroll);\r
\`\`\`\r
\r
## off(移除事件)\r
\r
同原生的\`removeEventListener\`只是简单做了优化\r
\r
!!! warning \r
\r
移除的函数要与on绑定函数是同一个\r
\r
!!!\r
\r
\`\`\`js\r
import { off } from "yhht-plus/lib/utils"\r
\r
const onScroll=(e)=>{\r
    \r
}\r
off(document.querySelector("body"), "scroll", onScroll);\r
\`\`\`\r
\r
 ## getScroll\r
\r
\r
\r
\`\`\`js\r
/**\r
 * 获取滚动条目前置顶距离\r
 * @param {ScrollTarget} target\r
 * @param {boolean} isLeft true为获取scrollLeft, false为获取scrollTop\r
 * @returns {number}\r
 */\r
 getScroll(target: ScrollTarget, isLeft?: boolean): number\r
 \r
 \r
 //例子\r
import { getScroll } from "yhht-plus/lib/utils"\r
\r
const top = getScroll(document.querySelector("body"))\r
const left = getScroll(document.querySelector("body"),true)\r
\`\`\`\r
\r
 \r
\r
##  scrollTo\r
\r
让滚动条滚动到指定位置,返回\`Promise\`\r
\r
**ScrollTopOptions**配置\r
\r
- \`container\`    ----   dom元素对象\r
- \`duration\`      ----    时间\r
- \`container\`    ----   动画\r
\r
\r
\r
\`\`\`ts\r
interface ScrollTopOptions {\r
    container?: ScrollTarget;\r
    duration?: number;  \r
    easing?: EasingFunction;\r
}\r
\r
function scrollTo(target: number, opt: ScrollTopOptions): Promise<ScrollToResult>\r
\`\`\`\r
\r
例子\r
\r
\`\`\`js\r
import { scrollTo } from "yhht-plus/lib/utils"\r
\r
scrollTo(100, {\r
    container: document.querySelector("body"),\r
});\r
\`\`\`\r
\r
\r
\r
##  getScrollContainer\r
\r
\r
\r
 获取滚动容器,因为document不存在scroll等属性, 因此排除document\r
\r
\`\`\`js\r
/**\r
* 获取滚动容器\r
* 因为document不存在scroll等属性, 因此排除document\r
* window | HTMLElement\r
* @param {ScrollContainerElement} [container='body']  可传入方法\r
* @returns {ScrollContainer}\r
*/\r
getScrollContainer = (container: ScrollContainer = 'body'): ScrollContainerElement \r
\`\`\`\r
\r
!!! warning \r
\r
因为内部采用\`querySelector\` 获取元素对象，获取id时候i请带\`#\`\r
\r
!!!\r
\r
例子：\r
\r
\`\`\`js\r
import { getScrollContainer } from "yhht-plus/lib/utils"\r
\r
const dom1 = getScrollContainer(".test")\r
const dom2 = getScrollContainer("#test")\r
const dom3 = getScrollContainer("div")\r
\r
function dom4Fun(){\r
\r
}\r
const dom4 = getScrollContainer(dom4Fun)\r
\r
const dom4 = getScrollContainer(document.querySelector("body"))\r
\`\`\`\r
\r
`,d=n({__name:"common-method",setup(c){return(s,i)=>(e(),o(r,{text:t(l),isAnchor:""},null,8,["text"]))}});export{d as default};
