import App from './App'
import api from './config/api.js'
import base from './common/app.js'
import uView from './uview-ui'
import defalutdata from 'common/defalutdata.js'
import fullloading from 'components/fullloading.vue'
import localloading from 'components/localloading.vue'
import Vue from 'vue'
Vue.config.productionTip = false
Vue.use(uView);
Vue.prototype.$defalutdata = defalutdata;
Vue.prototype.$api = api;
Vue.prototype.$app = base;
Vue.prototype.$navto = (url,id)=>{
	if(id!=undefined) url += "?id=" + id
	uni.navigateTo({
		url,
	})
}
Vue.prototype.$swithto = (url,id)=>{
	if(id!=undefined) url += "?id=" + id
	uni.switchTab({
		url,
	})
}
Vue.component('full-loading',fullloading)
Vue.component('local-loading',localloading)
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
