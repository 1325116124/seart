<template>
	<view class="wander">
		<view class="wander-body">
			<view class="wander-top">
				<!-- 搜索框模块 -->
				<view class="search" >
					<text class="iconfont icon-fangdajing" @click='toSearch'></text>
					<!-- 按照设计图来看，搜索点击之后没有动态样式 -->
					<input type="text" placeholder-class="Search" placeholder="Discover" 
					@focus="changeInputClass" @blur="removeInputClass" @click='toSearch' disabled="true">
					<view class="location">
						<text class="iconfont icon-dingwei"></text>
						<text>广州</text>
					</view>
				</view>
				<!-- ------------------------------------------------ -->
				
				<!-- 轮播图模块 -->
				<view class="container">
					<swiper :circular="true" :autoplay="true" :interval="3000" :duration="1000" class="swiper" 
					:current="swiperCurrent" @change="changeSwiper">
						<swiper-item v-for="item in swiperImg" @click="toLiving">
							<view class="swiper-item">
								<image :src="item" mode="aspectFill"></image>
								<view class="description">欧初捐赠文物纪念展"分为“诸家合璧”“历代陶瓷”、“文房
								<br>用品”和“青铜器”四个篇章。欧初先生希望能但求天下暖......</view>
							</view>
						</swiper-item>
					</swiper>
					<view class="swiper-dots">
						<view class="dot" :class="index===swiperCurrent ? 'active' : ''"
						v-for="(item,index) in swiperImg" :key="index"></view>
					</view>
				</view>
				<!-- ------------------------------------------------------- -->
			</view>
			<view class="wander-center" >
				<view class="function-title" :class="{functionTitleActive:functionIndex===1}">
					<view class="function-block" v-for="(item,index) in functionTitle" 
					:key="index" @click="changeIndex(index)" :class="{textActive:functionIndex===index}">{{item}}</view>
					<view class="assistant" :class="{assistantActive1:functionIndex===0,
					assistantActive3:functionIndex===2}"></view><!-- 该盒子仅仅作为背景填充辅助作用 -->
					<view class="assistant-bottom" :class="{assistantBottomActive1:functionIndex===0,
					assistantBottomActive2:functionIndex===1,assistantBottomActive3:functionIndex===2}"></view>
				</view>
				
				<!-- 用v-show来切换不同tab的内容 -->
				<view v-show="functionIndex===0">
					<scroll-view scroll-x="true" class="exhibits">
						<view class="exhibits-item" v-for="(item,index) in exhibitions" :key="item.id"  @click="toLiving(item.id)">
							<image :src="item.introImage" mode="aspectFill" lazy-load="true"></image>
						</view>
					</scroll-view>
				</view>
				<view v-show="functionIndex===1">
					<scroll-view scroll-x="true" class="exhibits">
						<view class="exhibits-item" v-for="(item,index) in salons" :key="item.id"  @click="toSalon(item.id)">
							<image :src="item.introImage" mode="aspectFill" lazy-load="true"></image>
						</view>
					</scroll-view>
				</view>
				<view v-show="functionIndex===2">
					<scroll-view scroll-x="true" class="exhibits">
						<view class="exhibits-item" v-for="(item,index) in liveshows" :key="item.id" @tap="toCourse(item.id)">
							<image :src="item.introImage" mode="aspectFill" lazy-load="true"></image>
						</view>
					</scroll-view>
				</view>

				<!-- ---------------------------------------- -->
				<view class="more" @click="toMore">more ></view>
			</view>
			<view class="wander-bottom">
				<!-- 复用living组件 -->
				<view class="exhibits-around-top">
					<text class="block"></text>
					<text class="exhibits-around-title" v-show="functionIndex===0||functionIndex===2">周 围 的 展</text>
					<text class="exhibits-around-title" v-show="functionIndex===1">热 门 沙 龙</text>
				</view>
				<!-- 展览的展示 -->
				<view class="exhibits-around" v-if="functionIndex===0">
					<view class="exhibits-around-body">
						<view class="exhibits-around-item" v-for="(item,index) in nearyExhibitions" :key="item.id" @click="toClassify(item.id)">
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
								<text class="distance">{{item.distance/1000}}km</text>
							</view>
						</view>
					</view>
				</view>
				<view class="exhibits-around" v-else-if="functionIndex===1">
					<view class="exhibits-around-body">
						<view class="exhibits-around-item" v-for="(item,index) in salons" :key="item.id" @click="toClassify(item.id)">
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
								<text class="distance">距1.5km</text>
							</view>
						</view>
					</view>
				</view>
				<view class="exhibits-around" v-else-if="functionIndex===2">
					<view class="exhibits-around-body">
						<view class="exhibits-around-item" v-for="(item,index) in liveshows" :key="item.id" @click="toClassify(item.id)">
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
								<text class="distance">{{item.distance/1000}}km</text>
							</view>
						</view>
					</view>
				</view>
			</view>
			<loading :showLoading="showLoading"></loading>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isInputActive:false,//判断输入框是否focus
				swiperImg: [
					'http://47.112.188.99/images/shuffling.jpg',					
					'http://47.112.188.99/images/1.png',
					'http://47.112.188.99/images/2.png',
					'http://47.112.188.99/images/3.png'
				],
				exhibitions:[],
				salons:[],//沙龙的信息
				// exhibitionsImg:[
				// 	'http://47.112.188.99/images/exhibition-1.jpg',
				// 	'http://47.112.188.99/images/exhibition-2.jpg',
				// 	'http://47.112.188.99/images/exhibition-3.jpg'
				// ],
				liveshows:[],//直播的信息
				swiperCurrent:0,
				functionTitle:["展览","沙龙","live专区"],
				functionIndex:0,
				showLoading:true,
				//用户的位置信息，用于获取周围的展
				userLongitude:0,
				userLatitude:0,
				//周围展的信息
				nearyExhibitions:[],
			};
		},
		methods: {
			changeInputClass(){
				this.isInputActive=true;
			},
			removeInputClass(){
				this.isInputActive=false;
			},
			changeSwiper(e) {
				this.swiperCurrent = e.detail.current;
			},
			toSearch(){
				uni.navigateTo({
					url:'../wander-discover/wander-discover'
				})
			},
			//切换tab选项卡的标题
			changeIndex(index){
				this.functionIndex=index;
			},
			toMore(){
				uni.navigateTo({
					url:"../more/more",
					animationType:"fade-in",
					animationDuration:1000
				})
			},
			//轮播图的点击跳转
			toLiving(id){
				uni.navigateTo({
					url:"../living/living?id="+id,
				})
			},
			toClassify(id){
				if(this.functionIndex===0){
					uni.navigateTo({
						url:"../living/living?id="+id,
					})
				}else if(this.functionIndex===1){
					uni.navigateTo({
						url:"../artSalon/artSalon?id="+id
					})
				}else{
					uni.navigateTo({
						url:"../course-template/course-template?id="+id
					})
				}
			},
			toSalon(id){
				uni.navigateTo({
					url:"../artSalon/artSalon?id="+id
				})
			},
			toCourse(id){
				uni.navigateTo({
					url:"../course-template/course-template?id="+id
				})
			},
			//获取展览的请求
			async getExhibitions(){
				const res = await this.$myRequest({
					url:"/exhibitions",
				})
				this.exhibitions=res.data.data.list;
			},
			async getSalons(){
				const res = await this.$myRequest({
					url:"/salons",
				})
				this.salons=res.data.data.list;
			},
			async getLiveShow(){
				const res = await this.$myRequest({
					url:"/live-shows"
				})
				this.liveshows=res.data.data.list;
			},
			//根据用户位置获取周围的展
			async getNearbyExhi(){
				const res = await this.$myRequest({
					url:"/nearby-exhibitions/-1/0/"+this.userLongitude+'/'+this.userLatitude
				})
				this.nearyExhibitions = res.data.data.list;
				console.log(this.nearyExhibitions)
			},
			getUserLocation(){
				let userInfo = uni.getStorageSync("user")
				this.userLongitude = userInfo.longitude
				this.userLatitude = userInfo.latitude
			},
			isLogin(){
				if(uni.getStorageSync('user')){
					return;
				}else{
					uni.navigateTo({
						url:"../login/login"
					})
				}
			},
		},
		
		onLoad() {
			this.isLogin();
			this.getExhibitions();
			this.getSalons();
			this.getLiveShow();
			this.showLoading = false;
			//获取缓存里的用户地理位置
			this.getUserLocation();
			this.getNearbyExhi()
		},
		onUnload() {
			this.showLoading = true;
		}
	}
