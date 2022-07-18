// For this project development

// GlobalComponents for Volar
declare module 'vue' {
    export interface GlobalComponents {
        YhButton: typeof import('../src/index')['YhButton'],
        YhAnchor: typeof import('../src/index')['YhAnchor'],
        YhAnchorItem: typeof import('../src/index')['YhAnchorItem'],
        YhAffix: typeof import('../src/index')['YhAffix'],


    }
}
export { }
