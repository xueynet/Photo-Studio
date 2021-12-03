import App from './App'
import api from './config/api.js'
import base from './common/app.js'
import uView from './uview-ui'
import defalutdata from 'common/defalutdata.js'
import Vue from 'vue'
Vue.config.productionTip = false
Vue.use(uView);
Vue.prototype.$defalutdata = defalutdata;
Vue.prototype.$api = api;
Vue.prototype.$app = base;
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
