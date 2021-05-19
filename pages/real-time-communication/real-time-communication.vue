<template>
	<view class="real-time-communication">
		<view class="real-time-communication-body">
			<view class="communication-top">
				<image class="living" :src="currentDetail.introImage" mode="aspectFill"></image>
				<view class="icons">
					<button  @click="toCommunicate" class="icon">
						<view class="icon-box">
							<view class="iconfont icon-liaotian"></view>
							<text>{{commentNum}}</text>
						</view>
					</button>
					<button @tap="clickFavours" class="icon">
						<view class="icon-box">
							<view class="iconfont icon-shoucang" :class="{iconActive:favours}"></view>
							<text>{{currentDetail.favours}}</text>
						</view>
					</button>
					<button @tap="clickParticipants" class="icon">
						<view class="icon-box"> 
							<view class="iconfont icon-shizhong" :class="{iconActive:participants}"></view>
							<text>{{currentDetail.participants}}</text>
						</view>
					</button>
					<button @tap="clickShares" open-type="share"  class="icon">
						<view class="icon-box">
							<view class="iconfont icon-fenxiang" :class="{iconActive:true}"></view>
							<text>{{currentDetail.shares}}</text>
						</view>
					</button>
				</view>
			</view>
			<view class="communication-center">
				<view class="description">
					<view class="description-top">
						<txet class="block"></txet>
						<text class="description-title">{{currentDetail.name}}</text>
					</view>
					<view class="description-content">{{currentDetail.introduction}}</view>
				</view>
			</view>
			<!-- 评论框 -->
			<view class="communication-bottom">
				<view class="comment">
					<input type="text" class="comment-input" placeholder="请友好评论哦!" :cursor="cursor" @focus="setCursor">
					<view class="iconfont icon-send"></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				cursor:20,
				id:0,
				type:0,
				//存放当前获取的对象
				currentDetail:{},
				//收藏的标志，默认为不收藏
				favours:false,
				//打卡的标志，默认为不打卡
				participants:false,
				userInfo:{},
				commentNum:0,
			}
		},
		components:{
			
		},
		methods: {
			//获取缓存中的用户信息
			getUserInfo(){
				if(uni.getStorageSync('user')){
					this.userInfo = uni.getStorageSync('user')
				}
			},
			//获取评论数量
			async getCommentNum(){
				const res = await this.$myRequest({
					url:"/comments/"+ this.type + "/" + this.id + "/pages"
				})
				this.commentNum = res.data.data
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
				this.getCurrentDetail()
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
				this.getCurrentDetail()
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
				this.getCurrentDetail()
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
			setCursor(){
				this.cursor=-5;
				console.log(111)
			},
			toCommunicate(){
				uni.navigateTo({
					url:'../communication-circle/communication-circle?id=' + this.id + "&type=" + this.type
				});
			},
			//获取展览信息
			async getExhibitionDetail(){
				const res = await this.$myRequest({
					url:"/exhibitions/"+this.id
				})
				this.currentDetail=res.data.data;
				console.log(this.currentDetail)
			},
			// 获取沙龙信息
			async getSalonDetail(){
				const res = await this.$myRequest({
					url:"/salons/"+this.id
				})
				this.currentDetail=res.data.data;
				//处理传回来的json团队成员信息
				let tempArr=[]
				let tempObj = {}
				if(this.currentDetail.members){
					for(let i = 0;i < this.currentDetail.members.length;i++){
						tempObj = this.currentDetail.members[i]
						tempArr.push(tempObj);
					}
				}
				this.currentDetail.members=tempArr;
			},
			//获取课程信息
			async getCourseDetail(){
				const res = await this.$myRequest({
					url:"/courses/"+this.id
				})
				this.currentDetail=res.data.data;
				//处理团队成员的json数据
				let tempArr=[]
				let tempObj = {}
				if(this.currentDetail.members){
					for(let i = 0;i < this.currentDetail.members.length;i++){
						tempObj = this.currentDetail.members[i]
						tempArr.push(tempObj);
					}
				}
				this.currentDetail.members=tempArr;
			},
			//获取当前的数据
			getCurrentDetail(){
				if(this.type==0){
					this.getExhibitionDetail()
				}else if(this.type==1){
					this.getSalonDetail()
				}else if(this.type==2){
					this.getCourseDetail()
				}
			}
		},
		onLoad(options) {
			uni.setNavigationBarTitle({
				frontColor:'#1E6CB5'
			})
			this.id = options.id
			this.type = options.type
			console.log(options)
			this.getUserInfo()
			this.getCurrentDetail()
			this.getCommentNum()
		},
		onShow() {
			this.getCurrentDetail()
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
				overflow: hidden;
				.icons{
					margin-top: -8rpx;
					display: flex;
					justify-content: space-around;
					position: relative;
					width: 280rpx;
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
			.communication-center{
				margin-top: 10rpx;
				.description{
					.description-top{
						width: 100%;
						line-height: 40rpx;
						height: 40rpx;
						.block{
							display: inline-block;
							width: 12rpx;
							height: 30rpx;
							background-color: #21277B;
							margin-right: 20rpx;
							border-radius: 4rpx;
							vertical-align: middle;
						}
						.description-title{
							font-size: 32rpx;
							color: #0069D6;
						}
						margin-bottom: 30rpx;
					}
					.description-content{
						text-indent: 1em;
						margin-top: 30rpx;
						font-size: 28rpx;
						color: #707070;
						line-height: 60rpx;
					}
				}
			}
			.communication-bottom{
				position: fixed;
				bottom: 0;
				background-color: #fff;
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
