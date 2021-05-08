<template>
	<view class="discover-result">
		<view class="result-body">
			<view class="result-top">
				<view class="search">
					<view class="input" >
						<scroll-view scroll-x="true" class="selectedWords">
							<view class="selectedWord-body">
								<view class="selectedWord" v-for="(item,index) in isSelectedArraySum" :key="index">
									<view class="text">{{item}}</view>
									<view class="delete" @click="delSelectedWord(item,index)">×</view>
								</view>
							</view>
						</scroll-view>
					</view>
					<text class="iconfont icon-fangdajing"></text>
				</view>
				<!-- <view class="result-navigator">
					<view v-for="(item,index) in resultRecommends" class="recommend" :key='index'
					@click="changeRecommend(index)" :class="{recommendActive:recommendIndex===index}">{{item}}</view>
				</view> -->
				<view class="function-title" :class="{functionTitleActive:functionIndex===1}">
					<view class="function-block" v-for="(item,index) in functionTitle" 
					:key="index" @click="changeIndex(index)" :class="{textActive:functionIndex===index}">{{item}}</view>
					<view class="assistant" :class="{assistantActive1:functionIndex===0,
					assistantActive3:functionIndex===2}"></view><!-- 该盒子仅仅作为背景填充辅助作用 -->
					<view class="assistant-bottom" :class="{assistantBottomActive1:functionIndex===0,
					assistantBottomActive2:functionIndex===1,assistantBottomActive3:functionIndex===2}"></view>
				</view>

			</view>
			
			<!-- ------------------------------------------------------------ -->
			<!-- 当为0或者1时标题是一样的，但是内容区域不一样 -->
			<view class="result-center">
				<view class="more-center1" v-if="functionIndex===0||functionIndex===1">
					<text class="block"></text>
					<view class="title">
						<view v-for="(item,index) in titles" class="more-center-title" 
						:class="{active:index===currentIndex}" @click="getIndex(index)" 
						:key='index'>{{item}}
						</view>
					</view>
				</view>
				<!-- 当为展览时的内容区域 -->
				<view class="result-items" v-if="functionIndex===0">
					<view class="result-item" v-for="(item,index) in currentExhibitons" :key="item.id"  @click="toLiving(item.id)">
						<image :src="item.introImage" mode="aspectFill"></image>
						<view class="des">{{item.name}}</view>
						<view class="tag">展览</view>
					</view>
				</view>
				<!-- 当索引为2的时候 -->
				<view class="result-items3" v-if="functionIndex===2">
					<view class="result-items3-top" v-if="exhibitionsLiving.length!==0">
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
					<view class="result-items3-center">
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
					<view class="result-items3-bottom">
						<view class="center2-bottom-top">
							<txet class="block"></txet>
							<text class="center2-bottom-title">单场live</text>
						</view>
					</view>
				</view>
				
				<!-- 索引为1和索引为2的时候的底部相同 -->
				<view class="result-items2" v-if="functionIndex===1">
					<view class="result-items2-body">
						<view class="result-items2-item" v-for="(item,index) in currentSalons" :key="item.id" @tap="toSalon(item.id)">
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
							<view class="location">
								<text class="iconfont icon-dingwei"></text>
								<text class="distance">1.5km</text>
							</view>
						</view>	
					</view>
				</view>
				<view class="result-items2" v-if="functionIndex===2">
					<view class="result-items2-body">
						<view class="result-items2-item" v-for="(item,index) in liveDetail" :key="index" @tap="toClassify(item.id,item.type)">
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
							<view class="location">
								<text class="iconfont icon-dingwei"></text>
								<text class="distance">1.5km</text>
							</view>
						</view>	
					</view>
				</view>
			</view>
			
			<!-- ------------------------------------------------------------ -->
			
			<!-- <recommend-exhibits v-else="recommendIndex===1"></recommend-exhibits> -->
		</view>
		<loading :showLoading="showLoading"></loading>
	</view>
</template>

