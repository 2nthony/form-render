class Store {
  constructor() {
    this.value = {}
    this.options = {}
  }

  updateValue(model, val) {
    this.value = Object.assign({}, this.value, {
      [model]: val
    })
  }

  updateForm(val) {
    this.value = Object.assign({}, this.value, val)
  }

  getValue(model) {
    if (model) return this.value[model]
    return { ...this.value }
  }

  setOptions(model, opts = []) {}
}

export default new Store()
