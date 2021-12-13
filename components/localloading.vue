<template>
	<view class="loading">
		<u-loading show></u-loading>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		methods: {
		}
	}
</script>

<style lang="scss">
	.loading{
		width: 100vw;
		height: 400rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		.u-loading{
			height: 100rpx !important;
			width: 100rpx !important;
			border-color: #ddd #ddd #ddd #999 !important;
			border: 4px solid;
		}
	}
</style>
