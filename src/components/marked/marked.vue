<script setup lang="ts">
import MdEditor from "md-editor-v3";
import "@vavt/markdown-theme/css/all.css";
import {mdEditorConfig} from "./marked"
import { reactive ,watch} from "vue";
import { userThemeStore } from '@/store'
import { ThemeEnum } from '@/enums'

const themeStore = userThemeStore()
mdEditorConfig(MdEditor)
const state=reactive({
    text:"",
    theme:"light",
    previewTheme:"github",//'default' | 'github' | 'vuepress' | 'mk-cute' | 'smart-blue' | 'cyanosis'
    codeTheme:"github",//'atom'|'a11y'|'github'|'gradient'|'kimbie'|'paraiso'|'qtcreator'|'stackoverflow'
})

const props=defineProps({
    text:{
        type:String,
        default:""
    }
})


state.text=props.text
watch(()=>props.text,(newVal)=>{
    state.text=newVal

})
</script>

<template>
  <MdEditor
    v-model="state.text"
    :theme="themeStore.theme"
    :previewTheme="state.previewTheme"
    :code-theme="state.codeTheme"
    showCodeRowNumber
    previewOnly
    id="yh-md"
  />
</template>

<style scoped lang="scss">


</style>
