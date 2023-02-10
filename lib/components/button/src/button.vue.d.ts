declare const _sfc_main: import("vue").DefineComponent<{
    readonly theme: {
        readonly type: StringConstructor;
        readonly default: "default";
    };
    readonly variant: {
        readonly type: StringConstructor;
        readonly values: readonly ["base", "outline", "dashed", "text", ""];
        readonly default: "base";
    };
    readonly size: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly loading: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly shape: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly block: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly autofocus: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly type: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
}, {
    btnRef: import("vue").Ref<HTMLElement | undefined>;
    props: any;
    emits: (event: "click", e: Event) => void;
    handleClick: (e: MouseEvent) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly theme: {
        readonly type: StringConstructor;
        readonly default: "default";
    };
    readonly variant: {
        readonly type: StringConstructor;
        readonly values: readonly ["base", "outline", "dashed", "text", ""];
        readonly default: "base";
    };
    readonly size: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly loading: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly shape: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly block: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly autofocus: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly type: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
}, {
    readonly theme: string;
    readonly variant: string;
    readonly size: string;
    readonly disabled: boolean;
    readonly loading: boolean;
    readonly shape: string;
    readonly block: boolean;
    readonly autofocus: boolean;
    readonly type: string;
}>;
export default _sfc_main;
