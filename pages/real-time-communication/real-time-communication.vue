<template>
	<view class="real-time-communication">
		<view class="real-time-communication-body">
			<view class="communication-top">
				<image class="living" src="../../static/images/real-time-communication.jpg" mode="aspectFill"></image>
				<view class="icons">
					<view class="icon">
						<view class="iconfont icon-liaotian" @click="communicate"></view>
						<text>52</text>
					</view>
					<view class="icon">
						<view class="iconfont icon-shoucang"></view>
						<text>52</text>
					</view>
					<view class="icon">
						<view class="iconfont icon-shizhong"></view>
						<text>52</text>
					</view>
					<view class="icon">
						<view class="iconfont icon-fenxiang"></view>
						<text>52</text>
					</view>
				</view>
			</view>
			<view class="communication-center">
				<view class="description">
					<view class="description-top">
						<txet class="block"></txet>
						<text class="description-title">盛开在广州的花</text>
					</view>
					<text class="description-content">虾忌与某些水果同吃。虾合有比较丰富的蛋白质和钙等营养物质</text>
				</view>
			</view>
			<view class="communication-bottom">
				<view class="comment">
					<input type="text" class="comment-input" placeholder="      · · ·" :cursor="cursor" @focus="setCursor">
					<view class="iconfont icon-send"></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import nv from "../../component/pyh-nv/pyh-nv.vue"
	export default {
		data() {
			return {
				cursor:20
			}
		},
		components:{
			nv
		},
		methods: {
			setCursor(){
				this.cursor=-5;
				console.log(111)
			},
			communicate(){
				uni.navigateTo({
					url:'../communication-circle/communication-circle'
				});
			}
		},
		onLoad() {
			uni.setNavigationBarTitle({
				frontColor:'#1E6CB5'
			})
		}
	}
</script>

<style lang="less">
	.real-time-communication{
		.real-time-communication-body{
			width: 700rpx;
			margin: 0 auto;
			.communication-top{
				margin-top: 40rpx;
				.living{
					// 354x565	12
					width: 100%;
					height: 1130rpx;
					border-radius: 24rpx;
				}
				.icons{
					margin-top: 30rpx;
					width: 700rpx;
					height: 28rpx;
					display: flex;
					justify-content: flex-end;
					.icon{
						margin-right: 70rpx;
						text-align: center;
						.iconfont{
							width: 30rpx;
							height: 28rpx;
						}
						&:nth-child(3){
							.iconfont{
								color: #f00;
								font-size: 36rpx;
							}
						}
						text{
							font-size: 20rpx;
						}
						&:last-child{
						margin-right: 0;
						}
					}
					
				}
			}
			.communication-center{
				margin-top: 50rpx;
				.description{
					.description-top{
						width: 100%;
						line-height: 40rpx;
						height: 40rpx;
						.block{
							display: inline-block;
							width: 12rpx;
							height: 30rpx;
							background-color: #306FB6;
							margin-right: 20rpx;
							border-radius: 4rpx;
							vertical-align: middle;
						}
						.description-title{
							font-size: 28rpx;
							color: #1E6CB5;
						}
						margin-bottom: 30rpx;
					}
					.description-content{
						font-size: 28rpx;
						color: #888;
					}
				}
			}
			.communication-bottom{
				position: fixed;
				bottom: 0;
				.comment{
					width: 100%;
					display: flex;
					justify-content: space-between;
					.comment-input{
						// 313x30	15
						padding: 0 30rpx;
						box-sizing: border-box;
						width: 626rpx;
						height: 50rpx;
						border-radius: 30rpx;
						border: 2rpx solid #1E6CB5;
						font-size: 30rpx;
					}
					.iconfont{
						margin-left: 20rpx;
						font-size: 50rpx;
					}
				}
			}
		}
		margin-bottom: 100rpx;
	}
</style>
