import { warning } from '../utils'
import store from './store'

export default {
  name: 'FormRendererItem',

  render(h) {
    const { item, $FormRendererUI } = this
    const Item = $FormRendererUI.item || {}
    const Widget = $FormRendererUI[item.component] || {
      component: item.component
    }

    return (
      <Item.component label={item.label}>
        <Widget.component
          {...{
            props: Object.assign({}, Widget.props, item.props)
          }}
          onInput={value => store.updateValue(item.model, value)}
          value={store.value[item.model]}
        >
          {Array.isArray(item.options) &&
            Widget.option &&
            item.options.map(opt => {
              return (
                <Widget.option.component
                  label={opt.label || opt.value}
                  value={opt.value}
                >
                  {opt.label}
                </Widget.option.component>
              )
            })}
        </Widget.component>
      </Item.component>
    )
  },

  props: {
    item: {
      type: Object,
      default: () => ({})
    }
  },

  mounted() {
    const { item } = this

    if (!item.model) {
      warning('Missing required prop: `model`', { ...item })
      return
    }

    if (item.value) {
      store.updateValue(item.model, item.value)
    }
  }
}
