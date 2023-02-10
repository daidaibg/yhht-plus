import { PropType } from "vue";
declare const _sfc_main: import("vue").DefineComponent<{
    href: {
        type: PropType<string>;
        required: boolean;
        validator(v: string): boolean;
    };
    target: {
        type: PropType<"_self" | "_blank" | "_parent" | "_top">;
        default: "_self" | "_blank" | "_parent" | "_top";
        validator(val: "_self" | "_blank" | "_parent" | "_top"): boolean;
    };
    title: {
        type: PropType<string | ((h: typeof import("vue").h) => import("../../../utils/common").SlotReturnValue) | undefined>;
        default: string;
    };
}, {
    props: any;
    href: string | undefined;
    target: "_self" | "_blank" | "_parent" | "_top";
    anchor: any;
    active: boolean;
    register: () => void;
    unregister: () => void;
    handleClick: (e: MouseEvent) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    href: {
        type: PropType<string>;
        required: boolean;
        validator(v: string): boolean;
    };
    target: {
        type: PropType<"_self" | "_blank" | "_parent" | "_top">;
        default: "_self" | "_blank" | "_parent" | "_top";
        validator(val: "_self" | "_blank" | "_parent" | "_top"): boolean;
    };
    title: {
        type: PropType<string | ((h: typeof import("vue").h) => import("../../../utils/common").SlotReturnValue) | undefined>;
        default: string;
    };
}>>, {
    target: "_self" | "_blank" | "_parent" | "_top";
    title: string | ((h: typeof import("vue").h) => import("../../../utils/common").SlotReturnValue) | undefined;
}>;
export default _sfc_main;
