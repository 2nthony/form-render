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
            type: 'text'
          },
          {
            model: 'zone',
            label: 'Activity zone',
            type: 'select',
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
            type: 'date'
          },
          {
            model: 'delivery',
            label: 'Instant delivery',
            type: 'switch'
          },
          {
            model: 'type',
            label: 'Activity type',
            value: [],
            type: 'checkbox',
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
            type: 'radio',
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
            type: 'textarea'
          }
        ]
      }
    }
  }
}
</script>
