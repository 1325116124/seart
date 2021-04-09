<template>
	<view class="wander">
		<view class="wander-center">
			<view class="search">
				<text class="iconfont icon-fangdajing"></text>
				<input type="text" placeholder-class="Search" placeholder="Discover">
				<view class="location">
					<txet class="iconfont icon-location"></text>
					<text>广州</text>
				</view>
			</view>
			<view class="swiper-box">
				<swiper class="swiper" indicator-color="rgba(255,255,255,0.6)" indicator-active-color="#1E6CB5" S
				 :current="currentIndex" @change="changeCurrent" :autoplay="true" :duration="2000" :interval="2000"
				 circular="true">
					<swiper-item v-for="(item,index) in swiperImg" :key="index">
						<image class="swiper-item" :src="item" mode="widthFix"></image>
					</swiper-item>
				</swiper>
				<view class="dots">
					<view v-for="(item,index) in swiperImg" :key="index">
						<view class="dot" :class="index==currentIndex ? 'active' : ''"></view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				currentIndex:0,
				swiperImg: [
					'../../static/images/body-2-2.jpg',					
					'../../static/images/body-2-3.jpg',
					'../../static/images/body-2-4.jpg'
				],
			};
		},
		methods: {
			changeCurrent(e){
				this.currentIndex=e.detail.current;
			}
		}
	}
</script>

<style lang="less">
	@color:#1E6CB5;
	.center{
	  position: absolute;
	  left: 50%;
	  top: 50%;
	  transform: translate(-50%, -50%);
	}
	.vcenter{
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
	}
	.hcenter{
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
	}
	.wander-center{
		padding: 20rpx 0;
		width: 700rpx;
		height: 700rpx;
		// background-color: red;
		position: relative;
		overflow: hidden;
		margin: 0 auto;
		.search{
			display: flex;
			justify-content: space-around;
			line-height: 50rpx;
			width: 100%;
			.hcenter();
			.icon-fangdajing{
				font-size: 50rpx;
				color: @color;
				margin-top: -2rpx;
			}
			.Search{
				color: #5983AF;
				font-size: 50rpx;
			}
			input[type=text]{
				width: 70%;
				height: 100%;
			}
			input[type=text]:focus{
				outline: 10px solid #000;
				color: #f00;
			}
			.location{
				color: @color;
			}
		}
		
		.swiper-box{
			width: 700rpx;
			height: 280rpx;
			margin-top: 100rpx;
			position: relative;
			.swiper{
				width: 740rpx;
				height: 280rpx;
				border-radius: 24rpx;
				overflow: hidden;
				.swiper-item{
					width: 700rpx;
					height: 280rpx;
					border-radius: 24rpx;
					
				}
			}
			.dots {
				position: absolute;
				bottom: -50rpx;
				left: 50%;
				transform: translateX(-50%);
				z-index: 4;
				display: flex;
				justify-content: center;
			
				.dot {
					width: 8rpx;
					height: 8rpx;
					border-radius: 50%;
					transition: all .2s;
					background-color: #eee;
					margin-right: 20rpx;
				}
			
				.active {
					width: 20rpx;
					height: 8rpx;
					border-radius: 30%;
					background: @color;
				}
			}
		}
		
	}
</style>
