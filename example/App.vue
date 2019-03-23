<template>
  <div id="app">
    <h2>FormRenderer playground 😋</h2>
    <FormRenderer :config="config"></FormRenderer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      config: {
        props: {
          labelWidth: '80px'
        },
        items: [
          {
            model: 'text',
            label: 'text',
            type: 'text',
            value: 'evillt'
          },
          {
            model: 'textarea',
            label: 'textarea',
            type: 'textarea'
          },
          {
            model: 'password',
            label: 'password',
            type: 'password',
            props: {
              showPassword: true
            }
          },
          {
            label: 'radio',
            type: 'radio',
            model: 'radio',
            options: [
              {
                label: 'radio1',
                value: 'radio1'
              },
              {
                label: 'radio2',
                value: 'radio2'
              }
            ]
          },
          {
            label: 'select',
            type: 'select',
            model: 'select',
            options: [
              {
                label: 'select1',
                value: 'select1'
              },
              {
                label: 'select2',
                value: 'select2'
              }
            ]
          }
        ]
      }
    }
  }
}
</script>

<style>
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
}
</style>
