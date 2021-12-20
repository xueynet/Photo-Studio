<template>
	<view class="loading" v-if="show">
		<u-loading show></u-loading>
	</view>
</template>

<script>
	export default {
		props:{
			show: {
				type: Boolean,
				default: true
			},
		},
		data() {
			return {
			}
		},
		watch:{
			show(newVal, oldVal) {
			}
		},
		methods: {
		}
	}
</script>

<style lang="scss">
	.loading{
		width: 100vw;
		height: 100vh;
		position: fixed;
		z-index: 997;
		background:#fff;
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
