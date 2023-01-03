
import {  PropType, ExtractPropTypes } from 'vue';
import type { GlobalConfigProvider } from './type';

const configProviderProps = {
    globalConfig: Object as PropType<GlobalConfigProvider>,
  } as const;

export type ConfigProviderProps = ExtractPropTypes<typeof configProviderProps>;
