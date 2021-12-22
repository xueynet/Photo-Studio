<script>
	export default {
		globalData:{
			//数据请求
			token: uni.getStorageSync('user').token,
			siteid: uni.getStorageSync('siteid'),
			
			//登录
			hasLaunch:true,
			hasLogin: uni.getStorageSync('haslogin')||false,
			
			//数据获取
			logo: uni.getStorageSync('logo'),
			user: uni.getStorageSync('user'),
			sitename:uni.getStorageSync('sitename'),
			alllanmu:uni.getStorageSync('alllanmu'),
			
			//所在地
			province:uni.getStorageSync('province'),
			city:uni.getStorageSync('city'),
			area:uni.getStorageSync('area'),
			
			//快递地址
			addressList:uni.getStorageSync('user').addressList||[],
			
			//页面信息
			systeminfo:uni.getSystemInfoSync(),
			
			//页面效果
			loadText: {
				loadmore: '上拉加载',
				loading: '正在加载，请喝杯茶',
				nomore: '我也是有底线的'
			},
			pagenavbg: {
				background: '#ffffff'
			},
			//end
		},
		onLaunch: function() {
		},
		onShow: function() {
		},
		onHide: function() {
		},
	}
</script>
<style lang="scss">
@import "uview-ui/index.scss";
@import "/static/font/iconfont.css";
@import "/static/css/style.scss";
</style>
