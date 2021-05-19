<template>
	<view class="more">
		<view class="more-body">
			<view class="more-top">
				<view class="function-title" :class="{functionTitleActive:functionIndex===1}">
					<view class="function-block" v-for="(item,index) in functionTitle" 
					:key="index" @click="changeIndex(index)" :class="{textActive:functionIndex===index}">{{item}}</view>
					<view class="assistant" :class="{assistantActive1:functionIndex===0,
					assistantActive3:functionIndex===2}"></view><!-- 该盒子仅仅作为背景填充辅助作用 -->
					<view class="assistant-bottom" :class="{assistantBottomActive1:functionIndex===0,
					assistantBottomActive2:functionIndex===1,assistantBottomActive3:functionIndex===2}"></view>
				</view>
			</view>
			<view class="more-center1" v-if="functionIndex===0||functionIndex===1">
				<text class="block"></text>
				<view class="title">
					<view v-for="(item,index) in titles" class="more-center-title" 
					:class="{active:index===currentIndex}" @click="getIndex(index)" 
					:key='index' >{{item}}
					</view>
				</view>
			</view>
			<!-- index===2 -->
			<view class="more-center2" v-if="functionIndex===2">
				<view class="more-center2-top">
					<view class="center2-top-top">
						<txet class="block"></txet>
						<text class="center2-top-title">线上展览</text>
					</view>
					<!-- wander里面的组件 -->
					<scroll-view scroll-x="true" class="more-exhibits">
						<view class="more-exhibits-item" v-for="(item,index) in exhibitionsLiving" :key="item.id" @tap="toLiving(item.id)">
							<image :src="item.introImage" mode="aspectFill"></image>
						</view>
					</scroll-view>
				</view>
				<view class="more-center2-center">
					<view class="center2-center-top">
						<txet class="block"></txet>
						<text class="center2-center-title">系列专辑</text>
					</view>
					<scroll-view scroll-x="true" class="more-exhibits">
						<view class="more-exhibits-item" v-for="(item,index) in courseDetail" :key='item.id' @click="toChair(item.id)"><!-- 点击跳转到讲座页面 -->
							<image :src="item.introImage" mode="aspectFill"></image>
							<view class="description">{{item.name}}</view>
						</view>
					</scroll-view>
				</view>
				<view class="more-center2-bottom">
					<view class="center2-bottom-top">
						<txet class="block"></txet>
						<text class="center2-bottom-title">单场live</text>
					</view>
				</view>
			</view>
			<!-- 展览底部的展示- -->
			<view class="more-bottom" v-if="functionIndex===0">
				<view class="more-bottom-body">
					<view class="more-bottom-item" v-for="(item,index) in currentExhibitons" :key="item.id" @tap="toLiving(item.id)">
						<view class="item-left">
							<image class="item-image" :src="item.introImage" mode="aspectFill"></image>
						</view>
						<view class="item-right">
							<view class="item-right-title">{{item.name}}</view>
							<view class="item-right-des">{{item.introduction}}</view>
							<view class="item-tabs">
								<view class="tab" v-for="(value,index2) in item.tags" :key="index2">{{value}}</view>
							</view>
						</view>
						<!-- <view class="location">
							<text class="iconfont icon-dingwei"></text>
							<text class="distance">{{item.distance/1000}}km</text>
						</view> -->
					</view>
				</view>
			</view>
			<!-- 沙龙的展示 -->
			<view class="more-bottom" v-else-if="functionIndex===1">
				<view class="more-bottom-body">
					<view class="more-bottom-item" v-for="(item,index) in currentSalons" :key="item.id" @tap="toArtSalon(item.id)">
						<view class="item-left">
							<image class="item-image" :src="item.introImage" mode="aspectFill"></image>
						</view>
						<view class="item-right">
							<view class="item-right-title">{{item.name}}</view>
							<view class="item-right-des">{{item.introduction}}</view>
							<view class="item-tabs">
								<view class="tab" v-for="(value,index2) in item.tags" :key="index2">{{value}}</view>
							</view>
						</view>
						<!-- <view class="location">
							<text class="iconfont icon-dingwei"></text>
							<text class="distance">1.5km</text>
						</view> -->
					</view>
				</view>
			</view>
			<!-- live专区的展示 -->
			<view class="more-bottom" v-else-if="functionIndex===2">
				<view class="more-bottom-body">
					<view class="more-bottom-item" v-for="(item,index) in liveDetail" :key="item.id" @tap="toCourse(item.id)">
						<view class="item-left">
							<image class="item-image" :src="item.introImage" mode="aspectFill"></image>
						</view>
						<view class="item-right">
							<view class="item-right-title">{{item.name}}</view>
							<view class="item-right-des">{{item.introduction}}</view>
							<view class="item-tabs">
								<view class="tab" v-for="(value,index2) in item.tags" :key="index2">{{value}}</view>
							</view>
						</view>
						<!-- <view class="location">
							<text class="iconfont icon-dingwei"></text>
							<text class="distance">1.5km</text>
						</view> -->
					</view>
				</view>
			</view>
		</view>
		<loading :showLoading="showLoading"></loading>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				functionTitle:["展览","沙龙","live专区"],
				functionIndex:0,
				titles:["live","待开始","已结束","all"],
				currentIndex:0,
				//专辑区域
				albumArea:[
					{
						albumImage:'../../static/images/wander-exhibits1.jpg',
						albumDescription:'雕像之谈合集'
					},
					{
						albumImage:'../../static/images/wander-exhibits1.jpg',
						albumDescription:'如何理解艺术之美'
					},
					{
						albumImage:'../../static/images/wander-exhibits1.jpg',
						albumDescription:'古籍收藏'
					}
				],
				exhibitionsDetail:[],
				exhibitionsLiving:[],//正在直播的
				exhibitionsOver:[],//已经结束的
				exhibitionsBefore:[],//还没开始的
				currentExhibitons:[],//用来渲染的,
				salons:[],
				salonsLiving:[],//正在直播的
				salonsOver:[],//已经结束的
				salonsBefore:[],//还没开始的
				currentSalons:[],//用来渲染的,
				courseDetail:[],//用来存放课程信息的,
				liveDetail:[],//用来存放live专区的信息
				showLoading:true
			}
		},
		methods: {
			changeIndex(index){
				this.functionIndex=index;
			},
			//center的切换效果
			getIndex(index){
				this.currentIndex=index;
				if(this.currentIndex===0){
					this.currentExhibitons = this.exhibitionsLiving
					this.currentSalons = this.salonsLiving
				}else if(this.currentIndex===1){
					this.currentExhibitons = this.exhibitionsBefore
					this.currentSalons = this.salonsBefore
				}else if(this.currentIndex===2){
					this.currentExhibitons = this.exhibitionsOver
					this.currentSalons = this.salonsOver
				}else {
					this.currentExhibitons=this.exhibitionsDetail
					this.currentSalons = this.salons
				}
			},
			//沙龙tab下的点击跳往沙龙界面
			toArtSalon(id){
				uni.navigateTo({
					url:"../artSalon/artSalon?id="+id
				})
			},
			//live专区tab下线上展览的点击
			toLiving(id){
				uni.navigateTo({
					url:"../living/living?id="+id,
				})
			},
			//live专区tab下专辑的点击
			toChair(id){
				console.log(id)
				uni.navigateTo({
					url:"../album-template/album-template?id="+id
				})
			},
			//live专区tab下最底部的点击
			toCourse(id){
				uni.navigateTo({
					url:"../course-template/course-template?id="+id
				})
			},
			//展览获取
			async getExhibitions(){
				const res = await this.$myRequest({
					url:"/exhibitions"
				})
				this.exhibitionsDetail=res.data.data.list;
				this.exhibitionsDetail.forEach((item,index) => {
					if(item.status===0){
						this.exhibitionsBefore.push(item)
					}else if(item.status===1){
						this.exhibitionsLiving.push(item)
					}else if(item.status===2){
						this.exhibitionsOver.push(item);
					}
				})
			},
			async getSalons(){
				const res = await this.$myRequest({
					url:"/salons",
				})
				this.salons=res.data.data.list;
				this.salons.forEach((item,index) => {
					if(item.status===0){
						this.salonsBefore.push(item)
					}else if(item.status===1){
						this.salonsLiving.push(item)
					}else if(item.status===2){
						this.salonsOver.push(item);
					}
				})
			},
			async getCourse(){
				const res = await this.$myRequest({
					url:"/courses",
				})
				this.courseDetail = res.data.data.list;
			},
			async getLive(){
				const res = await this.$myRequest({
					url:"/live-shows",
				})
				this.liveDetail = res.data.data.list;
			},
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title:"搜索全部"
			}),
			uni.setNavigationBarColor({
			    animation: {
			        duration: 400,
			        timingFunc: 'easeIn'
			    }
			})
			this.getExhibitions()
			this.currentExhibitons=this.exhibitionsLiving //默认进入时的初始化
			this.getSalons();
			this.currentSalons=this.salonsLiving
			this.getCourse();
			this.getLive();
			this.showLoading = false;
		},
		onUnload() {
			this.showLoading = true;
		}
	}
