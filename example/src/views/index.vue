<template>
  <div class="">
    <FormRenderer :config="config">
      <el-form-item>
        <el-button type="primary">Create</el-button>
        <el-button>Cancel</el-button>
      </el-form-item>
    </FormRenderer>
  </div>
</template>

<script>
export default {
  name: 'Basic',

  data() {
    return {
      config: {
        props: {
          labelWidth: '120px'
        },
        items: [
          {
            model: 'name',
            label: 'Activity name',
            component: 'text'
          },
          {
            model: 'zone',
            label: 'Activity zone',
            component: 'select',
            options: [
              {
                label: 'GuangZhou',
                value: 'GuangZhou'
              },
              {
                label: 'Japan',
                value: 'Japan'
              }
            ],
            props: {
              placeholder: 'Please select your zone'
            }
          },
          {
            model: 'time',
            label: 'Activity time',
            component: 'date'
          },
          {
            model: 'delivery',
            label: 'Instant delivery',
            component: 'switch'
          },
          {
            model: 'type',
            label: 'Activity type',
            value: [],
            component: 'checkbox',
            options: [
              {
                label: 'Online activities'
              },
              {
                label: 'Promotion activities'
              },
              {
                label: 'Offline activities'
              },
              {
                label: 'Simple brand exposure'
              }
            ]
          },
          {
            model: 'resource',
            label: 'Resources',
            component: 'radio',
            options: [
              {
                label: 'Sponsor'
              },
              {
                label: 'Venue'
              }
            ]
          },
          {
            model: 'desc',
            label: 'Activity form',
            component: 'textarea'
          }
        ]
      }
    }
  }
}
</script>
