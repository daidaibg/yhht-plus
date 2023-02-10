import { CSSProperties } from 'vue';
/**
 * 用于为el节点增加styles ,migrate from tdesign-vue repo
 * @param el HTMLElement
 * @param style CSSProperties
 */
declare function setStyle(el: HTMLElement, styles: CSSProperties): void;
export default setStyle;
