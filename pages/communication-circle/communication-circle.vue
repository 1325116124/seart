<template>
	<view class="communication-circle">
		<view class="communication-circle-body">
			<view class="circle-top" v-if="type==0">
				<text class="block"></text>
				<view class="title">
					<view v-for="(item,index) in titles" class="circle-top-title" 
					:class="{active:index===currentIndex}" @click="getIndex(index)" 
					:key='index'>{{item}}
					</view>
				</view>
			</view>
			<view class="circle-center" v-if="type==0">
				<scroll-view class="exhibits-show" scroll-x="true">
					<view class="exhibits-show-body">
						<view class="exhibits-item" v-for="(item,index) in exhibits" :key="item.id">
							<view><image :src="item.images" mode="aspectFill"></image></view>
							<text>{{item.name}}</text>
						</view>
					</view>
				</scroll-view>
			</view>
			<view class="circle-bottom">
				<view class="comment" v-if="commentNum > 0">
					<view class="comment-top">
						<txet class="block"></txet>
						<text class="comment-title">评论</text>
						<text class="iconfont icon-pinglun">{{commentNum}}</text>
					</view>
					<scroll-view scroll-x="true" class="comment-area">
						<view class="comment-body">
							<view class="comment-item" v-for="(item,index) in commentInfo" :key="item.id">
								<view class="user-info">
									<view class="user-image"><image :src="item.avatar" mode="aspectFill"></image></view>
									<text class="user-id"{{item.nickName}}</text>
								</view>
								<view class="comment-content">
									<text>{{item.content}}</text>
								</view>
							</view>
						</view>
					</scroll-view>
				</view>
			</view>
		</view>
		<!-- 查看评论的模块（测试） -->
		
		<loading :showLoading="showLoading"></loading>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				titles:["一号展厅","二号展厅","三号展厅"],
				currentIndex:0,
				showLoading:true,
				id:0,
				type:0,
				exhibits:{},
				//评论数
				commentNum:0,
				// 评论数据
				commentInfo:{},
			}
		},
		methods: {
			getIndex(index){
				this.currentIndex=index;
			},
			async getNearbyExhibitions(){
				const res = await this.$myRequest({
					url:"/exhibitions/" + this.id + "/exhibits"
				})
				this.exhibits=res.data.data;
				
			},
			//获取评论数
			async getCommentNum(){
				const res = await this.$myRequest({
					url:"/comment/getPages/" + this.type + "/" + this.id
				})
				this.commentNum = res.data.data
			},
			//获取所有的评论
			async getComment(){
				const res = await this.$myRequest({
					// /comment/1/16/0/14
					url:"/comment/" + this.type + "/" + this.id + "/0/" + this.commentNum
				})
				this.commentInfo = res.data.data
			},
		},
		watch:{
			commentNum:function(){
				this.getComment()
			}
		},
		onLoad(options) {
			
			this.id = options.id
			this.type = options.type
			console.log(options)
			if(this.type==0){
				this.getNearbyExhibitions()
			}
			this.getCommentNum()
			this.showLoading = false;
		},
		onUnload() {
			this.showLoading = true
		}
	}
</script>

<style lang="less">
	.communication-circle{
		.communication-circle-body{
			width: 700rpx;
			margin: 0 auto;
			.circle-top{
				margin-top: 40rpx;
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
			.circle-bottom{
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
									margin-top: 40rpx;
									// line-height: 50rpx;
									height: 35rpx;
									width: 100%;
									overflow: hidden;
									font-size: 22rpx;
									color: #aaa;
									white-space: normal;
								}
							}
						}
					}
				}
							
			}
		}
	}
</style>