</script>

<style lang="less">
	@color:#4F73A5;
	.more{
		.more-body{
			width: 700rpx;
			margin: 0 auto;
			.more-top{
				margin-top: 30rpx;
				width: 100%;
				position: relative;
				.function-title{
					display: flex;
					justify-content: space-around;
					border-radius: 24rpx;
					position: relative;
					transition: all 0.5s ease;
					.function-block{
						text-align: center;
						height: 88rpx;
						width: 33%;
						line-height: 88rpx;
						border-radius: 24rpx;
						font-size: 28rpx;
						color: #52739D;
						transition: background-color 0.5s ease;
						// background-color: #D5E3EF;
					}
					.assistant{
						position: absolute;
						width: 0;
						right: 0;
						top: 0;
						transition: all 0.1s ease;
						animation: fadeInOut 1s;
					}
					.assistant-bottom{
						position: absolute;
						transition: all 0.5s ease;
					}
					// 第一种情况
					.assistantActive1{
						width: 66%;
						height: 88rpx;
						right: 0;
						top: 0;
						border-radius: 24rpx;
						background-color: #D5E3EF;
						z-index: -1;
						
					}
					.assistantBottomActive1{
						width: 33%;
						height: 14rpx;
						border-radius: 10rpx;
						background-color: #0069D6;
						bottom: 0;
						left: 0;
					}
					// 第二种情况
					.assistantBottomActive2{
						width: 33%;
						height: 14rpx;
						border-radius: 10rpx;
						background-color: #0069D6;
						bottom: 0;
						left: center;
						
					}
					// 第三种情况
					.assistantActive3{
						width: 66%;
						height: 88rpx;
						left: 0;
						top: 0;
						border-radius: 24rpx;
						background-color: #D5E3EF;
						z-index: -1;
					}
					.assistantBottomActive3{
						width: 33%;
						height: 14rpx;
						border-radius: 10rpx;
						background-color: #0069D6;
						bottom: 0;
						right: 0;
					}
				}
				
				//第二种情况的两侧
				.functionTitleActive{
					.function-block{
						&:first-child{
							background-color: #D5E3EF;
						}
						&:nth-child(3){
							background-color: #D5E3EF;
						}
					}
				}
				//文字效果
				.textActive{
					color: #0069D6;
					font-weight: 700;
				}
				// ---------------------
				.exhibits{
					margin-top: 40rpx;
					width: 100%;
					height: 236rpx;
					overflow: hidden;
					display: flex;
					justify-content: flex-start;
					white-space: nowrap;
					
					.exhibits-item{
						display: inline-block;
						border-radius: 10rpx;
						width: 230rpx;
						height: 230rpx;
						margin-left: 52rpx;
						box-shadow: 0 0 0 0 #666,0 0 10rpx 0 #666,0 0 10rpx 0 #666,0 0 10rpx 0 #666;
						image{
							width: 230rpx;
							height: 230rpx;
						}
						&:first-child{
							margin-left: 10rpx;
						}
					}
				}
				.more{
					position: absolute;
					right: 10rpx;
					bottom: -40rpx;
					font-size: 26rpx;
					color: #747579;
				}
			}
			//当索引为0时出现的样式
			.more-center1{
				margin-top: 40rpx;
				width: 100%;
				line-height: 40rpx;
				height: 40rpx;
				display: flex;
				justify-content: space-between;
				.block{
					display: inline-block;
					width: 12rpx;
					height: 40rpx;
					background-color: #21277B;
					border-radius: 4rpx;
					vertical-align: text-top;
				}
				.title{
					display: flex;
					justify-content: space-between;
					width: 600rpx;
					color: #4F73A5;
					.more-center-title{
						font-size: 28rpx;
						transition: all 0.5s ease;
						&:first-child{
							margin-left: -40rpx;
						}
					}
					.active{
						color: #006AD7;
					}
				}
			}
			
			//当索引为2时出现的样式
			.more-center2{
				.more-center2-top{
					margin-top: 60rpx;
					.center2-top-top{
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
						.center2-top-title{
							font-size: 28rpx;
							color: #4E73A4;
						}
					}
					.more-exhibits{
						margin-top: 40rpx;
						width: 100%;
						height: 340rpx;
						overflow: hidden;
						display: flex;
						justify-content: flex-start;
						white-space: nowrap;
						.more-exhibits-item{
							display: inline-block;
							position: relative;
							border-radius: 10rpx;
							width: 230rpx;
							height: 336rpx;
							margin-left: 52rpx;
							box-shadow: 0 0 0 0 #666,0 0 10rpx 0 #666,0 0 10rpx 0 #666,0 0 10rpx 0 #666;
							image{
								width: 230rpx;
								height: 336rpx;
							}
							&:first-child{
								margin-left: 10rpx;
							}
						}
					}
				}
				.more-center2-center{
					margin-top: 60rpx;
					.center2-center-top{
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
						.center2-center-title{
							font-size: 28rpx;
							color:  #4E73A4;
						}
					}
					.more-exhibits{
						margin-top: 40rpx;
						width: 100%;
						height: 340rpx;
						overflow: hidden;
						display: flex;
						justify-content: flex-start;
						white-space: nowrap;
						.more-exhibits-item{
							display: inline-block;
							position: relative;
							border-radius: 10rpx;
							width: 230rpx;
							height: 230rpx;
							margin-left: 52rpx;
							box-shadow: 0 0 0 0 #666,0 0 10rpx 0 #666,0 0 10rpx 0 #666,0 0 10rpx 0 #666;
							image{
								width: 230rpx;
								height: 230rpx;
							}
							&:first-child{
								margin-left: 10rpx;
							}
							.description{
								text-align: center;
								font-size: 24rpx;
								color: #006AD7;
							}
						}
					}
				}
				.more-center2-bottom{
					.center2-bottom-top{
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
						.center2-bottom-title{
							font-size: 28rpx;
							color:  #4E73A4;
						}
					}
				}
			}
			
			.more-bottom{
				padding-top: 30rpx;
				.more-bottom-body{
					width: 100%;
					margin-bottom: 500rpx;//预留位置
					.more-bottom-item{
						// 345x163
						margin-top: 80rpx;
						width: 100%;
						height: 326rpx;
						background-color: #E5ECF5;
						border-radius: 24rpx;
						display: flex;
						justify-content: space-around;
						position: relative;
						padding: 30rpx 0;
						box-sizing: border-box;
						.item-left{
							width: 260rpx;
							height: 332rpx;
							position: absolute;
							bottom: 50rpx;
							left: 26rpx;
							.item-image{
								// 115x170
								width: 260rpx;
								height: 332rpx;
								border-radius: 10rpx;
								box-shadow: 0 0 15rpx 0 #666;
							}
						}
						.item-right{
							width: 360rpx;
							height: 227rpx;
							position: absolute;
							right: 20rpx;
							top: 20rpx;
							.item-right-title{
								font-size: 30rpx;
								color: @color;
								margin-bottom: 20rpx;
							}
							.item-right-des{
								font-size: 16rpx;
								height: 115rpx;
								overflow: hidden;
								width: 100%;
								color: #8C8C8E;
							}
							.item-tabs{
								margin-top: 20rpx;
								display: flex;
								justify-content: flex-start;
								width: 310rpx;
								height: 36rpx;
								position: absolute;
								bottom: 0;
								left: 0;
								.tab{
									// 38x18（单个）
									// 左右间隔13	5
									width: 80rpx;
									height: 36rpx;
									line-height: 36rpx;	
									border-radius: 10rpx;
									font-size: 18rpx;
									border: 1rpx solid #4E72A5;
									text-align: center;
									color: #4E72A5;
									margin-right: 20rpx;
								}
							}
						}
						.location{
							position: absolute;
							bottom: 30rpx;
							right: 50rpx;
							font-size: 24rpx;
							color: #4E72A5;
							.iconfont{
								margin-left: 15rpx;
							}
						}
					}
				}
			}
		}
	}
</style>
