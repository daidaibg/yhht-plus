import { App, DirectiveBinding, createVNode, render, ComponentPublicInstance, ObjectDirective } from "vue";
import YhContextMenu from "./src/index.vue";
import type { CustomMouseMenuOptions, TouchListenFn, PreventCheckFn, ContextMenuListenFn } from "./src/types";


YhContextMenu.install = (app: App): void => {
  app.component(YhContextMenu.name as string, YhContextMenu);
};

function createClassDom(tag: string, className: string, innerText?: string) {
  let el = document.createElement(tag);
  el.setAttribute("class", className);
  if (innerText) el.innerText = innerText;
  return el;
}

// 指令封装
let contextMenuEvent: ContextMenuListenFn;
let MouseMenuCtx: ComponentPublicInstance<typeof YhContextMenu>;

function CustomMouseMenu(options: CustomMouseMenuOptions) {
  const className = "__mouse__menu__container";
  let container: HTMLElement;
  if (document.querySelector(`.${className}`)) {
    container = document.querySelector(`.${className}`) as HTMLElement;
  } else {
    container = createClassDom("div", className);
  }
  const vm = createVNode(YhContextMenu, options);
  render(vm, container);
  document.body.appendChild(container);
  return vm.component?.proxy as ComponentPublicInstance<typeof YhContextMenu>;
}
const mounted = (el: HTMLElement, binding: DirectiveBinding) => {
  const { value } = binding;
  if (value.menuList.length > 0) {
    contextMenuEvent = (e: MouseEvent) => {
      if (typeof value.disabled === "function" && value.disabled(value.params)) return;
      e.preventDefault();
      MouseMenuCtx = CustomMouseMenu({
        el,
        ...value,
      });
      const { x, y } = e;
      MouseMenuCtx.show(x, y);
    };
    el.removeEventListener("contextmenu", contextMenuEvent);
    el.addEventListener("contextmenu", contextMenuEvent);
  } else {
    throw new Error("At least set one menu list!");
  }
};

const unmounted = (el: HTMLElement) => {
  el.removeEventListener("contextmenu", contextMenuEvent);
};

const ContextMenuDirective: ObjectDirective = {
  mounted,
  unmounted,
};

YhContextMenu.name='yh-context-menu'


export * from "./src/types";
export { ContextMenuDirective, CustomMouseMenu, MouseMenuCtx };
export default YhContextMenu;
