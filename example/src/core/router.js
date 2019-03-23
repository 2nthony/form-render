import Vue from 'vue'
import Router from 'vue-router'
import { routes } from 'vue-auto-routes'

Vue.use(Router)

export function createRouter() {
  const router = new Router({
    routes,
  })

  return router
}
