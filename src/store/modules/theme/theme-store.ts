import { StorageEnum, ThemeEnum } from '@/enums'
import { theme } from '@/config'
import { setLocalStorage, getLocalStorage } from '@/utils'
import { ThemeStateType } from './theme-store-type'
import { defineStore } from 'pinia'

const { YH_THEME_STORE } = StorageEnum;
const themeState = getLocalStorage(YH_THEME_STORE)

const domSetAttribute = (theme: ThemeEnum) => {
    document.documentElement.setAttribute("theme-mode", theme);
    document.documentElement.className = theme;
}

if (themeState && themeState.theme == ThemeEnum.DARK) {
    domSetAttribute(themeState.theme)
}
//state
const state: ThemeStateType = {
    theme: themeState?.theme || theme,
    previewTheme: "github", 
    codeTheme: "github", 
}

export const userThemeStore = defineStore({
    id: "userThemeStore",
    state: (): ThemeStateType => state,
    actions: {
        changeTheme( theme: ThemeEnum): void {
            this.theme = theme;
            domSetAttribute(theme)
            setLocalStorage(YH_THEME_STORE, state)
            // document.documentElement.className=type;
        }
    },

});