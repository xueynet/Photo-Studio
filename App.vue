<script>
	export default {
		globalData:{
			hasLaunch:true,
			hasLogin: uni.getStorageSync('haslogin')||false,
			logo: uni.getStorageSync('logo'),
			user: uni.getStorageSync('user'),
			siteid: uni.getStorageSync('siteid'),
			token: uni.getStorageSync('token'),
			sitename:uni.getStorageSync('sitename'),
			alllanmu:uni.getStorageSync('alllanmu'),
			province:uni.getStorageSync('province'),
			city:uni.getStorageSync('city'),
			area:uni.getStorageSync('area'),
			loadText: {
				loadmore: '上拉加载',
				loading: '正在加载，请喝杯茶',
				nomore: '我也是有底线的'
			},
			pagenavbg: {
				background: '#fff'
			},
			addressList:uni.getStorageSync('addressList')||[]
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
