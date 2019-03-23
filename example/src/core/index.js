import Vue from 'vue'
import App from '../App.vue'
import { createRouter } from './router'

export function createApp(opts = {}) {
  const router = createRouter()
  const app = new Vue({
    ...opts,
    router,
    render: h => h(App)
  })

  return { app, router }
}
