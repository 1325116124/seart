<template>
	<view class="discover-result">
		<view class="result-body">
			<view class="result-top">
				<view class="search">
					<input type="text" class="input">
				</view>
				<view class="iconfont icon-fangdajing"></view>
				<view class="result-navigator">
					<view v-for="(item,index) in resultRecommends" class="recommend" :key='index'
					@click="changeRecommend(index)" :class="{recommendActive:recommendIndex===index}">{{item}}</view>
				</view>
			</view>
			
			<!-- ------------------------------------------------------------ -->
			<!-- 市集推荐的时候显示 -->
			<view class="result-center" v-if="recommendIndex===0">
				<view class="result-center-top">
					<text class="block"></text>
					<view class="title">
						<text v-for="(item,index) in titles" class="result-center-title" 
						:class="{active:index===currentIndex}" @click="getIndex(index)" 
						:key='index' >{{item}}
						</text>
					</view>
				</view>
				<view class="result-items">
					<view class="result-left">
						<view class="result-item">
							<image src="../../static/images/wander-exhibits1.jpg" mode="aspectFill"></image>
							<view class="iconfont icon-shoucang"></view>
						</view>
						<view class="result-item">
							<image src="../../static/images/wander-exhibits1.jpg" mode="aspectFill"></image>
							<view class="iconfont icon-shoucang"></view>
						</view>
						<view class="result-item">
							<image src="../../static/images/wander-exhibits1.jpg" mode="aspectFill"></image>
							<view class="iconfont icon-shoucang"></view>
						</view>
						<view class="result-item">
							<image src="../../static/images/wander-exhibits1.jpg" mode="aspectFill"></image>
							<view class="iconfont icon-shoucang"></view>
						</view>
					</view>
					<view class="result-right">
						<view class="result-item">
							<image src="../../static/images/wander-exhibits1.jpg" mode="aspectFill"></image>
							<view class="iconfont icon-shoucang"></view>
						</view>
						<view class="result-item">
							<image src="../../static/images/wander-exhibits1.jpg" mode="aspectFill"></image>
							<view class="iconfont icon-shoucang"></view>
						</view>
						<view class="result-item">
							<image src="../../static/images/wander-exhibits1.jpg" mode="aspectFill"></image>
							<view class="iconfont icon-shoucang"></view>
						</view>
						<view class="result-item">
							<image src="../../static/images/wander-exhibits1.jpg" mode="aspectFill"></image>
							<view class="iconfont icon-shoucang"></view>
						</view>
						
					</view>
				</view>
			</view>
			
			<!-- ------------------------------------------------------------ -->
			
			<recommend-exhibits v-else="recommendIndex===1"></recommend-exhibits>
		</view>
	</view>
</template>

<script>
	import recommendExhibits from "../../component/recommendExhibits/recommendExhibits.vue"
	export default {
		data() {
			return {
				titles:["艺术周边","艺术拍卖"],
				currentIndex:0,
				resultRecommends:['市集推荐','展览推荐','帖子推荐'],
				recommendIndex:0
			}
		},
		components:{
			recommendExhibits
		},
		methods: {
			getIndex(index){
				this.currentIndex=index;
			},
			changeRecommend(index){
				this.recommendIndex=index;
			}
		}
	}
</script>

<style lang="less">
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
					height: 60rpx;
					// position: relative;
					.input{
						width: 500rpx;
						height: 60rpx;
						border: 2rpx solid #5992CD;
						border-radius: 24rpx;
						margin: 0 auto;
					}		
				}
				.iconfont{
					font-size: 50rpx;
					margin-top: 10rpx;
					margin-left: 50rpx;
					color: #5992CD;
					position: absolute;
					right: 20rpx;
					top: -4rpx;
				}
				
				.result-navigator{
					margin-top: 40rpx;
					display: flex;
					justify-content: flex-start;
					.recommend{
						margin-left: 94rpx;
						font-size: 28rpx;
						color: #B5B6B8;
						transition: all 0.3s linear;
					}
					.recommendActive{
						color: #306FB6;
					}
				}
			}
			.result-center{
				.result-center-top{
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
						// display: flex;
						// justify-content: space-around;
						width: 600rpx;
						color: #B5B6B8;
						.result-center-title{
							font-size: 26rpx;
							transition: all 0.2s ease;
							margin-left: 10rpx;
							&:nth-child(2){
								margin-left: 150rpx;
							}
						}
						.active{
							color: #1E6CB5;
						}
					}
				}
				.result-items{
					display: flex;
					justify-content: space-between;
					.result-left,.result-right{
						// 160x227
						// 左右上下间隔均为10	5
						margin-top: 30rpx;
						width: 340rpx;
						.result-item{
							width: 340rpx;
							height: 454rpx;
							margin-top: 20rpx;
							position: relative;
							image{
								width: 100%;
								height: 100%;
								border-radius: 10rpx;
							}
							.iconfont{
								color: #fff;
								position: absolute;
								right: 20rpx;
								bottom: 20rpx;
								font-size: 50rpx;
							}
						}
					}
					.result-right{
						margin-top: 80rpx;
					}
				}
			}
			.bazzarShow{
				display: hidden;
			}
		}
	}
</style>
