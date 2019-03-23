import store from './store'
import Item from './item'

export default {
  name: 'FormRenderer',

  render(h) {
    const { $FormRendererUI } = this
    const { props, items } = this.config
    const Form = $FormRendererUI.form

    return (
      <Form.component {...{ props }}>
        {items.map(item => {
          return <Item item={item} />
        })}
      </Form.component>
    )
  },

  props: {
    config: {
      type: Object,
      default: () => ({})
    }
  },

  data() {
    return {
      store
    }
  }
}
