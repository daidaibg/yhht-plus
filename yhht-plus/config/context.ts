import { InjectionKey, ComputedRef } from 'vue';
import _mergeWith from 'yhht-plus/utils/lodash/mergeWith';
import merge from 'yhht-plus/utils/lodash/merge';

import { GlobalConfigProvider } from './type';
import defaultConfig from './default-config';
export enum EAnimationType {
    ripple = 'ripple',
    test = 'test',
}

export const defaultZhLocale={}

export const configProviderInjectKey: InjectionKey<ComputedRef<GlobalConfigProvider>> = Symbol('configProvide');

export const defaultGlobalConfig = merge(defaultConfig, defaultZhLocale);

export const mergeWith = (defaultGlobalConfig: GlobalConfigProvider, injectConfig: GlobalConfigProvider) =>
    _mergeWith(defaultGlobalConfig, injectConfig, (objValue, srcValue) => {
        if (Array.isArray(objValue)) {
            return srcValue;
        }
    });
