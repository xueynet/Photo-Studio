import api from '@/config/api.js';

const msg = (title, duration=1500, mask=false, icon='none')=>{
	//统一提示方便全局修改
	if(Boolean(title) === false){
		return;
	}
	uni.showToast({
		title,
		duration,
		mask,
		icon
	});
}
/*获取平台类型 */
const getPlatform = function() {
	let platform = process.env.VUE_APP_PLATFORM;
	return platform;
}
/**
 * 网络请求
 * @param {Object} req
 */
const request = function(req) {
	let platform = getPlatform();
	let token = uni.getStorageSync("token");
	let apikey = uni.getStorageSync("apikey")
	let header = {
		'platform': platform,
		'token': token,
		'X-XY-API-KEY':apikey,
		'Content-type': 'application/json'
	};
	if (req.header) {
		header = Object.assign(header, req.header);
	}
	uni.request({
		url: req.url,
		data: req.data || {},
		header: header,
		method: req.method || "GET",
		dataType: req.dataType || "json",
		success: function(res) {
			if (req.success) {
				req.success(res.data);
			}
		},
		fail: function(res) {
			uni.showToast({
				title: '网络异常~',
				icon: 'none'
			});
			if (req.fail) {
				req.fail(res);
			}
		},
		complete: function(res) {
			if (req.complete) {
				req.complete(res);
			}
		}
	});
}

/*无状态提示信息*/
const alert = function(msg = '', icon = 'none', url = '', openType = 'navigate') {
	/*消息强制转字符串*/
	if (typeof(msg) != 'string') {
		msg = msg.toString();
	}

	if (msg.length > 7) {
		//长度超过7个字符，用示模态弹窗展示
		uni.showModal({
			title: '提示',
			content: msg,
			showCancel: false
		});
	} else {
		if (icon == 'warning') {
			uni.showToast({
				title: msg,
				image: "/static/images/icon-warning.png"
			});
		} else {
			uni.showToast({
				title: msg,
				icon: icon
			})
		}
	}
	if (url || openType == 'back') {
		setTimeout(() => {
			if (openType == 'redirect') {
				uni.redirectTo({
					url: url
				});
			} else if (openType == 'switchTab') {
				uni.switchTab({
					url: url
				});
			} else if (openType == 'reLaunch') {
				uni.reLaunch({
					url: url
				});
			} else if (openType == 'back') {
				uni.navigateBack();
			} else {
				uni.navigateTo({
					url: url
				});
			}
		}, 1500)
	}
};

/*弹出加载框*/
const loading = function(msg = '', mask = true) {
	/*消息强制转字符串*/
	if (typeof(msg) != 'string') {
		msg = msg.toString();
	}
	uni.showLoading({
		title: msg,
		mask: mask
	})
};

/*是否微信浏览器*/
const isWechat = function() {
	// #ifndef H5
	return false;
	// #endif

	// #ifdef H5
	let ua = window.navigator.userAgent.toLowerCase();
	if (ua.match(/micromessenger/i) == 'micromessenger') {
		return true;
	} else {
		return false;
	}
	// #endif
};

export default {
	msg,
	request,
	alert,
	loading,
	isWechat,
	getPlatform,
};
