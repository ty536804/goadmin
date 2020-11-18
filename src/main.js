// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import animated from 'animate.css'
// 样式
import 'bootstrap/dist/css/bootstrap.min.css'


import './plugins/element.js'
import './plugins/vant.js'
import './assets/css/global.css'
import './assets/css/font-awesome/font-awesome.min.css'

import Qs from 'qs'
import Axios from 'axios'
import TreeTable from 'vue-table-with-tree-grid'
import md5 from 'js-md5';

var _webUrl = 'http://127.0.0.1:8000'
Axios.defaults.baseURL = _webUrl+'/api/v1/'

Axios.withCredentials = true

Vue.prototype.$http = Axios
Vue.prototype.baseURL = _webUrl+'/api/v1/'
Vue.prototype.webSite = _webUrl
Vue.prototype.$qs = Qs
Vue.prototype.getSign = function() {
  if (window.sessionStorage.getItem("sign") == null) {
    return true
  } else {
    return false
  }
}
Vue.prototype.getParam = function() {
  var signStr = window.sessionStorage.getItem("sign")
  signStr = signStr == null ? '' : signStr
  let _param = {
    timestamp: Date.parse(new Date()) / 1000,
    version: 'v1',
    sign: signStr,
    client: 'pc',
  }
  let _keys = []
  for (var key in _param) {
    _keys.push(key)
  }
  _keys = _keys.sort()

  let _sgin = ""
  for (var i=0;i<_keys.length;i++) {
    let _key = _keys[i]
    if (_param[_key] == "" && _key == 'sign') {
      continue
    }
    _sgin += _key + _param[_key]
  }
  _sgin += "brocaedu"
  return md5(_sgin)
}
Vue.config.productionTip = false
Vue.component('tree-table', TreeTable)
Vue.use(animated)

Vue.prototype.setParam = function () {
    return {
      timestamp: Date.parse(new Date()) / 1000,
      version: 'v1',
      client:'pc',
      sign:window.sessionStorage.getItem("sign")
    }
}

Vue.prototype.addParam = function(content) {
  content["timestamp"] = Date.parse(new Date()) / 1000
  content["version"] = "v1",
  content["client"] = "pc"
  content["sign"] = window.sessionStorage.getItem("sign")
  return content
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
