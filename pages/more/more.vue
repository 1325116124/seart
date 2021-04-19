<template>
	<view class="more">
		<view class="more-body">
			<view class="more-top">
				<view class="function-title" :class="{functionTitleActive:functionIndex===1}">
					<view class="function-block" v-for="(item,index) in functionTitle" 
					:key="index" @click="changeIndex(index)">{{item}}</view>
					<view class="assistant" :class="{assistantActive1:functionIndex===0,
					assistantActive3:functionIndex===2}"></view><!-- 该盒子仅仅作为背景填充辅助作用 -->
					<view class="assistant-bottom" :class="{assistantBottomActive1:functionIndex===0,
					assistantBottomActive2:functionIndex===1,assistantBottomActive3:functionIndex===2}"></view>
				</view>
			</view>
			<view class="more-center1" v-if="functionIndex===0">
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
						<view class="more-exhibits-item">
							<image src="../../static/images/wander-exhibits1.jpg" mode="aspectFill"></image>
						</view>
						<view class="more-exhibits-item">
							<image src="../../static/images/wander-exhibits1.jpg" mode="aspectFill"></image>
						</view>
						<view class="more-exhibits-item">
							<image src="../../static/images/wander-exhibits1.jpg" mode="aspectFill"></image>
						</view>
					</scroll-view>
				</view>
				<view class="more-center2-center">
					<view class="center2-center-top">
						<txet class="block"></txet>
						<text class="center2-center-title">系列专辑</text>
					</view>
					<scroll-view scroll-x="true" class="more-exhibits">
						<view class="more-exhibits-item" v-for="(item,index) in albumArea" :key='index' @click="toChair(item)"><!-- 点击跳转到讲座页面 -->
							<image :src="item.albumImage" mode="aspectFill"></image>
							<view class="description">{{item.albumDescription}}</view>
						</view>
						<!-- <view class="more-exhibits-item">
							<image src="../../static/images/wander-exhibits1.jpg" mode="aspectFill"></image>
							<view class="description">如何理解艺术之美</view>
						</view>
						<view class="more-exhibits-item">
							<image src="../../static/images/wander-exhibits1.jpg" mode="aspectFill"></image>
							<view class="description">古籍收藏</view>
						</view> -->
					</scroll-view>
				</view>
				<view class="more-center2-bottom">
					<view class="center2-bottom-top">
						<txet class="block"></txet>
						<text class="center2-bottom-title">单场live</text>
					</view>
				</view>
			</view>
			<!-- ----- -->
			<view class="more-bottom">
				<view class="more-bottom-body">
					<view class="more-bottom-item">
						<view class="item-left">
							<image class="item-image" src="../../static/images/broadcast.jpg" mode="aspectFill"></image>
						</view>
						<view class="item-right">
							<view class="item-right-title">毕加索，麻胶版画展</view>
							<view class="item-right-des">毕加索麻胶版画展部分的展览</view>
							<view class="item-tabs">
								<view class="tab">浅蓝色</view>
								<view class="tab">莫兰迪</view>
								<view class="tab">橘色</view>
							</view>
						</view>
						<view class="location">
							<text class="iconfont icon-icon-test"></text>
							<text class="distance">1.5km</text>
						</view>
					</view>
					<view class="more-bottom-item">
						<view class="item-left">
							<image class="item-image" src="../../static/images/broadcast.jpg" mode="aspectFill"></image>
						</view>
						<view class="item-right">
							<view class="item-right-title">毕加索，麻胶版画展</view>
							<view class="item-right-des">毕加索麻胶版画展部分的展览</view>
							<view class="item-tabs">
								<view class="tab">浅蓝色</view>
								<view class="tab">莫兰迪</view>
								<view class="tab">橘色</view>
							</view>
						</view>
						<view class="location">
							<text class="iconfont icon-icon-test"></text>
							<text class="distance">1.5km</text>
						</view>
					</view>
					<view class="more-bottom-item">
						<view class="item-left">
							<image class="item-image" src="../../static/images/broadcast.jpg" mode="aspectFill"></image>
						</view>
						<view class="item-right">
							<view class="item-right-title">毕加索，麻胶版画展</view>
							<view class="item-right-des">毕加索麻胶版画展部分的展览</view>
							<view class="item-tabs">
								<view class="tab">浅蓝色</view>
								<view class="tab">莫兰迪</view>
								<view class="tab">橘色</view>
							</view>
						</view>
						<view class="location">
							<text class="iconfont icon-icon-test"></text>
							<text class="distance">1.5km</text>
						</view>
					</view>
					<view class="more-bottom-item" @click="toArtSalon">
						<view class="item-left">
							<image class="item-image" src="../../static/images/broadcast.jpg" mode="aspectFill"></image>
						</view>
						<view class="item-right">
							<view class="item-right-title">毕加索，麻胶版画展</view>
							<view class="item-right-des">毕加索麻胶版画展部分的展览</view>
							<view class="item-tabs">
								<view class="tab">浅蓝色</view>
								<view class="tab">莫兰迪</view>
								<view class="tab">橘色</view>
							</view>
						</view>
						<view class="location">
							<text class="iconfont icon-icon-test"></text>
							<text class="distance">1.5km</text>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				functionTitle:["展览","沙龙","live专区"],
				functionIndex:0,
				titles:["live","待开始","已结束"],
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
				]
			}
		},
		methods: {
			changeIndex(index){
				this.functionIndex=index;
			},
			//center的切换效果
			getIndex(index){
				this.currentIndex=index;
			},
			//专辑区域的事件
			toChair(item){
				uni.$emit('albumImg',item);
				uni.navigateTo({
					url:"../album-template/album-template"
				})
			},
			toArtSalon(){
				uni.navigateTo({
					url:"../artSalon/artSalon"
				})
			}
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
		}
	}
