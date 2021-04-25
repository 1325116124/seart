<template>
	<view class="communication-circle">
		<view class="communication-circle-body">
			<view class="circle-top">
				<text class="block"></text>
				<view class="title">
					<view v-for="(item,index) in titles" class="circle-top-title" 
					:class="{active:index===currentIndex}" @click="getIndex(index)" 
					:key='index' >{{item}}
					</view>
				</view>
			</view>
			<view class="circle-center">
				<scroll-view class="exhibits-show" scroll-x="true">
					<view class="exhibits-show-body">
						<view class="exhibits-item">
							<view><image src="../../static/images/wander-exhibits1.jpg" mode="aspectFill"></image></view>
							<text>紫砂壶，形状奇特，外形由手工控制而成</text>
						</view>
						<view class="exhibits-item">
							<view><image src="../../static/images/wander-exhibits1.jpg" mode="aspectFill"></image></view>
							<text>紫砂壶，形状奇特，外形由手工控制而成</text>
						</view>
						<view class="exhibits-item">
							<view><image src="../../static/images/wander-exhibits1.jpg" mode="aspectFill"></image></view>
							<text>紫砂壶，形状奇特，外形由手工控制而成</text>
						</view>
						<view class="exhibits-item">
							<view><image src="../../static/images/wander-exhibits1.jpg" mode="aspectFill"></image></view>
							<text>紫砂壶，形状奇特，外形由手工控制而成</text>
						</view>
						<view class="exhibits-item">
							<view><image src="../../static/images/wander-exhibits1.jpg" mode="aspectFill"></image></view>
							<text>紫砂壶，形状奇特，外形由手工控制而成</text>
						</view>
						<view class="exhibits-item">
							<view><image src="../../static/images/wander-exhibits1.jpg" mode="aspectFill"></image></view>
							<text>紫砂壶，形状奇特，外形由手工控制而成</text>
						</view>
						<view class="exhibits-item">
							<view><image src="../../static/images/wander-exhibits1.jpg" mode="aspectFill"></image></view>
							<text>紫砂壶，形状奇特，外形由手工控制而成</text>
						</view>
						<view class="exhibits-item">
							<view><image src="../../static/images/wander-exhibits1.jpg" mode="aspectFill"></image></view>
							<text>紫砂壶，形状奇特，外形由手工控制而成</text>
						</view>
					</view>
				</scroll-view>
			</view>
			<view class="circle-bottom"></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				titles:["一号展厅","二号展厅","三号展厅"],
				currentIndex:0,
			}
		},
		methods: {
			getIndex(index){
				this.currentIndex=index;
			}
		}
	}
</script>

<style lang="less">
	.communication-circle{
		.communication-circle-body{
			width: 700rpx;
			margin: 0 auto;
			margin-top: 40rpx;
			.circle-top{
				width: 100%;
				line-height: 40rpx;
				height: 40rpx;
				display: flex;
				justify-content: flex-start;
				.block{
					display: inline-block;
					width: 12rpx;
					height: 40rpx;
					background-color: #006FFF;
					border-radius: 4rpx;
					vertical-align: text-top;
				}
				.title{
					display: flex;
					justify-content: space-around;
					width: 600rpx;
					.circle-top-title{
						font-size: 32rpx;
						transition: all 0.2s ease;
						&:first-child{
							margin-left: -20rpx;
						}
					}
					.active{
						color: #006FFF;
					}
				}
			}
			.circle-center{
				width: 100%;
				.exhibits-show{
					margin-top: 50rpx;
					width: 100%;
					height: 400rpx;
					overflow: hidden;
					.exhibits-show-body{
						display: flex;
						justify-content: flex-start;
						white-space: nowrap;
						height: 100%;
						.exhibits-item{
							display: inline-block;
							width: 300rpx;
							height: 400rpx;
							background-color: #C9DCF0;
							position: relative;
							padding: 40rpx 50rpx 0 50rpx;
							box-sizing: border-box;
							border-radius: 24rpx;
							margin-right: 30rpx;
							view{
								width: 220rpx;
								height: 220rpx;
								position: relative;
								left: 50%;
								transform: translateX(-50%);
								margin-bottom: 30rpx;
								image{
									width: 100%;
									height: 100%;
									border-radius: 10rpx;
								}
							}
							text{
								font-size: 20rpx;
								line-height: 40rpx;
								color: #707070;
								white-space: normal;
							}
						}
					}
				}
			}
		}
	}
</style>
