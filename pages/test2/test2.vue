<template>
	<view>
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" indicator-dots="true">
			<swiper-item>
				<view class="swiper-item">
					<image src="../../static/images/wander-exhibits1.jpg" mode=""></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image src="../../static/images/wander-exhibits1.jpg" mode=""></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image src="../../static/images/wander-exhibits1.jpg" mode=""></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image src="../../static/images/wander-exhibits1.jpg" mode=""></image>
				</view>
			</swiper-item>
		</swiper>
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

<style lang="less">
	swiper{
		width: 700rpx;
		margin: 0 auto;
		swiper-item{
			image{
				width: 700rpx;
			}
		}
	}
</style>
