// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import resource from "vue-resource"

import "../static/swiper/css/swiper.min.css"
//import "../static/swiper/js/swiper.js"
//import Swiper from "swiper"

Vue.use(resource)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  beforeCreate:function(){
  	this.$router.push("/home")
  },
  components: { App },
  template: '<App/>'
})

