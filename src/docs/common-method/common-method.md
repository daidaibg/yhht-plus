## on(绑定事件)

同原生的`addEventListener`只是简单做了优化

```js
import { on } from "yhht-plus/lib/utils"

const onScroll=(e)=>{
    
}

on(document.querySelector("body"), "scroll", onScroll);
```

## off(移除事件)

同原生的`removeEventListener`只是简单做了优化

!!! warning 

移除的函数要与on绑定函数是同一个

!!!

```js
import { off } from "yhht-plus/lib/utils"

const onScroll=(e)=>{
    
}
off(document.querySelector("body"), "scroll", onScroll);
```

 ## getScroll



```js
/**
 * 获取滚动条目前置顶距离
 * @param {ScrollTarget} target
 * @param {boolean} isLeft true为获取scrollLeft, false为获取scrollTop
 * @returns {number}
 */
 getScroll(target: ScrollTarget, isLeft?: boolean): number
 
 
 //例子
import { getScroll } from "yhht-plus/lib/utils"

const top = getScroll(document.querySelector("body"))
const left = getScroll(document.querySelector("body"),true)
```

 

##  scrollTo

让滚动条滚动到指定位置,返回`Promise`

**ScrollTopOptions**配置

- `container`    ----   dom元素对象
- `duration`      ----    时间
- `container`    ----   动画



```ts
interface ScrollTopOptions {
    container?: ScrollTarget;
    duration?: number;  
    easing?: EasingFunction;
}

function scrollTo(target: number, opt: ScrollTopOptions): Promise<ScrollToResult>
```

例子

```js
import { scrollTo } from "yhht-plus/lib/utils"

scrollTo(100, {
    container: document.querySelector("body"),
});
```



##  getScrollContainer



 获取滚动容器,因为document不存在scroll等属性, 因此排除document

```js
/**
* 获取滚动容器
* 因为document不存在scroll等属性, 因此排除document
* window | HTMLElement
* @param {ScrollContainerElement} [container='body']  可传入方法
* @returns {ScrollContainer}
*/
getScrollContainer = (container: ScrollContainer = 'body'): ScrollContainerElement 
```

!!! warning 

因为内部采用`querySelector` 获取元素对象，获取id时候i请带`#`

!!!

例子：

```js
import { getScrollContainer } from "yhht-plus/lib/utils"

const dom1 = getScrollContainer(".test")
const dom2 = getScrollContainer("#test")
const dom3 = getScrollContainer("div")

function dom4Fun(){

}
const dom4 = getScrollContainer(dom4Fun)

const dom4 = getScrollContainer(document.querySelector("body"))
```

