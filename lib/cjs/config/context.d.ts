import { InjectionKey, ComputedRef } from 'vue';
import { GlobalConfigProvider } from './type';
export declare enum EAnimationType {
    ripple = "ripple",
    test = "test"
}
export declare const defaultZhLocale: {};
export declare const configProviderInjectKey: InjectionKey<ComputedRef<GlobalConfigProvider>>;
export declare const defaultGlobalConfig: {
    classPrefix: string;
    animation: Record<"include" | "exclude", import("./default-config").AnimationType[]>;
};
export declare const mergeWith: (defaultGlobalConfig: GlobalConfigProvider, injectConfig: GlobalConfigProvider) => GlobalConfigProvider;
