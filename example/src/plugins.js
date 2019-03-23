import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import FormRenderer from '../../dist/form-renderer.cjs'
import ui from '../../lib/ElementUI'

Vue.use(ElementUI)
Vue.use(FormRenderer, { ui })
