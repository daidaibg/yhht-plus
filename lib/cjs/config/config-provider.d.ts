import { PropType, ExtractPropTypes } from 'vue';
import type { GlobalConfigProvider } from './type';
declare const configProviderProps: {
    readonly globalConfig: PropType<GlobalConfigProvider>;
};
export type ConfigProviderProps = ExtractPropTypes<typeof configProviderProps>;
export {};
