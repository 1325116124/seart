<template>
	<view class="course-template">
		<view class="course-body">
			<view class="course-top">
				<view class="course-top-top">
					<image :src="course.introImage" mode="aspectFill"></image>
					<view class="icons">
						<view class="icon">
							<view class="iconfont icon-shoucang"></view>
							<text>{{course.favours}}</text>
						</view>
						<view class="icon">
							<view class="iconfont icon-shizhong"></view>
							<text>{{course.participants}}</text>
						</view>
						<view class="icon">
							<view class="iconfont icon-fenxiang"></view>
							<text>{{course.shares}}</text>
						</view>
					</view>
				</view>
				<view class="course-top-center">
					<view class="course-time">开播时间:2020.11.03-11.09</view>
					<view class="course-member">主讲成员:<text v-for="(item,index) in course.membersName">{{item}}</text></view>
				</view>
				<view class="course-top-bottom">
					<view class="course-top-bottom-top">
						<txet class="block"></txet>
						<text class="course-top-bottom-title">课程介绍</text>
					</view>
					<view class="text-content">{{course.introduction}}</view>
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
								<view class="team-item" v-for="(item,index) in course.membersPortrait" :key="index">
									<view><image :src="item" mode="aspectFill"></image></view>
									<text>{{course.membersIntro[index]}}</text>
								</view>
							</view>
						</scroll-view>
					</view>
				</view>
				<view class="course-center-bottom">
					<view class=".course-center-bottom-top">
						<txet class="block"></txet>
						<text class="course-center-bottom-title">课程内容</text>
					</view>
					<view class="course-center-bottom-bottom">
						<view class="question-item">
							<view class="question">
								<text class="question-index">01</text>
								<text class="question-title">什么是艺术？</text>
							</view>
							<view class="answer-time">2020年7月5日 14:00:00</view>
						</view>
						<view class="question-item">
							<view class="question">
								<text class="question-index">02</text>
								<text class="question-title">艺术的思辨思维</text>
							</view>
							<view class="answer-time">2020年7月5日 14:00:00</view>
						</view>
						<view class="question-item">
							<view class="question">
								<text class="question-index">03</text>
								<text class="question-title">艺术中的理想状态</text>
							</view>
							<view class="answer-time">2020年7月5日 14:00:00</view>
						</view>
						<view class="question-item">
							<view class="question">
								<text class="question-index">04</text>
								<text class="question-title">生活中国的艺术品</text>
							</view>
							<view class="answer-time">2020年7月5日 14:00:00</view>
						</view>
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
				course:[]
			}
		},
		methods: {
			async getCourseDetail(){
				const res = await this.$myRequest({
					url:"/courses/"+this.id
				})
				this.course=res.data.data;
				console.log(this.course)
			}
		},
		onLoad(options) {
			this.id=options.id
			this.getCourseDetail()
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
						height: 450rpx;
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
					margin-top: 50rpx;
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
					margin-top: 40rpx;
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
							background-color: #21277B;
							margin-right: 20rpx;
							border-radius: 4rpx;
							vertical-align: text-top;
						}
						.course-center-bottom-title{
							font-size: 28rpx;
							color: #4F73A5;
						}
					}
					.course-center-bottom-bottom{
						margin-top: 40rpx;
						.question-item{
							width: 100%;
							margin-top: 20rpx;
							.question{
								padding-left: 50rpx;
								font-size: 32rpx;
								.question-index{
									color: #006FFF;
									font-weight: bold;
								}
								.question-title{
									margin-left: 16rpx;
									color: #5F83B1;
									font-size: 28rpx;
								}
							}
							.answer-time{
								margin-top: 30rpx;
								text-align: center;
								background-color: #C9DCF0;
								font-size: 22rpx;
								line-height: 50rpx;
								border-radius: 16rpx;
								color: #4F73A5;
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
							background-color: #21277B;
							margin-right: 20rpx;
							border-radius: 4rpx;
							vertical-align: text-top;
						}
						.comment-title{
							font-size: 28rpx;
							color: #4F73A5;
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
				width: 100%;
				height: 104rpx;
				line-height: 104rpx;
				text-align: center;
				background-color: #006AD7;
				color: #fff;
				position: fixed;
				right: 0;
				bottom: 0;
				z-index: 2;
			}
		}
	}
</style>
