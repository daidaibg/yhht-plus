// 主题
export enum ThemeEnum {
    DARK = 'dark',
    LIGHT = 'light'
}

// 语言
export enum LangEnum {
    ZH = 'zh-CN',
    EN = 'en-US'
}
export interface LangStateType {
    // 当前语言
    lang: LangEnum,
}