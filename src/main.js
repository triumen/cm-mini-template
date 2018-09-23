import Vue from 'vue'
import App from './App'
import http from './conmon/js/http'
import util from './conmon/js/util'
import wxApi from './conmon/js/wx.api'
import store from './store/index'
import './conmon/icon/iconfont.css'

Vue.config.productionTip = false
App.mpType = 'app'

Vue.prototype.$store = store
Vue.prototype.$http = http
Vue.prototype.$util = util
Vue.prototype.$wx = wxApi

const app = new Vue(App)
app.$mount()
