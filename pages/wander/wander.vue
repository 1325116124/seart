<template>
	<view class="wander">
		<view class="wander-body">
			<view class="wander-top">
				<view class="search">
					<text class="iconfont icon-fangdajing"></text>
					<input type="text" placeholder-class="Search" placeholder="Discover" 
					@focus="changeInputClass" :class="{inputActive:isInputActive}" @blur="removeInputClass">
					<view class="location">
						<text class="iconfont icon-icon-test"></text>
						<text>广州</text>
					</view>
				</view>
				<view class="container">
					<swiper :circular="true" :autoplay="true" :interval="3000" :duration="1000" class="swiper" :current="swiperCurrent" @change="changeSwiper">
						<swiper-item v-for="(item,index) in swiperImg" :key='index'>
							<view class="swiper-item">
								<image :src="item" mode="aspectFill"></image>
								<view class="description">欧初捐赠文物纪念展"分为“诸家合璧”<br>
								“历代陶瓷”、“文房用品”和“青铜器”四个篇章</view>
							</view>
						</swiper-item>
					</swiper>
					<view class="swiper-dots">
						<block v-for="(item,index) in swiperImg.length" :key="index">
							<view class="dot" :class="index==swiperCurrent ? 'active' : ''"></view>
						</block>
					</view>
				</view>
			</view>
			<view class="wander-center">
				<view class="function-title" :class="{}">
					<view class="function-block" v-for="(item,index) in functionTitle" :key="index" @click="changeIndex(index)">{{item}}</view>
				</view>
				<scroll-view scroll-x="true" class="exhibits">
					<view class="exhibits-item">
						<image src="../../static/images/wander-exhibits1.jpg" mode="aspectFill"></image>
						<view class="live-state">live</view>
					</view>
					<view class="exhibits-item">
						<image src="../../static/images/wander-exhibits1.jpg" mode="aspectFill"></image>
						<view class="live-state">live</view>
					</view>
					<view class="exhibits-item">
						<image src="../../static/images/wander-exhibits1.jpg" mode="aspectFill"></image>
						<view class="live-state">live</view>
					</view>
				</scroll-view>
				<view class="more">more ></view>
			</view>
			<view class="wander-bottom">
				<!-- 复用living组件 -->
				<view class="exhibits-around-top">
					<txet class="block"></txet>
					<text class="exhibits-around-title">周围的展</text>
				</view>
				<scroll-view scroll-y="true" class="exhibits-around">
					<view class="exhibits-around-body">
						<view class="exhibits-around-item">
							<view class="item-left">
								<image class="item-image" src="../../static/images/broadcast.jpg" mode="heightFix"></image>
							</view>
							<view class="item-right">
								<view class="item-right-title"></view>
								<view class="item-right-des"></view>
								<view class="tem-tab"></view>
							</view>
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isInputActive:false,//判断输入框是否focus
				swiperImg: [
					'../../static/images/body-2-2.jpg',					
					'../../static/images/body-2-3.jpg',
					'../../static/images/body-2-4.jpg',
					'../../static/images/body-2-4.jpg'
				],
				swiperCurrent:0,
				functionTitle:["展览","沙龙","live专区"]
			};
		},
		methods: {
			changeInputClass(){
				this.isInputActive=true;
			},
			removeInputClass(){
				this.isInputActive=false;
			},
			changeSwiper(e) {
				this.swiperCurrent = e.detail.current;
			}
		}
	}
</script>

