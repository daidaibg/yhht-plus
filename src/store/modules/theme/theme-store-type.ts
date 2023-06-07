
import {ThemeEnum} from '@/enums'

export interface ThemeStateType {
    theme: ThemeEnum,
    previewTheme: 'default' | 'github' | 'vuepress' | 'mk-cute' | 'smart-blue' | 'cyanosis',
    codeTheme: 'atom'|'a11y'|'github'|'gradient'|'kimbie'|'paraiso'|'qtcreator'|'stackoverflow'
}