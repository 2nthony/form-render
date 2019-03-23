import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import FormRenderer from '../dist/form-renderer.cjs'
import Element from '../lib/ElementUI'

Vue.use(ElementUI)

Vue.use(FormRenderer, {
  ui: Element
})

new Vue({
  render: h => h(App)
}).$mount('#app')
