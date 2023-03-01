interface Window {
  // 语言
  $t: any
}

declare type Recordable<T = any> = Record<string, T>

declare type codeText={
  [key:string]:string
}

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

