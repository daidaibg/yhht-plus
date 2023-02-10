import type { CSSProperties } from 'vue';
declare const _sfc_main: import("vue").DefineComponent<{
    container: {
        type: StringConstructor;
        default: string;
    };
    position: {
        type: StringConstructor;
        default: string;
    };
    offset: {
        type: NumberConstructor;
        default: number;
    };
    zIndex: {
        type: NumberConstructor;
    };
}, {
    affixWrapRef: import("vue").Ref<HTMLElement | undefined>;
    affixRef: import("vue").Ref<HTMLElement | undefined>;
    fixed: import("vue").Ref<boolean>;
    affixWrapStyle: import("vue").ComputedRef<CSSProperties>;
    affixStyle: import("vue").ComputedRef<CSSProperties>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    container: {
        type: StringConstructor;
        default: string;
    };
    position: {
        type: StringConstructor;
        default: string;
    };
    offset: {
        type: NumberConstructor;
        default: number;
    };
    zIndex: {
        type: NumberConstructor;
    };
}>>, {
    container: string;
    position: string;
    offset: number;
}>;
export default _sfc_main;
