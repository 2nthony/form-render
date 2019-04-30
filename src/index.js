import Form from './core/form'
import store from './core/store'

Form.install = (Vue, { ui } = {}) => {
  Vue.component(Form.name, Form)

  Vue.mixin({
    computed: {
      $FormRenderUI() {
        return ui
      }
    }
  })
}

export { Form as default, store }
