<template>
	<view class="album-template">
		<view class="album-body">
			<view class="album-top">
				<view class="album-top-top">
					<txet class="block"></txet>
					<text class="album-top-title">他是他，文之像为谁而作？</text>
				</view>
				<view class="chair" @click="toCourse">
					<image :src="item.albumImage" mode="aspectFill"></image>
					<view class="description">欧初捐赠文物纪念展"分为“诸家合壁”<br>
					“历代陶瓷”“文房用品”和“青铜器”四个篇章</view>
				</view>
			</view>
			<view class="album-center">
				<view class="album-center-top">
					<txet class="block"></txet>
					<text class="album-center-title">解读雕像之花</text>
				</view>
				<view class="chair">
					<image src="../../static/images/wander-exhibits1.jpg" mode="aspectFill"></image>
					<view class="description">欧初捐赠文物纪念展"分为“诸家合壁”<br>
					“历代陶瓷”“文房用品”和“青铜器”四个篇章</view>
				</view>
			</view>
			<view class="album-bottom">
				<view class="album-bottom-top">
					<txet class="block"></txet>
					<text class="album-bottom-title">解读雕像之花</text>
				</view>
				<view class="chair">
					<image src="../../static/images/wander-exhibits1.jpg" mode="aspectFill"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				item:{}
			}
		},
		methods: {
			toCourse(){
				uni.navigateTo({
					url:"../course-template/course-template"
				})
			}
		},
		onLoad() {
			uni.$on('albumImg',(item) => {
				this.item=item;
				console.log(item);
			})
		}
	}
</script>

<style lang="less">
	.album-template{
		.album-body{
			width: 700rpx;
			margin: 0 auto;
			.album-top{
				margin-top: 20rpx;
				.album-top-top{
					width: 100%;
					line-height: 40rpx;
					height: 40rpx;
					.block{
						display: inline-block;
						width: 12rpx;
						height: 40rpx;
						background-color: #306FB6;
						margin-right: 20rpx;
						border-radius: 4rpx;
						vertical-align: text-top;
					}
					.album-top-title{
						font-size: 28rpx;
						color: #1E6CB5;
					}
				}
				.chair{
					text-align: center;
					margin-top: 20rpx;
					position: relative;
					left: 50%;
					transform: translateX(-50%);
					width: 680rpx;
					height: 460rpx;
					background-color: #E1E1DF;
					border-radius: 16rpx;
					image{
						width: 680rpx;
						height: 340rpx;
						border-radius: 16rpx;
						box-shadow: 0 0 0 0 #666,0 0 10rpx 0 #666,0 0 10rpx 0 #666,0 0 10rpx 0 #666;
					}
					.description{
						font-size: 26rpx;
						line-height: 48rpx;
					}
				}
			}
			.album-center{
				margin-top: 60rpx;
				.album-center-top{
					width: 100%;
					line-height: 40rpx;
					height: 40rpx;
					.block{
						display: inline-block;
						width: 12rpx;
						height: 40rpx;
						background-color: #306FB6;
						margin-right: 20rpx;
						border-radius: 4rpx;
						vertical-align: text-top;
					}
					.album-center-title{
						font-size: 28rpx;
						color: #1E6CB5;
					}
				}
				.chair{
					margin-top: 20rpx;
					text-align: center;
					position: relative;
					left: 50%;
					transform: translateX(-50%);
					width: 680rpx;
					height: 460rpx;
					background-color: #E1E1DF;
					border-radius: 16rpx;
					image{
						width: 680rpx;
						height: 340rpx;
						border-radius: 16rpx;
						box-shadow: 0 0 0 0 #666,0 0 10rpx 0 #666,0 0 10rpx 0 #666,0 0 10rpx 0 #666;
					}
					.description{
						font-size: 26rpx;
						line-height: 48rpx;
					}
				}
			}
			.album-bottom{
				margin-top: 60rpx;
				margin-bottom: 100rpx;
				.album-bottom-top{
					width: 100%;
					line-height: 40rpx;
					height: 40rpx;
					.block{
						display: inline-block;
						width: 12rpx;
						height: 40rpx;
						background-color: #306FB6;
						margin-right: 20rpx;
						border-radius: 4rpx;
						vertical-align: text-top;
					}
					.album-bottom-title{
						font-size: 28rpx;
						color: #1E6CB5;
					}
				}
				.chair{
					margin-top: 20rpx;
					text-align: center;
					position: relative;
					left: 50%;
					transform: translateX(-50%);
					width: 680rpx;
					height: 340rpx;
					image{
						width: 680rpx;
						height: 340rpx;
						border-radius: 16rpx;
						box-shadow: 0 0 0 0 #666,0 0 10rpx 0 #666,0 0 10rpx 0 #666,0 0 10rpx 0 #666;
					}
				}
			}
		}
	}
</style>
