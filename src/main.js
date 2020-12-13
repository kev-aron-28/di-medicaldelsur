import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./assets/css/main.css"
import './plugins/fontAwesome'
import VueScrollReveal from 'vue-scroll-reveal'
import VueSweetalert2 from 'vue-sweetalert2'
Vue.use(VueSweetalert2)
Vue.use(VueScrollReveal, {
  class: 'v-scroll-reveal',
  duration: 1000,
});

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
