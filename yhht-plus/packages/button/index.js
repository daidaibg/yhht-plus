/*
 * @Author: daidai
 * @Date: 2021-10-09 09:07:45
 * @LastEditors: daidai
 * @LastEditTime: 2022-03-04 14:29:06
 * @FilePath: \yhht-ui\yhht-ui\packages\button\index.js
 */

import Button from './src/main.vue';

/* istanbul ignore next */
Button.install = function(Vue) {
  Vue.component(Button.name, Button);
};

export default Button;

