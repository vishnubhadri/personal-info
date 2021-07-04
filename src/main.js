import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import i18n from './i18n'
import titleMixin from './titleMixin'

Vue.mixin(titleMixin)

Vue.config.productionTip = false

new Vue({
  i18n,
  vuetify,
  render: h => h(App)
}).$mount('#app')

