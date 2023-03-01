import {useLangStore} from './modules/lang-store'
import {userThemeStore} from './modules/theme/theme-store'
import type { App } from 'vue';
import { createPinia } from 'pinia';


const store = createPinia();
export function setupStore(app: App<Element>) {
  app.use(store);
}
export {userThemeStore,useLangStore}
export default {store} ;
