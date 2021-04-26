<template>
	<view class="course-template">
		<view class="course-body">
			<view class="course-top">
				<view class="course-top-top">
					<image :src="salon.introImage" mode="aspectFill"></image>
					<view class="icons">
						<view class="icon">
							<view class="iconfont icon-shoucang"></view>
							<text>{{salon.favours}}</text>
						</view>
						<view class="icon">
							<view class="iconfont icon-shizhong"></view>
							<text>{{salon.participants}}</text>
						</view>
						<view class="icon">
							<view class="iconfont icon-fenxiang"></view>
							<text>{{salon.shares}}</text>
						</view>
					</view>
				</view>
				<view class="course-top-center">
					<view class="course-time">时间:2020.11.03-11.09</view>
					<view class="course-member">主讲成员:周杰题、将朝南</view>
				</view>
				<view class="course-top-bottom">
					<view class="course-top-bottom-top">
						<txet class="block"></txet>
						<text class="course-top-bottom-title">沙龙介绍</text>
					</view>
					<view class="text-content">{{salon.introduction}}</view>
				</view>
			</view>
			<view class="course-center">
				<view class="course-center-top">
					<view class="course-center-top-top">
						<txet class="block"></txet>
						<text class="course-center-top-title">主讲团队</text>
					</view>
					<view class="course-center-top-bottom">
						<scroll-view class="team-show" scroll-x="true">
							<view class="team-show-body">
								<view class="team-item" v-for="(item,index) in salon.membersPortrait" :key="index">
									<view><image :src="item" mode="aspectFill"></image></view>
									<text>{{salon.membersIntro[index]}}</text>
								</view>
							</view>
						</scroll-view>
					</view>
				</view>
			</view>
			<view class="course-bottom">
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
						</view>
					</scroll-view>
				</view>
			</view>
		<view class="purchase">购买门票</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id:0,
				salon:{}
			}
		},
		methods: {
			async getSalonDetail(){
				const res = await this.$myRequest({
					url:"/salon/"+this.id
				})
				this.salon=res.data.data;
				console.log(this.salon)
			}
		},
		onLoad(options) {
			this.id=options.id
			this.getSalonDetail()
		}
	}
</script>

<style lang="less">
	@color:#61A0E3;
	.course-template{
		.course-body{
			width: 700rpx;
			margin: 0 auto;
			.course-top{
				.course-top-top{
					position: relative;
					image{
						width: 700rpx;
						height: 432rpx;
						border-top-left-radius: 24rpx;
						border-top-right-radius: 24rpx;
						border-bottom-right-radius: 40rpx;
						border-bottom-left-radius: 40rpx;
					}
					// 68x27	12 0 0 12
					.icons{
						width: 700rpx;
						height: 28rpx;
						display: flex;
						justify-content: flex-end;
						.icon{
							margin-right: 40rpx;
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
							&:last-child{
								margin-right: 20rpx;
							}
							text{
								margin-top: 10rpx;
								font-size: 18rpx;
							}
						}
					}
				}
				.course-top-center{
					padding-left: 40rpx;
					margin-top: 34rpx;
					font-size: 28rpx;
					line-height: 44rpx;
					color: #707070;
					letter-spacing: 2rpx;
					.course-member{
						margin-top: 18rpx;
					}
				}
				.course-top-bottom{
					margin-top: 80rpx;
					.course-top-bottom-top{
						width: 100%;
						line-height: 40rpx;
						height: 40rpx;
						.block{
							display: inline-block;
							width: 12rpx;
							height: 40rpx;
							background-color: #21277B;
							margin-right: 20rpx;
							border-radius: 4rpx;
							vertical-align: text-top;
						}
						.course-top-bottom-title{
							font-size: 28rpx;
							color: #4F73A5;
							font-weight: bold;
						}
					}
					.text-content{
						text-indent: 2em;
						margin-top: 30rpx;
						font-size: 28rpx;
						color: #707070;
						line-height: 50rpx;
					}
				}
			}
			.course-center{
				margin-bottom: 60rpx;
				.course-center-top{
					margin-top: 80rpx;
					.course-center-top-top{
						width: 100%;
						line-height: 40rpx;
						height: 40rpx;
						.block{
							display: inline-block;
							width: 12rpx;
							height: 40rpx;
							background-color: #21277B;
							margin-right: 20rpx;
							border-radius: 4rpx;
							vertical-align: text-top;
						}
						.course-center-top-title{
							font-size: 28rpx;
							color: #4F73A5;
							font-weight: bold;
						}
					}
					.course-center-top-bottom{
						.team-show{
							margin-top: 40rpx;
							width: 100%;
							overflow: hidden;
							.team-show-body{
								height: 452rpx;
								display: flex;
								justify-content: flex-start;
								white-space: nowrap;
								.team-item{
									display: inline-block;
									width: 300rpx;
									height: 452rpx;
									background-color: #C9DCF0;
									position: relative;
									padding: 40rpx 50rpx 0 50rpx;
									box-sizing: border-box;
									border-radius: 24rpx;
									margin-right: 30rpx;
									view{
										width: 220rpx;
										height: 288rpx;
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
				.course-center-bottom{
					margin-top: 60rpx;
					.course-center-bottom-top{
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
						.course-center-bottom-title{
							font-size: 28rpx;
							color: #1E6CB5;
						}
					}
					.course-center-bottom-bottom{
						margin-top: 40rpx;
						.question-item{
							width: 100%;
							margin-top: 20rpx;
							.question{
								padding-left: 50rpx;
								font-size: 28rpx;
								.question-index{
									color: #3679BD;
									font-weight: bold;
								}
								.question-title{
									margin-left: 16rpx;
									color: @color;
									font-size: 28rpx;
								}
							}
							.answer-time{
								margin-top: 20rpx;
								text-align: center;
								background-color: #C9DCF0;
								font-size: 26rpx;
								line-height: 70rpx;
								border-radius: 16rpx;
								color: #555;
							}
						}
					}
				}
			}
			.course-bottom{
				margin-bottom: 500rpx;//预留位置
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
	}
</style>
