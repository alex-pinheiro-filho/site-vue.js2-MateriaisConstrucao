import Vue from 'vue'
import router from './router'
import App from './App.vue'
import './style.css'

Vue.config.productionTip = false

document.title = 'Depósito Vila Romanna'

new Vue({
  router,
  render: h => h(App),
  mounted() {
    document.title = 'Depósito Vila Romanna'
  }
}).$mount('#app')
