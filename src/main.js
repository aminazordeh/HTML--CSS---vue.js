import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios"
import VueAxios from "vue-axios"
import "@fortawesome/fontawesome-free/css/all.css"
import "@fortawesome/fontawesome-free/js/all.js"
import vue2Swiper from 'vue2-swiper'
Vue.use(vue2Swiper)
Vue.use(VueAxios, axios);

new Vue({
  router,
  store,
  axios,
  VueAxios,
  vue2Swiper,
  render: h => h(App)
}).$mount('#app')
