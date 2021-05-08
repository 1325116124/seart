<template>
	<view class="living">
		<view class="living-main">
			<view class="living-top">
				<image :src="exhibitionDetail.introImage" mode="aspectFill" @tap="toBroadcast"></image>
				<view class="enter-living" @tap="toBroadcast" v-show="exhibitionDetail.status===1||exhibitionDetail.status===0">进入直播</view>
				<view class="enter-living" @tap="toBroadcast" v-show="exhibitionDetail.status===2">进入回放</view>
				<view class="icons">
					<view class="icon" @tap="clickFavours">
						<view class="iconfont icon-shoucang" :class="{iconActive:favours}"></view>
						<text>{{exhibitionDetail.favours}}</text>
					</view>
					<view class="icon" @tap="clickParticipants">
						<view class="iconfont icon-shizhong" :class="{iconActive:participants}"></view>
						<text>{{exhibitionDetail.participants}}</text>
					</view>
					<button @tap="clickShares" open-type="share">
						<view class="icon">
							<view class="iconfont icon-fenxiang" :class="{iconActive:true}"></view>
							<text>{{exhibitionDetail.shares}}</text>
						</view>
					</button>
				</view>
			</view>
			<view class="living-center">
				<view class="text-title">&#65378;{{exhibitionDetail.name}}&#65379;</view>
				<view class="tabs">
					<text class="tab" v-for="(item,index) in exhibitionDetail.tags" :key="index">{{item}}</text>
				</view>
				<view class="text-content">{{exhibitionDetail.introduction}}</view>
				<view class="map-block">
					<view class="map-top">
						<txet class="block"></txet>
						<text class="map-title">地图导航</text>
					</view>
					<map class="map" :longitude="exhibitionDetail.longitude" :latitude="exhibitionDetail.latitude" :scale="scale"></map>
				</view>
				<view class="remind">
					<view class="remind-top">
						<text class="block"></text>
						<text class="remind-title">看展提醒</text>
						<switch class="switch" checked="true" @change="" color="#0077AA"/>
					</view>
					<view class="remind-content">
						<text>看展时间</text>
						<text>9月28日</text>
						<text>25</text>
						<text>30</text>
					</view>
				</view>
			</view>
			<view class="living-bottom">
				<view class="shop-around">
					<view class="shop-around-top">
						<text class="block"></text>
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
				<view class="exhibits" v-if="exhibits">
					<view class="exhibits-top">
						<text class="block"></text>
						<text class="exhibits-title">相关展品</text>
					</view>
					<scroll-view class="exhibits-show" scroll-x="true">
						<view class="exhibits-show-body">
							<view class="exhibits-item" v-for="(item,index) in exhibits" :key="item.id">
								<view><image :src="item.images" mode="aspectFill"></image></view>
								<text>{{item.introduction}}</text>
							</view>
						</view>
					</scroll-view>
				</view>
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
				//存放点击跳转过来的展览的id
				id:0,
				//存放缓存中的用户信息
				userInfo:{},
				//存放保存的展览信息
				exhibitionDetail:{},
				//存放相关的展品信息
				exhibits:{},
				scale:15,
				markers:[
					{
						iconPath:'../../static/icon/location-map.png',
						width: 30,
						height: 30,
						alpha:0.3,
						longitude:0,
						latitude:0
					}
				],
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
					url:"../real-time-communication/real-time-communication?id=" + this.id + "&type=0"
				})
			},
			//获取评论数
			async getCommentNum(){
				const res = await this.$myRequest({
					url:"/comment/getPages/0/" + this.id
				})
				this.commentNum = res.data.data
			},
			//获取所有的评论
			async getComment(){
				const res = await this.$myRequest({
					// /comment/1/16/0/14
					url:"/comment/0/" + this.id + "/0/" + this.commentNum
				})
				this.commentInfo = res.data.data
			},
			async getExhibitionDetail(){
				const res = await this.$myRequest({
					url:"/exhibitions/"+this.id
				})
				this.exhibitionDetail=res.data.data;
				this.markers[0].longitude=this.exhibitionDetail.longitude;
				this.markers[0].latitude=this.exhibitionDetail.latitude;
			},
			async getNearbyExhibitions(){
				const res = await this.$myRequest({
					url:"/exhibitions/" + this.id + "/exhibits"
				})
				this.exhibits=res.data.data;
				
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
				this.getExhibitionDetail()
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
						
					},
					fail: err => {
						
					}
				})
				//click完之后重新调取api获取数据
				this.getExhibitionDetail()
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
				this.getExhibitionDetail()
				uni.share({
					provider: "weixin",
					scene: "WXSceneSession",
					type: 1,
					summary: "直播马上开始啦！赶紧跟我一起看呀！",
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
			}
		},
		onLoad(options) {
			this.id=options.id
			this.getExhibitionDetail()
			this.getNearbyExhibitions()
			this.getUserInfo();
			this.getCommentNum()
			this.showLoading = false;
		},
		onUnload() {
			this.showLoading = true;
		},
		onShow() {
			this.getExhibitionDetail()
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
				height: 500rpx;
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
				top: 428rpx;
				right: 0;
			}
			.icons{
				width: 700rpx;
				height: 28rpx;
				display: flex;
				justify-content: flex-end;
				.icon{
					margin-right: 40rpx;
					text-align: center;
					font-weight: bold;
					.iconfont{
						width: 30rpx;
						height: 28rpx;
					}
					&:nth-child(2){
						.iconfont{
							font-size: 36rpx;
						}
					}
					&:last-child{
						width: 40rpx;
						height: 100rpx;
						margin-right: 0;
						position: absolute;
						top: -22rpx;
						left: 4rpx;
						display: flex;
						align-items: flex-start;
						flex-wrap: wrap;
						text{
							margin-top:57%;
						}
					}
					text{
						font-size: 20rpx;
					}
					.iconActive{
						color: #0069D6;
					}
				}
				button {
					width: 40rpx;
					height: 100rpx;
				  background-color: #fff;
				  &::after{
				   border: none;
				  }
				  margin: 0;
				  padding: 0;
				 }
			}
		}
		//中间区域：文字加上地图
		.living-center{
			margin-top: 50rpx;
			.text-title{
				font-size: 32rpx;
				color: #0069D6;
			}
			.tabs{
				width: 100%;
				margin-top: 20rpx;
				display: flex;
				font-size: 20rpx;
				color: #4E72A5;
				padding: 0 20rpx;
				.tab{
					box-sizing: border-box;
					display: inline-block;
					padding: 2rpx 26rpx 2rpx 26rpx;
					text-align: center;
					border: 2rpx solid #A5B7D1;
					margin-right: 20rpx;
					border-radius: 18rpx;
					line-height: 34rpx;
				}
			}
			.text-content{
				text-indent: 2em;
				margin-top: 30rpx;
				font-size: 28rpx;
				color: #707070;
				line-height: 60rpx;
			}
			//地图区域
			.map-block{
				margin-top: 80rpx;
				.map-top{
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
					.map-title{
						font-size: 28rpx;
						color: #4F73A5;
						font-weight: bold;
					}
				}
				.map{
					margin-top: 50rpx;
					width: 100%;
					height: 428rpx;
					border-radius: 30rpx;
					border: 2rpx solid #006FFF;
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
					margin-bottom: 80rpx;
					.block{
						display: inline-block;
						width: 12rpx;
						height: 40rpx;
						background-color: #21277B;
						margin-right: 20rpx;
						border-radius: 4rpx;
						vertical-align: text-top;
					}
					.remind-title{
						font-size: 28rpx;
						color: #4F73A5;
						margin-right: 50rpx;
						font-weight: bold;
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
					border: 2rpx solid #006AD7;
					font-size: 28rpx;
					border-radius: 26rpx;
					padding: 0 10rpx;
					box-sizing: border-box;
					color: #4F73A5;
				}
			}
		}
		.living-bottom{
			margin-top: 80rpx;
			.shop-around{
				.shop-around-top{
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
					.shop-around-title{
						font-size: 28rpx;
						color: #4F73A5;
						font-weight: bold;
					}
				}
				.auction{
					margin-top: 40rpx;
					display: flex;
					justify-content: space-around;
					.auction-work{
						width: 40%;
						.auction-work-title{
							font-size: 26rpx;
							color: #5F83B1;
						}
						.auction-work-content{
							width: 226rpx;
							height: 200rpx;
							margin-top: 20rpx;
							text-align: center;
							position: relative;
							padding: 20rpx 10rpx;
							font-size: 16rpx;
							border-radius: 24rpx;
							border: 4rpx solid #3742DF;
							color: #707070;
							box-sizing: border-box;
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
							font-size: 26rpx;
							color: #5F83B1;
						}
						.online-auction-content{
							margin-top: 20rpx;
							image{
								width: 100%;
								height: 200rpx;
								border-radius: 24rpx;
							}
						}
					}
				}
			}
			.exhibits{
				margin-top: 50rpx;
				.exhibits-top{
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
					.exhibits-title{
						font-size: 28rpx;
						color: #4F73A5;
						font-weight: bold;
					}
				}
				.exhibits-show{
					margin-top: 60rpx;
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
								color: #707070;
								white-space: normal;
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
</style>
