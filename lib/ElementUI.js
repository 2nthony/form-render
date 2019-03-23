export default {
  form: {
    component: 'el-form'
  },

  item: {
    component: 'el-form-item'
  },

  text: {
    component: 'el-input'
  },

  number: {
    component: 'el-input-number'
  },

  password: {
    component: 'el-input',
    props: {
      type: 'password'
    }
  },

  textarea: {
    component: 'el-input',
    props: {
      type: 'textarea'
    }
  },

  radio: {
    component: 'el-radio-group',
    option: {
      component: 'el-radio'
    }
  },

  checkbox: {
    component: 'el-checkbox-group',
    option: {
      component: 'el-checkbox'
    }
  },

  select: {
    component: 'el-select',
    option: {
      component: 'el-option'
    }
  },

  switch: {
    component: 'el-switch'
  },

  date: {
    component: 'el-date-picker'
  },

  time: {
    component: 'el-time-select'
  },

  datetime: {
    component: 'el-date-picker',
    props: {
      type: 'datetime'
    }
  }
}
