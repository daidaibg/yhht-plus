

import { App } from 'vue'
import Button from './src/button.vue';

Button.install = (app:App): void =>{
  app.component('yh-button', Button);
};

export default Button;

