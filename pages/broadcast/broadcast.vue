<template>
	<view class="living">
		<view class="living-main">
			<view class="living-top">
				<image src="../../static/images/wander-exhibits1.jpg" mode="aspectFill"></image>
				<view class="enter-living">直播回放</view>
				<view class="icons">
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
			<view class="living-center">
				<view class="text-title">&#65378;盛开在广州的花&#65379;</view>
				<view class="tabs">
					<text class="tab">颜色丰富</text>
					<text class="tab">草间弥生</text>
					<text class="tab">橘色</text>
				</view>
				<view class="text-content">虾忌与某些水果同吃。虾合有比较丰富的蛋白质和钙等营养物质，如果把它们与含有鞣酸的水果，如葡萄、石榴、山楂、柿子等同食，不仅会降低蛋白质的营养价值，而且鞣酸和钙酸结合形成鞣酸钙后会刺激肠胃。</view>
				<view class="map-block">
					<view class="map-top">
						<txet class="block"></txet>
						<text class="map-title">展览周边</text>
					</view>
					<map class="map" :enable-scroll='false' :longitude="longitude" :latitude="latitude" :markers="markers" :scale="scale"></map>
				</view>
				<!-- 回放没有提醒 -->
				<!-- <view class="remind">
					<view class="remind-top">
						<txet class="block"></txet>
						<text class="remind-title">看展提醒</text>
						<switch class="switch" checked="true" @change="" color="#0077AA"/>
					</view>
					<view class="remind-content">
						<text>看展时间</text>
						<text>9月28日</text>
						<text>25</text>
						<text>30</text>
					</view>
				</view> -->
			</view>
			<view class="living-bottom">
				<view class="shop-around">
					<view class="shop-around-top">
						<txet class="block"></txet>
						<text class="shop-around-title">展览周边</text>
					</view>
					<view class="auction">
						<view class="auction-work">
							<view class="auction-work-title">拍卖作品</view>
							<view class="auction-work-content">
								<view><image src="../../static/images/wander-exhibits1.jpg" mode="aspectFill"></image></view>
								<text>虾忌与某些水果同吃，虾忌与某些水果同水同吃</text>
							</view>
						</view>
						<view class="online-auction">
							<text class="online-auction-title">近期拍卖会</text>
							<view class="online-auction-content">
								<image src="../../static/images/wander-exhibits1.jpg" mode="aspectFill"></image>
							</view>
						</view>
					</view>
				</view>
				<view class="exhibits">
					<view class="exhibits-top">
						<txet class="block"></txet>
						<text class="exhibits-title">相关展品</text>
					</view>
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
			</view>
			<view class="comment">
				<view class="comment-top">
					<txet class="block"></txet>
					<text class="comment-title">评论</text>
					<text class="iconfont icon-pinglun">52</text>
				</view>
				<scroll-view scroll-x="true" class="comment-area">
					<view class="comment-body">
						<view class="comment-item">
							<view class="user-info">
								<view class="user-image"><image src="../../static/images/wander-exhibits1.jpg" mode="aspectFill"></image></view>
								<text class="user-id">草间弥生</text>
							</view>
							<view class="comment-content">
								<text>虾忌与某些水果同吃。虾含有比较丰富的蛋白质和钙等营养物质，如果把它们与合有鞣酸的水果。</text>
							</view>
						</view>
						<view class="comment-item">
							<view class="user-info">
								<view class="user-image"><image src="../../static/images/wander-exhibits1.jpg" mode="aspectFill"></image></view>
								<text class="user-id">草间弥生</text>
							</view>
							<view class="comment-content">
								<text>虾忌与某些水果同吃。虾含有比较丰富的蛋白质和钙等营养物质，如果把它们与合有鞣酸的水果。</text>
							</view>
						</view>
						<view class="comment-item">
							<view class="user-info">
								<view class="user-image"><image src="../../static/images/wander-exhibits1.jpg" mode="aspectFill"></image></view>
								<text class="user-id">草间弥生</text>
							</view>
							<view class="comment-content">
								<text>虾忌与某些水果同吃。虾含有比较丰富的蛋白质和钙等营养物质，如果把它们与合有鞣酸的水果。</text>
							</view>
						</view>
						<view class="comment-item">
							<view class="user-info">
								<view class="user-image"><image src="../../static/images/wander-exhibits1.jpg" mode="aspectFill"></image></view>
								<text class="user-id">草间弥生</text>
							</view>
							<view class="comment-content">
								<text>虾忌与某些水果同吃。虾含有比较丰富的蛋白质和钙等营养物质，如果把它们与合有鞣酸的水果。</text>
							</view>
						</view>
						<view class="comment-item">
							<view class="user-info">
								<view class="user-image"><image src="../../static/images/wander-exhibits1.jpg" mode="aspectFill"></image></view>
								<text class="user-id">草间弥生</text>
							</view>
							<view class="comment-content">
								<text>虾忌与某些水果同吃。虾含有比较丰富的蛋白质和钙等营养物质，如果把它们与合有鞣酸的水果。</text>
							</view>
						</view>
						<view class="comment-item">
							<view class="user-info">
								<view class="user-image"><image src="../../static/images/wander-exhibits1.jpg" mode="aspectFill"></image></view>
								<text class="user-id">草间弥生</text>
							</view>
							<view class="comment-content">
								<text>虾忌与某些水果同吃。虾含有比较丰富的蛋白质和钙等营养物质，如果把它们与合有鞣酸的水果。</text>
							</view>
						</view>
						<view class="comment-item">
							<view class="user-info">
								<view class="user-image"><image src="../../static/images/wander-exhibits1.jpg" mode="aspectFill"></image></view>
								<text class="user-id">草间弥生</text>
							</view>
							<view class="comment-content">
								<text>虾忌与某些水果同吃。虾含有比较丰富的蛋白质和钙等营养物质，如果把它们与合有鞣酸的水果。</text>
							</view>
						</view>
						<view class="comment-item">
							<view class="user-info">
								<view class="user-image"><image src="../../static/images/wander-exhibits1.jpg" mode="aspectFill"></image></view>
								<text class="user-id">草间弥生</text>
							</view>
							<view class="comment-content">
								<text>虾忌与某些水果同吃。虾含有比较丰富的蛋白质和钙等营养物质，如果把它们与合有鞣酸的水果。</text>
							</view>
						</view>
					</view>
				</scroll-view>
			</view>
			<view class="purchase">购买门票</view>
		</view>
		<loading :showLoading="showLoading"></loading>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				longitude:113.411806,
				latitude:23.053945,
				scale:13,
				markers:[
					{
						longitude:113.411806,
						latitude:23.053945,
						iconPath:'../../static/icon/location-map.png',
						width: 30,
						height: 30,
						alpha:0.3
					}
				],
				showLoading:true
			}
		},
		methods: {
			
		},
		onLoad(options) {
			console.log(options)
			this.showLoading = false;
		},
		onUnload() {
			this.showLoading = true;
		}
	}
