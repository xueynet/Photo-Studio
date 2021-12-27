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
Vue.prototype.$isLogin = ()=>{
	if (getApp().globalData.hasLogin && getApp().globalData.hasLaunch) {
		getApp().globalData.hasLaunch = false
		return true
	} else {
		if(!getApp().globalData.hasLogin){
			uni.navigateTo({
				url: '/pages/home/login',
			})
		}
		return false
	}
}
Vue.prototype.$firstGet = ()=>{
	if (getApp().globalData.hasLogin && !getApp().globalData.hasLaunch) {
		return true
	}
}
Vue.prototype.$navto = (url,id)=>{
	if(id!=undefined&&id!=''&&id!=0){
		if(id.toString().substr(0,1) == '?'){
			url += id
		}else{
			url += "?id=" + id
		}
	} 
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
Vue.prototype.$back = (id)=>{
	var n = getCurrentPages().length
	if(n>1){
		uni.navigateBack({
			delta: id,
		})
	}else{
		uni.switchTab({
			url:'/pages/index/index'
		})
	}
}
Vue.prototype.$pageScrollTo = (number)=>{
	uni.pageScrollTo({
	    scrollTop: number,
	    duration: 0
	});
}
Vue.prototype.$showBigImg = (list,current) =>{
	if(current == undefined) current = 0
	uni.previewImage({
		current:current,
		urls: list,
		indicator: 'number',
	})
},
Vue.prototype.$setnav = ($this,scrollTop,bgHeight,topName)=>{
	var titleheight = bgHeight/2
	var number = scrollTop/bgHeight
	var color = '#fff'
	if(scrollTop<titleheight){
		color = '#fff'
		if(topName) $this.titleshow = false
	}else{
		color = '#000'
		if(topName) $this.titleshow = true
	}
	$this.pagenavbg = {
		background: 'rgba(255,255,255,'+number+')',
		color:color
	}
	if(!topName) $this.toplistshow = {
		opacity: number,
	}
	if(!topName){
		for (let i in $this.toplist) {
			if(scrollTop>=($this.toplist[i].top - 50)){
				$this.topcurrent = i
			}
		}
	} 
}
//计算小数
Vue.prototype.$priceDecimal = (val) =>{
	if (parseInt(val) === parseFloat(val).toFixed(2)) return val + '.00'
	else return parseFloat(val).toFixed(2)
},
Vue.component('full-loading',fullloading)
Vue.component('local-loading',localloading)
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
