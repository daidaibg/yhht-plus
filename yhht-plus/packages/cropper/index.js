/*
 * @Author: daidai
 * @Date: 2021-09-13 10:08:16
 * @LastEditors: daidai
 * @LastEditTime: 2021-09-13 10:09:23
 * @FilePath: \npm-gd\packages\cropper\index.js
 */
import Cropper from './src/main';

/* istanbul ignore next */
Cropper.install = function(Vue) {
  Vue.component(Cropper.name, Cropper);
};

export default Cropper;