</script>

<style lang="less">
	@color:#61A0E3;
	.living-main{
		width: 700rpx;
		margin: 0 auto;
		margin-bottom: 300rpx;
		//顶部区域
		.living-top{
			position: relative;
			image{
				width: 700rpx;
				height: 532rpx;
				border-radius: 24rpx;
			}
			// 68x27	12 0 0 12
			.enter-living{
				position: absolute;
				width: 136rpx;
				height: 54rpx;
				line-height: 54rpx;
				font-size: 26rpx;
				text-align: center;
				border-radius: 24rpx 0 0 24rpx;
				background-color: #fff;
				color: @color;
				top: 460rpx;
				right: 0;
			}
			.icons{
				width: 700rpx;
				height: 28rpx;
				display: flex;
				justify-content: flex-end;
				.icon{
					margin-right: 20rpx;
					text-align: center;
					.iconfont{
						width: 30rpx;
						height: 28rpx;
					}
					&:nth-child(2){
						.iconfont{
							color: @color;
							font-size: 36rpx;
						}
					}
					text{
						font-size: 20rpx;
					}
				}
			}
		}
		//中间区域：文字加上地图
		.living-center{
			margin-top: 50rpx;
			.text-title{
				font-size: 36rpx;
				color: #1E6CB5;
			}
			.tabs{
				width: 100%;
				margin-top: 20rpx;
				display: flex;
				font-size: 26rpx;
				color: #ccc;
				padding: 0 20rpx;
				.tab{
					box-sizing: border-box;
					display: inline-block;
					padding: 2rpx 26rpx 2rpx 26rpx;
					text-align: center;
					border: 2rpx solid #ccc;
					margin-right: 20rpx;
					border-radius: 18rpx;
					line-height: 34rpx;
				}
			}
			.text-content{
				text-indent: 2em;
				margin-top: 30rpx;
				font-size: 28rpx;
				color: #717175;
				line-height: 60rpx;
			}
			//地图区域
			.map-block{
				margin-top: 60rpx;
				.map-top{
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
					.map-title{
						font-size: 28rpx;
						color: #1E6CB5;
					}
				}
				.map{
					margin-top: 50rpx;
					width: 100%;
					height: 400rpx;
					border-radius: 30rpx;
					border: 2rpx solid #1E6CB5;
					overflow: hidden;
				}
			}
			//提醒区域
			.remind{
				margin-top: 60rpx;
				.remind-top{
					width: 100%;
					line-height: 40rpx;
					height: 40rpx;
					margin-bottom: 40rpx;
					.block{
						display: inline-block;
						width: 12rpx;
						height: 40rpx;
						background-color: #306FB6;
						margin-right: 20rpx;
						border-radius: 4rpx;
						vertical-align: text-top;
					}
					.remind-title{
						font-size: 28rpx;
						color: #1E6CB5;
						margin-right: 50rpx;
					}
					switch{
						transform: scale(0.7);
						position: relative;
						top: -2rpx;
					}
				}
				.remind-content{
					width: 100%;
					height: 80rpx;
					line-height: 80rpx;
					display: flex;
					justify-content: space-around;
					border: 2rpx solid @color;
					font-size: 30rpx;
					border-radius: 26rpx;
					padding: 0 10rpx;
					box-sizing: border-box;
					color: #0077AA;
				}
			}
		}
		.living-bottom{
			margin-top: 50rpx;
			.shop-around{
				.shop-around-top{
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
					.shop-around-title{
						font-size: 28rpx;
						color: #1E6CB5;
					}
				}
				.auction{
					margin-top: 40rpx;
					display: flex;
					justify-content: space-around;
					.auction-work{
						width: 40%;
						.auction-work-title{
							font-size: 28rpx;
							color: #0077AA;
						}
						.auction-work-content{
							width: 226rpx;
							height: 200rpx;
							margin-top: 20rpx;
							background-color: #C9DCF0;
							text-align: center;
							position: relative;
							padding: 20rpx 10rpx;
							font-size: 18rpx;
							box-sizing: border-box;
							border-radius: 24rpx;
							view{
								width: 164rpx;
								height: 100rpx;
								position: relative;
								left: 50%;
								transform: translateX(-50%);
								margin-bottom: 20rpx;
								background-color: #42537E;
								border-radius: 10rpx;
								image{
									width: 100%;
									height: 100%;
								}
							}
							
						}
					}
					.online-auction{
						width: 60%;
						.online-auction-title{
							font-size: 28rpx;
							color: #0077AA;
						}
						.online-auction-content{
							margin-top: 20rpx;
							image{
								width: 400rpx;
								height: 200rpx;
								border-radius: 24rpx;
							}
						}
					}
				}
			}
			.exhibits{
				margin-top: 40rpx;
				.exhibits-top{
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
					.exhibits-title{
						font-size: 28rpx;
						color: #1E6CB5;
					}
				}
				.exhibits-show{
					margin-top: 40rpx;
					width: 100%;
					overflow: hidden;
					.exhibits-show-body{
						height: 400rpx;
						display: flex;
						justify-content: flex-start;
						white-space: nowrap;
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
								color: #717175;
								white-space: normal;
							}
						}
					}
				}
			}
		}
		.comment{
			margin-top: 40rpx;
			.comment-top{
				width: 100%;
				line-height: 40rpx;
				height: 40rpx;
				position: relative;
				.block{
					display: inline-block;
					width: 12rpx;
					height: 40rpx;
					background-color: #306FB6;
					margin-right: 20rpx;
					border-radius: 4rpx;
					vertical-align: text-top;
				}
				.comment-title{
					font-size: 28rpx;
					color: #1E6CB5;
				}
				.icon-pinglun{
					position: absolute;
					right: 0;
					color: #5A79A1;
				}
			}
			.comment-area{
				width: 700rpx;
				margin-top: 40rpx;
				overflow: hidden;
				.comment-body{
					height: 212rpx;
					// display: flex;
					// justify-content: flex-start;
					white-space: nowrap;
					.comment-item{
						// 242x106
						// 左右间距
						// 13	12
						display: inline-block;
						width: 484rpx;
						height: 212rpx;
						padding: 20rpx 24rpx 20rpx 26rpx;
						background-color: #C9DCF0;
						border-radius: 24rpx;
						margin-right: 30rpx;
						box-sizing: border-box;
						.user-info{
							width: 100%;
							display: flex;
							.user-image{
								width: 74rpx;
								height: 74rpx;
								image{
									width: 100%;
									height: 100%;
									border-radius: 50%;
								}
							}
							.user-id{
								margin-left: 20rpx;
								line-height: 74rpx;
								font-size: 28rpx;
								color: #888;
							}
						}
						.comment-content{
							margin-top: 20rpx;
							line-height: 50rpx;
							font-size: 22rpx;
							color: #aaa;
							white-space: normal;
						}
					}
				}
			}
		}
		
		.purchase{
			// 254x52	12 0 46 12
			width: 508rpx;
			height: 104rpx;
			line-height: 104rpx;
			text-align: center;
			border-radius: 24rpx 0 92rpx 24rpx;
			background-color: #2275BB;
			color: #fff;
			position: fixed;
			right: -80rpx;
			bottom: 0;
			z-index: 2;
		}
	}
</style>
