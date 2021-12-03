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
@import "/static/css/page.scss";
</style>
