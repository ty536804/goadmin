// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import animated from 'animate.css'
// 样式
import 'bootstrap/dist/css/bootstrap.min.css'
import './components/frontend/index/css/common.css'

import './plugins/element.js'
import './plugins/vant.js'
import './assets/css/global.css'
import './assets/css/font-awesome/font-awesome.min.css'

import Qs from 'qs'
import Axios from 'axios'
import TreeTable from 'vue-table-with-tree-grid'

Axios.defaults.baseURL = 'http://127.0.0.1:8000/api/v1/'

Axios.withCredentials = true

Vue.prototype.$http = Axios
Vue.prototype.baseURL = 'http://127.0.0.1:8000/api/v1/'
Vue.prototype.webSite = 'http://127.0.0.1:8000'
Vue.prototype.$qs = Qs
Vue.config.productionTip = false
Vue.component('tree-table', TreeTable)
Vue.use(animated)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
