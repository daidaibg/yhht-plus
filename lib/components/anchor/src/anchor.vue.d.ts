import { ComponentPublicInstance } from "vue";
import { ANCHOR_CONTAINER } from "./utils";
export declare const sizes: readonly ["small", "medium", "large"];
export interface Anchor extends ComponentPublicInstance {
    scrollContainer: ANCHOR_CONTAINER;
    handleScrollLock: boolean;
}
declare const _sfc_main: import("vue").DefineComponent<{
    theme: {
        type: import("vue").PropType<string>;
        default: () => string;
    };
    href: {
        type: import("vue").PropType<string>;
        require: boolean;
        default: () => string;
    };
    bounds: {
        type: NumberConstructor;
        default: number;
    };
    container: {
        type: import("vue").PropType<import("../../../utils/common").ScrollContainer | undefined>;
        default: () => () => Window & typeof globalThis;
    };
    cursor: {
        type: import("vue").PropType<any>;
    };
    size: {
        type: import("vue").PropType<"medium" | "small" | "large" | undefined>;
        default: "medium" | "small" | "large" | undefined;
    };
    targetOffset: {
        type: NumberConstructor;
        default: number;
    };
    currentActive: {
        type: StringConstructor;
    };
    noLink: {
        type: BooleanConstructor;
        default: boolean;
    };
    onChange: import("vue").PropType<((currentLink: string, prevLink: string) => void) | undefined>;
    onClick: import("vue").PropType<((link: {
        href: string;
        title: string;
        e: MouseEvent;
    }) => void) | undefined>;
}, {
    activeLineStyle: import("vue").Ref<object>;
    anchorRef: import("vue").Ref<HTMLElement | null>;
    active: import("vue").Ref<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    theme: {
        type: import("vue").PropType<string>;
        default: () => string;
    };
    href: {
        type: import("vue").PropType<string>;
        require: boolean;
        default: () => string;
    };
    bounds: {
        type: NumberConstructor;
        default: number;
    };
    container: {
        type: import("vue").PropType<import("../../../utils/common").ScrollContainer | undefined>;
        default: () => () => Window & typeof globalThis;
    };
    cursor: {
        type: import("vue").PropType<any>;
    };
    size: {
        type: import("vue").PropType<"medium" | "small" | "large" | undefined>;
        default: "medium" | "small" | "large" | undefined;
    };
    targetOffset: {
        type: NumberConstructor;
        default: number;
    };
    currentActive: {
        type: StringConstructor;
    };
    noLink: {
        type: BooleanConstructor;
        default: boolean;
    };
    onChange: import("vue").PropType<((currentLink: string, prevLink: string) => void) | undefined>;
    onClick: import("vue").PropType<((link: {
        href: string;
        title: string;
        e: MouseEvent;
    }) => void) | undefined>;
}>>, {
    theme: string;
    size: "medium" | "small" | "large" | undefined;
    container: import("../../../utils/common").ScrollContainer | undefined;
    href: string;
    bounds: number;
    targetOffset: number;
    noLink: boolean;
}>;
export default _sfc_main;
