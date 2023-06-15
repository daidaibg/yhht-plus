import { defineStore } from "pinia";
import { setLocalStorage, getLocalStorage } from '@/utils'
import { StorageEnum, LangStateType, LangEnum } from '@/enums'
import i18n from '@/i18n/index'

const { global } = i18n;
const { YH_LANG_STORE } = StorageEnum
const storageLang: LangStateType = getLocalStorage(YH_LANG_STORE)


export const useLangStore = defineStore({
    id: "useLangStore",
    state: (): LangStateType => storageLang || {
        lang: global.locale
    },
    actions: {
        changeLang( lang: LangEnum) {
            this.lang = lang;
            setLocalStorage(YH_LANG_STORE, { lang: lang })
        }
    },
});