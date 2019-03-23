import './plugins'

import { createApp } from './core'

const { app, router } = createApp()

router.onReady(() => app.$mount('#app'))
