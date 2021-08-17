/**
 * 项目的启动入口
 */

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './styles/index.less'

if (process.env.NODE_ENV === 'production') {
  const Sentry = require('@sentry/browser')
  const Integrations = require('@sentry/integrations')

  Sentry.init({
    dsn: 'https://34abf2d89d6e40e2ac3bad5fba752daf@sentry.itheima.net/55',
    integrations: [new Integrations.Vue({ Vue, attachProps: true })]
  })
}

Vue.use(ElementUI)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
