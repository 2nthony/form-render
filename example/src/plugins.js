import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import FormRender from '../../dist/form-render.cjs'
import ui from '../../lib/ElementUI'

Vue.use(ElementUI)
Vue.use(FormRender, { ui })
