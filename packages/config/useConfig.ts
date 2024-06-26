import { computed, h, inject, getCurrentInstance, ref, provide } from 'vue';
import { defaultGlobalConfig, configProviderInjectKey, mergeWith } from './context';
import cloneDeep from 'lodash/cloneDeep';
import { GlobalConfigProvider } from './type';
import type { ConfigProviderProps } from './config-provider';

const globalConfigCopy = ref<GlobalConfigProvider>();
/**
 * component globalConfig
 * @param componentName
 * @returns {t, globalConfig}
 * useConfig('pagination')
 */
export function useConfig<T extends keyof GlobalConfigProvider>(componentName?: T) {
    // const injectGlobalConfig = getCurrentInstance() ? inject(configProviderInjectKey, null) : globalConfigCopy;
    const injectGlobalConfig = globalConfigCopy;
    const mergedGlobalConfig = computed(() => injectGlobalConfig?.value || defaultGlobalConfig);
    const globalConfig = computed(() => (mergedGlobalConfig.value as any)[componentName]);
    const classPrefix = computed(() => {
        return mergedGlobalConfig.value.classPrefix;
    });

    // 处理正则表达式
    const t = function <T>(pattern: T, ...args: any[]) {
        const [data] = args;
        if (typeof pattern === 'string') {
            if (!data) return pattern;
            const regular = /\{\s*([\w-]+)\s*\}/g;
            const translated = pattern.replace(regular, (match, key) => {
                if (data) {
                    return String(data[key]);
                }
                return '';
            });
            return translated;
        }
        if (typeof pattern === 'function') {
            // 重要：组件的渲染必须存在参数 h，不能移除
            if (!args.length) return pattern(h);
            return pattern(...args);
        }
        return '';
    };

    return {
        t,
        global: globalConfig,
        globalConfig,
        classPrefix,
    };
}


/**
* provide globalConfig
* @param {ConfigProviderProps} props
* @returns {ComputedRef<GlobalConfigProvider>}
*/
export const provideConfig = (props: ConfigProviderProps) => {
    const defaultData = cloneDeep(defaultGlobalConfig);
    const mergedGlobalConfig = computed(() => mergeWith(defaultData, props.globalConfig as any));

    provide(configProviderInjectKey, mergedGlobalConfig);

    if (!globalConfigCopy.value) {
        globalConfigCopy.value = mergedGlobalConfig.value;
    }

    return mergedGlobalConfig;
};
