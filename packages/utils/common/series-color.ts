import { parseColorToRgba, mixColor, adjustAlpha} from '../color'

import type {Color} from "../color"

const rootEl = typeof document !== 'undefined' ? document.documentElement : undefined
const rootStyle = rootEl && getComputedStyle(rootEl)

export function computeSeriesColors(value: Color) {
    if (!rootEl || !rootStyle) return {}

    const colors: Record<string, string[]> = {
        light: [],
        // opacity: [],
        dark: []
    }
    const black = parseColorToRgba(
        rootStyle.getPropertyValue('--yh-font-gray-1') || { r: 0, g: 0, b: 0, a: 1 }
    )
    const white = parseColorToRgba(
        rootStyle.getPropertyValue('--yh-font-white-1') || { r: 255, g: 255, b: 255, a: 1 }
    )

    const style = rootEl.style

    for (let i = 2; i < 10; ++i) {
        const light = mixColor(white, value, i * 0.1).toString()
        // const opacity = adjustAlpha(value, toFixed(1 - i * 0.1, 1)).toString()
        const num = 10-i
        if(num!==8){
            style.setProperty(`--yh-brand-color-${num}`, light)
             // style.setProperty(`--yh-brand-color-opacity-${i}`, opacity)
        }else{
            rootStyle.setProperty(`--yh-brand-color`, value as string)
        }

        colors.light.push(light)
        // colors.opacity.push(opacity)
    }

    for (let i = 1; i < 3; ++i) {
        const dark = mixColor(black, value, i * 0.1).toString()

        style.setProperty(`--yh-brand-color-${i+8}`, dark)

        colors.dark.push(dark)
    }

    // style.setProperty('--yh-color-primary-base', `${value}`)
    // localStorage.setItem('yh-docs-prefer-major-color', `${value}`)

    return colors
}

// window["computeSeriesColors"]=computeSeriesColors