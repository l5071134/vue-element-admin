import Vue from 'vue'

import 'normalize.css/normalize.css'// A modern alternative to CSS resets

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import '@/styles/index.scss' // global css

import App from './App'
import router from './router'
import store from './store'

import i18n from './lang' // Internationalization
import './icons' // icon
import './errorLog'// error log
import './permission' // permission control
import clipboard from 'clipboard'
// import './mock' // simulation data

import * as filters from './filters' // global filters
import axios from 'axios'
Vue.prototype.$ajax = axios
Vue.use(Element, {
  size: 'medium', // set element-ui default size
  i18n: (key, value) => i18n.t(key, value)
})

// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false
Vue.prototype.env_base_api = process.env.BASE_API

Vue.prototype.getSkuImg = function(imgApiUrl, website_id, sku) {
  if (img_api_url && website_id && sku) {
    if (imgApiUrl.hasOwnProperty(website_id)) {
      var img_api_url = imgApiUrl[website_id]
      // alert(img_api_url + "###" + website_id)
      // alert(img_api_url + "##" + sku)
      return '://' + img_api_url + '?sku=' + sku
    }
  }
}

Vue.prototype.Clipboard = clipboard
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  template: '<App/>',
  components: { App }
})