</script>

<style lang="less">
	@color:#4F73A5;
	@keyframes fadeInOut{
		0%{
			opacity: 1;
		}
		50%{
			opacity: 0.5;
		}
		100%{
			opacity: 1;
		}
	}
	.wander{
		.wander-body{
			width: 700rpx;
			margin: 0 auto;
			.wander-top{
				padding: 20rpx 0;
				width: 700rpx;
				// background-color: red;
				position: relative;
				overflow: hidden;
				margin: 0 auto;
				.search{
					display: flex;
					justify-content: space-around;
					line-height: 50rpx;
					width: 100%;
					.icon-fangdajing{
						font-size: 50rpx;
						color: @color;
						margin-top: -2rpx;
					}
					.Search{
						color: #649DD4;
						font-size: 50rpx;
					}
					input[type=text]{
						width: 70%;
						height: 100%;
						transform: all 1s ease;
						padding: 0 0 10rpx 0;
						box-sizing: border-box;
						border-bottom: 2rpx solid transparent;
					}
					.inputActive{
						border-bottom: 2rpx solid @color !important;
					}
					.location{
						text{
							&:nth-child(2){
								color: #649DD4;
							}
						}
					}
				}
				.container{
					margin-top: 30rpx;
					width: 100%;
					.swiper{
						position: relative;
						top: 20rpx;
						width: 100%;
						height: 400rpx;
						border-radius: 24rpx;
						overflow: hidden;
						margin: 0 auto;
						swiper-item{
							border-radius: 24rpx;
							background-color: #DEDDDA;

							
							.swiper-item{
								text-align: center;
								image{
									width: 100%;
									height: 280rpx;
									border-radius: 24rpx;
								}
								.description{
									font-size: 24rpx;
									line-height: 50rpx;
								}
							}
						}
						// swiper-item{
						// 	margin-right: 100rpx;
						// 	text-align: center;
						// 	.swiper-item{
						// 		background-color: #DEDDDA;
						// 		image{
						// 			width: 90%;
						// 			height: 280rpx;
						// 			border-radius: 24rpx;
						// 		}
						// 		.description{
						// 			text-align: center;
						// 			width: 90%;
						// 			height: 100rpx;
						// 			line-height: 50rpx;
						// 			background-color: #DEDDDA;
						// 			border-radius: 24rpx;
						// 			margin: 0 auto;
						// 			font-size: 24rpx;
						// 		}
						// 	}
						// }
					}
					.swiper-dots{
						width: 100%;
						display: flex;
						justify-content: center;
						margin-top: 30rpx;
						.dot{
							width: 16rpx;
							height: 16rpx;
							border-radius: 50%;
							background-color: #DEDDDA;
							margin-right: 20rpx;
							transition: all 0.2s;
						}
						.active{
							width: 40rpx;
							border-radius: 8rpx;
							background-color: @color;
						}
					}
				}
			}
			.wander-center{
				margin-top: 40rpx;
				width: 100%;
				position: relative;
				transition: all 0.5s ease;
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
			
			.wander-bottom{
				margin-top: 50rpx;
				.exhibits-around-top{
					width: 100%;
					line-height: 40rpx;
					height: 40rpx;
					margin-bottom: 80rpx;
					.block{
						display: inline-block;
						width: 12rpx;
						height: 28rpx;
						background-color: #306FB6;
						margin-right: 20rpx;
						border-radius: 4rpx;
						vertical-align: middle;
					}
					.exhibits-around-title{
						font-size: 26rpx;
						color: #1E6CB5;
					}
				}
				.exhibits-around{
					
					.exhibits-around-body{
						width: 100%;
						margin-bottom: 500rpx;//预留位置
						.exhibits-around-item{
							// 345x163
							margin-top: 100rpx;
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
									line-height: 30rpx;
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
			.test{
				width: 200rpx;
				height: 200rpx;
				background-color: #ff0;
			}
		}
	}
</style>
