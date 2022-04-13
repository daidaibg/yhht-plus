/*
 * @Author: daidai
 * @Date: 2021-07-12 09:26:26
 * @LastEditors: daidai
 * @LastEditTime: 2022-03-04 14:29:47
 * @FilePath: \yhht-ui\yhht-ui\src\index.js
 */

import Button from '../packages/button'

const components = [

  Button
];

const install = function(Vue, opts = {}) {
    components.forEach(component => {
        // console.log(component)
      Vue.component(component.name, component);
    });
  
  };
  /* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

  export default {
    version: '1.0.1',
    install,

    Button
  };

  export {

    Button
    
  }