<style lang="less">
	@color:#1E6CB5;
	.wander{
		.wander-body{
			width: 700rpx;
			margin: 0 auto;
			.wander-top{
				padding: 20rpx 0;
				width: 700rpx;
				// background-color: red;
				position: relative;
				overflow: hidden;
				margin: 0 auto;
				.search{
					display: flex;
					justify-content: space-around;
					line-height: 50rpx;
					width: 100%;
					.icon-fangdajing{
						font-size: 50rpx;
						color: @color;
						margin-top: -2rpx;
					}
					.Search{
						color: #649DD4;
						font-size: 50rpx;
					}
					input[type=text]{
						width: 70%;
						height: 100%;
						transform: all 1s ease;
						padding: 0 0 10rpx 0;
						box-sizing: border-box;
						border-bottom: 2rpx solid transparent;
					}
					.inputActive{
						border-bottom: 2rpx solid @color !important;
					}
					.location{
						text{
							&:nth-child(2){
								color: @color;
							}
						}
					}
				}
				.container{
					width: 100%;
					.swiper{
						position: relative;
						top: 20rpx;
						width: 100%;
						height: 400rpx;
						border-radius: 24rpx;
						overflow: hidden;
						swiper-item{
							margin-right: 100rpx;
							text-align: center;
							.swiper-item{
								image{
									width: 90%;
									height: 280rpx;
									border-radius: 24rpx;
								}
								.description{
									text-align: center;
									width: 90%;
									height: 100rpx;
									line-height: 50rpx;
									background-color: #DEDDDA;
									border-radius: 24rpx;
									margin: 0 auto;
									font-size: 24rpx;
								}
							}
						}
					}
					.swiper-dots{
						width: 100%;
						display: flex;
						justify-content: center;
						margin-top: 30rpx;
						.dot{
							width: 16rpx;
							height: 16rpx;
							border-radius: 50%;
							background-color: #DEDDDA;
							margin-right: 20rpx;
							transition: all 0.2s;
						}
						.active{
							width: 40rpx;
							border-radius: 8rpx;
							background-color: @color;
						}
					}
				}
			}
			.wander-center{
				width: 100%;
				position: relative;
				.function-title{
					display: flex;
					justify-content: space-around;
					border-radius: 24rpx;
					.function-block{
						text-align: center;
						height: 88rpx;
						width: 33%;
						line-height: 88rpx;
						border-radius: 24rpx;
						background-color: #D5E3EF;
						&:first-child{
							background-color: #fff;
						}
					}
				}
				.exhibits{
					margin-top: 40rpx;
					width: 100%;
					height: 236rpx;
					overflow: hidden;
					display: flex;
					justify-content: flex-start;
					white-space: nowrap;
					
					.exhibits-item{
						display: inline-block;
						border-radius: 10rpx;
						width: 230rpx;
						height: 230rpx;
						margin-left: 52rpx;
						box-shadow: 0 0 0 0 #666,0 0 10rpx 0 #666,0 0 10rpx 0 #666,0 0 10rpx 0 #666;
						image{
							width: 230rpx;
							height: 230rpx;
						}
						&:first-child{
							margin-left: 10rpx;
						}
					}
				}
				.more{
					position: absolute;
					right: 10rpx;
					bottom: -40rpx;
					font-size: 26rpx;
					color: #747579;
				}
			}
			.wander-bottom{
				margin-top: 20rpx;
				.exhibits-around-top{
					width: 100%;
					line-height: 40rpx;
					height: 40rpx;
					margin-bottom: 200rpx;
					.block{
						display: inline-block;
						width: 12rpx;
						height: 28rpx;
						background-color: #306FB6;
						margin-right: 20rpx;
						border-radius: 4rpx;
						vertical-align: middle;
					}
					.exhibits-around-title{
						font-size: 26rpx;
						color: #1E6CB5;
					}
				}
				.exhibits-around{
					height: 1000rpx;
					.exhibits-around-body{
						width: 100%;
						height: 1000rpx;
						.exhibits-around-item{
							// 345x163
							width: 100%;
							height: 326rpx;
							background-color: #D3DDE6;
							border-radius: 24rpx;
							display: flex;
							justify-content: center;
							position: relative;
							overflow: visible;
							.item-left{
								position: absolute;
								width: 330rpx;
								height: 340rpx;
								border-radius: 10rpx;
								bottom: 50rpx;
								left: 40rpx;
								.item-image{
									// 115x170
									width: 100%;
									height: 100%;
									overflow: visible;
								}
							}
							.item-right{
								
							}
						}
					}
				}
			}
		}
	}
</style>
