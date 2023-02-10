import { GlobalConfigProvider } from './type';
import type { ConfigProviderProps } from './config-provider';
/**
 * component globalConfig
 * @param componentName
 * @returns {t, globalConfig}
 * useConfig('pagination')
 */
export declare function useConfig<T extends keyof GlobalConfigProvider>(componentName?: T): {
    t: <T_1>(pattern: T_1, ...args: any[]) => any;
    global: import("vue").ComputedRef<any>;
    globalConfig: import("vue").ComputedRef<any>;
    classPrefix: import("vue").ComputedRef<any>;
};
/**
* provide globalConfig
* @param {ConfigProviderProps} props
* @returns {ComputedRef<GlobalConfigProvider>}
*/
export declare const provideConfig: (props: ConfigProviderProps) => import("vue").ComputedRef<GlobalConfigProvider>;