</script>

<style lang="less">
	@color:#1E6CB5;
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
						// background-color: #D5E3EF;
					}
					.assistant{
						position: absolute;
						transition: all 0.5s ease;
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
						height: 10rpx;
						border-radius: 10rpx;
						background-color: #D5E3EF;
						bottom: 0;
						left: 0;
					}
					// 第二种情况
					.assistantBottomActive2{
						width: 33%;
						height: 10rpx;
						border-radius: 10rpx;
						background-color: #D5E3EF;
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
						height: 10rpx;
						border-radius: 10rpx;
						background-color: #D5E3EF;
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
				margin-top: 60rpx;
				width: 100%;
				line-height: 40rpx;
				height: 40rpx;
				display: flex;
				justify-content: flex-start;
				.block{
					display: inline-block;
					width: 12rpx;
					height: 40rpx;
					background-color: #306FB6;
					border-radius: 4rpx;
					vertical-align: text-top;
				}
				.title{
					display: flex;
					justify-content: space-around;
					width: 600rpx;
					.more-center-title{
						font-size: 28rpx;
						transition: all 0.5s ease;
						&:first-child{
							margin-left: -40rpx;
						}
					}
					.active{
						font-size: 26rpx;
						color: #427FC1;
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
							background-color: #306FB6;
							margin-right: 20rpx;
							border-radius: 4rpx;
							vertical-align: text-top;
						}
						.center2-top-title{
							font-size: 28rpx;
							color: #1E6CB5;
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
							background-color: #306FB6;
							margin-right: 20rpx;
							border-radius: 4rpx;
							vertical-align: text-top;
						}
						.center2-center-title{
							font-size: 28rpx;
							color: #1E6CB5;
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
								font-size: 26rpx;
								color: #97989D;
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
							background-color: #306FB6;
							margin-right: 20rpx;
							border-radius: 4rpx;
							vertical-align: text-top;
						}
						.center2-bottom-title{
							font-size: 28rpx;
							color: #1E6CB5;
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
						background-color: #D3DDE6;
						border-radius: 24rpx;
						display: flex;
						justify-content: space-around;
						position: relative;
						padding: 30rpx 0;
						box-sizing: border-box;
						.item-left{
							.item-image{
								// 115x170
								position: absolute;
								width: 260rpx;
								height: 332rpx;
								border-radius: 10rpx;
								bottom: 50rpx;
								left: 26rpx;
								box-shadow: 0 0 15rpx 0 #666;
							}
						}
						.item-right{
							margin-left: 200rpx;
							.item-right-title{
								font-size: 32rpx;
								color: @color;
								line-height: 60rpx;
							}
							.item-right-des{
								font-size: 20rpx;
								line-height: 60rpx;
								color: #888;
							}
							.item-tabs{
								margin-top: 30rpx;
								display: flex;
								justify-content: space-around;
								.tab{
									// 38x18（单个）
									// 左右间隔13	5
									width: 80rpx;
									height: 36rpx;
									margin-left: 22rpx;
									border-radius: 10rpx;
									font-size: 24rpx;
									border: 2rpx solid @color;
									text-align: center;
									color: #888;
								}
							}
						}
						.location{
							position: absolute;
							bottom: 30rpx;
							right: 50rpx;
							font-size: 24rpx;
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
