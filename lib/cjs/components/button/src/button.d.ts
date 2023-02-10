export declare const buttonVariants: readonly ["base", "outline", "dashed", "text", ""];
export declare const ButtonProps: {
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
};