<script>
	import recommendExhibits from "../../component/recommendExhibits/recommendExhibits.vue"
	export default {
		data() {
			return {
				titles:["live","待开始","已结束","all"],
				currentIndex:0,
				resultRecommends:['市集推荐','展览推荐','帖子推荐'],
				recommendIndex:0,
				functionTitle:["展览","沙龙","live专区"],
				functionIndex:0,
				//存放传过来的所有标签
				isSelectedArraySum:[],
				//用来存放所有的返回结果
				allResults:[],
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
		components:{
			recommendExhibits
		},
		methods: {
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
			changeRecommend(index){
				this.recommendIndex=index;
			},
			changeIndex(index){
				this.functionIndex=index;	
			},
			delSelectedWord(item,index){
				this.isSelectedArraySum.remove(item,index);
			},
			async getResults(){
				const res = await this.$myRequest({
					url:"/discover/" + this.isSelectedArraySum +"/0/10",
					method:"GET",
					data:{
						list:this.isSelectedArraySum
					},
					dataType: "json"
				})
				this.allResults = res.data.data
				this.allResults.forEach((value,index) => {
					if(value.type===0){
						this.exhibitionsDetail.push(value);
						if(value.status===0){
							this.exhibitionsBefore.push(value)
						}else if(value.status===1){
							this.exhibitionsLiving.push(value)
							this.liveDetail.push(value)
						}else if(value.status===2){
							this.exhibitionsOver.push(value);
						}
					}else if(value.type===1){
						this.salons.push(value)
						if(value.status===0){
							this.salonsBefore.push(value)
						}else if(value.status===1){
							this.salonsLiving.push(value)
							this.liveDetail.push(value)
						}else if(value.status===2){
							this.salonsOver.push(value);
						}
					}else if(value.type===2){
						this.courseDetail.push(value)
						if(value.status===1){
							this.liveDetail.push(value)
						}
					}
				})
				console.log(this.exhibitionsLiving)
			},

			//沙龙tab下的点击跳往沙龙界面
			toSalon(id){
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
				uni.navigateTo({
					url:"../album-template/album-template?id="+id
				})
			},
			//live专区tab下最底部的点击
			toClassify(id,type){
				if(type===0){
					uni.navigateTo({
						url:"../living/living?id="+id,
					})
				}else if(type===1){
					uni.navigateTo({
						url:"../artSalon/artSalon?id="+id
					})
				}else if(type===2){
					uni.navigateTo({
						url:"../course-template/course-template?id="+id
					})
				}
			},
		},
		onLoad(){
			 const eventChannel = this.getOpenerEventChannel()
			 eventChannel.on('acceptDataFromOpenerPage', data => {
				 this.isSelectedArraySum=data.isSelectedArraySum
				 console.log(this.isSelectedArraySum)
			 })
			 this.getResults()
			 this.currentExhibitons=this.exhibitionsLiving //默认进入时的初始化
			 this.currentSalons=this.salonsLiving
			 this.showLoading = false;
		},
		onUnload() {
			const eventChannel = this.getOpenerEventChannel()
			eventChannel.emit('acceptDataFromOpenedPage',{isAccept:true});
			this.showLoading = true;
		}
	}
</script>

<style lang="less">
	@color:#4F73A5;
	.discover-result{
		.result-body{
			width: 700rpx;
			margin: 0 auto;
			.result-top{
				width: 700rpx;
				position: sticky;//父元素不能有overflow：hidden否则不起吸顶效果
				top: 0;
				left: 0;
				background-color: #fff;
				padding-bottom: 40rpx;
				z-index: 2;//防止下面定位流的元素盖住
				.search{
					width: 100%;
					height: 50rpx;
					// display: flex;
					// justify-content: space-around;
					// .Search{
					// 	color: @color;
					// 	font-size: 50rpx;
					// }
					position: relative;
					.iconfont{
						width: 10%;
						font-size: 50rpx;
						color: #006AD7;
						margin-top: -2rpx;
						position: absolute;
						right: 0;
						top: 0;
					}
					.input{
						height: 50rpx;
						width: 540rpx;
						border-radius: 32rpx;
						border: 4rpx solid #006FFF;
						margin: 0 auto;
						box-sizing: border-box;
						overflow: hidden;
						.selectedWords{
							border-radius: 32rpx;
							.selectedWord-body{
								width: 1000rpx;
								display: flex;
								justify-content: flex-start;
								.selectedWord{
									position: relative;
									margin-right: 20rpx;
									.text{
										height: 42rpx;
										font-size: 30rpx;
										color: #006AD7;
										text-align: center;
										line-height: 42rpx;
										padding: 0 80rpx 0 20rpx;
										box-sizing: border-box;
										background-color: #D0E0EC;
										border-radius: 32rpx;
									}
									.delete{
										position: absolute;
										right: 14rpx;
										bottom: 2rpx;
										color: #006AD7;
									}
								}
							}
						}
					}					
					// .inputActive{
					// 	border-bottom: 2rpx solid #1E6CB5 !important;
					// }
				}
				
				//标题栏
				.function-title{
					margin-top: 40rpx;
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
				
			}
			.result-center{
				.more-center1{
					margin-top: 20rpx;
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
				
				.result-items{
					display: flex;
					justify-content: space-around;
					flex-wrap: wrap;
					transition: all 1s linear;
					.result-item{
						height: 480rpx;
						width: 326rpx;
						border-radius: 20rpx;
						margin-top: 40rpx;
						background-color: #EBF3FC;
						font-size: 20rpx;
						position: relative;
						image{
							height: 404rpx;
							width: 100%;
							border-radius: 20rpx;
						}
						.des{
							width: 100%;
							height: 96rpx;
							line-height: 40rpx;
							color: #041746;
							text-align: center;
						}
						.tag{
							position: absolute;
							right: 0;
							top: 0;
							width: 90rpx;
							height: 32rpx;
							font-size: 16rpx;
							border-radius: 16rpx;
							background-color: rgba(248,248,248,0.9);
							line-height: 32rpx;
							text-align: center;
							color: #888;
						}
					}
				}
				.result-items2{
					padding-top: 30rpx;
					.result-items2-body{
						width: 100%;
						margin-bottom: 500rpx;//预留位置
						.result-items2-item{
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
				//result-items3
				.result-items3{
					.result-items3-top{
						margin-top: 20rpx;
						margin-bottom: 60rpx;
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
					.result-items3-center{
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
					.result-items3-bottom{
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
			}
			.bazzarShow{
				display: hidden;
			}
		}
	}
</style>
