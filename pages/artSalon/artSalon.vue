<template>
	<view class="course-template">
		<view class="course-body">
			<view class="course-top">
				<view class="course-top-top">
					<image :src="salon.introImage" mode="aspectFill" @tap="toBroadcast"></image>
					<view class="enter-living" @tap="toBroadcast" v-show="salon.status===1||salon.status===0">进入直播</view>
					<view class="enter-living" @tap="toBroadcast" v-show="salon.status===2">进入回放</view>
					<view class="icons">
						<button @tap="clickFavours" class="icon">
							<view class="icon-box">
								<view class="iconfont icon-shoucang" :class="{iconActive:favours}"></view>
								<text>{{salon.favours}}</text>
							</view>
						</button>
						<button @tap="clickParticipants" class="icon">
							<view class="icon-box"> 
								<view class="iconfont icon-shizhong" :class="{iconActive:participants}"></view>
								<text>{{salon.participants}}</text>
							</view>
						</button>
						<button @tap="clickShares" open-type="share"  class="icon">
							<view class="icon-box">
								<view class="iconfont icon-fenxiang" :class="{iconActive:true}"></view>
								<text>{{salon.shares}}</text>
							</view>
						</button>
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
				<view class="course-center-top"  v-if="salon.members.length">
					<view class="course-center-top-top">
						<txet class="block"></txet>
						<text class="course-center-top-title">主讲团队</text>
					</view>
					<view class="course-center-top-bottom">
						<scroll-view class="team-show" scroll-x="true">
							<view class="team-show-body">
								<view class="team-item" v-for="(item,index) in salon.members" :key="index">
									<view><image :src="item.portrait" mode="aspectFill"></image></view>
									<text>{{item.introduction}}</text>
								</view>
							</view>
						</scroll-view>
					</view>
				</view>
			</view>
			<view class="course-bottom">
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
		<view class="purchase">购买门票</view>
		</view>
		<loading :showLoading="showLoading"></loading>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id:0,
				salon:{},
				//存放缓存中的用户信息
				userInfo:{},
				//收藏的标志，默认为不收藏
				favours:false,
				//打卡的标志，默认为不打卡
				participants:false,
				showLoading:true,
				//评论数
				commentNum:0,
				// 评论数据
				commentInfo:{},
			}
		},
		watch:{
			commentNum:function(){
				this.getComment()
			}
		},
		methods: {
			toBroadcast(){
				uni.navigateTo({
					url:"../real-time-communication/real-time-communication?id=" + this.id + "&type=1"
				})
			},
			async getSalonDetail(){
				const res = await this.$myRequest({
					url:"/salons/"+this.id
				})
				this.salon=res.data.data;
				//处理传回来的json团队成员信息
				let tempArr=[]
				let tempObj = {}
				if(this.salon.members){
					for(let i = 0;i < this.salon.members.length;i++){
						tempObj = this.salon.members[i]
						tempArr.push(tempObj);
					}
				}
				this.salon.members=tempArr;
			},
			//点击收藏按钮的相关操作
			clickFavours(){
				let isFavour = 0;
				this.favours = !this.favours
				if(this.favours){
					isFavour = 1;
				}else{
					isFavour = -1;
				}
				this.$myRequest({
					url:"/shows/" + this.id + "/favours",
					method:"PUT",
					header:{
						'content-type': 'application/x-www-form-urlencoded;charset=utf-8' 
					},
					data:{
						userId:this.userInfo.openId,
						isFavour:isFavour
					},
					success: res => {
						console.log(res)
					},
					fail: err => {
						console.log(err)
					}
				})
				//click完之后重新调取api获取数据
				this.getSalonDetail()
			},
			//点击打卡图标的相关操作
			clickParticipants(){
				let isParticipant = 0;
				this.participants = !this.participants
				if(this.participants){
					isParticipant = 1;
				}else{
					isParticipant = -1;
				}
				this.$myRequest({
					url:"/shows/" + this.id + "/participants",
					method:"PUT",
					header:{
						'content-type': 'application/x-www-form-urlencoded;charset=utf-8' 
					},
					data:{
						userId:this.userInfo.openId,
						isParticipant:isParticipant
					},
					success: res => {
						console.log(res)
					},
					fail: err => {
						console.log(err)
					}
				})
				//click完之后重新调取api获取数据
				this.getSalonDetail()
			},
			//点击分享图标的操作
			clickShares(){
				this.$myRequest({
					url:"/shows/" + this.id + "/shares",
					method:"PUT",
					header:{
						'content-type': 'application/x-www-form-urlencoded;charset=utf-8' 
					},	
				})
				//click完之后重新调取api获取数据
				this.getSalonDetail()
				uni.share({
					provider: "weixin",
					scene: "WXSceneSession",
					type: 1,
					summary: "快来和我一起看沙龙",
					success: function (res) {
						console.log("success:" + JSON.stringify(res));
					},
					fail: function (err) {
						console.log("fail:" + JSON.stringify(err));
					}
				})
			},
			//获取缓存中的用户信息
			getUserInfo(){
				if(uni.getStorageSync('user')){
					this.userInfo = uni.getStorageSync('user')
				}
			},
			//获取评论数
			async getCommentNum(){
				const res = await this.$myRequest({
					url:"/comments/1/" + this.id + "/pages"
				})
				this.commentNum = res.data.data
			},
			//获取所有的评论
			async getComment(){
				const res = await this.$myRequest({
					// /comment/1/16/0/14
					url:"/comments/1/" + this.id + "/0/" + this.commentNum
				})
				this.commentInfo = res.data.data
			}
		},
		onLoad(options) {
			this.id=options.id
			this.getSalonDetail()
			this.getUserInfo()
			this.getCommentNum()
			this.showLoading = false;
		},
		onUnload() {
			this.showLoading = true;
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
						top: 350rpx;
						right: 0;
					}
					// 68x27	12 0 0 12
					overflow: hidden;
					.icons{
						margin-top: -8rpx;
						display: flex;
						justify-content: space-around;
						position: relative;
						width: 220rpx;
						height: 100rpx;
						float: right;
						.icon{
							background-color: #fff;
							position: relative;
							// height: 80rpx;
							.icon-box{
								display: flex;
								flex-direction: column;
								justify-content: space-around;
								height: 50rpx;
								font-weight: bold;
								.iconfont{
									font-size: 36rpx;
								}
							}
							text{
								position: absolute;
								top: 40rpx;
								right: 12rpx;
								font-size: 20rpx;
							}
							&::after{
							   border: none;
							  }
							  margin: 0;
							  padding: 0;
							  .iconActive{
								color: #0069D6;
							}
						}
					}
				}
				.course-top-center{
					padding-left: 40rpx;
					margin-top: -20rpx;
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
								// height: 452rpx;
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
