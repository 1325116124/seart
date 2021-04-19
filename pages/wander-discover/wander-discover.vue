<template>
	<view class="wander-discover">
		<view class="discover-body">
			<view class="discover-top">
				<view class="search">
					<input type="text" placeholder-class="Search" placeholder="Discover"
					@focus="changeInputClass" :class="{inputActive:isInputActive}" @blur="removeInputClass">
					<text class="iconfont icon-fangdajing" @click="toResult"></text>
				</view>
			</view>
			<view class="popular">
				<view class="popular-title">热门搜索词</view>
				<view class="popular-word-line">
					<view v-for="(item,index) in popular_word" class="popular-word" 
					:class="{isSelected:isChanged.indexOf(index) !== -1 }" :key='index' @click="changeWord(index)">{{item}}</view>
					<!-- <view class="popular-word">草间拟生</view>
					<view class="popular-word">生动的</view>
					<view class="popular-word">颜色丰富</view>
					<view class="popular-word">草间拟生</view>
					<view class="popular-word">橘色</view>
					<view class="popular-word">蓝色</view>
					<view class="popular-word">最新的</view>
					<view class="popular-word">蒂芙尼</view> -->
				</view>
			</view>
			<view class="classify">
				<view class="classify-title">展览分类</view>
					<view class="classify-word-line">
						<view v-for="(item,index) in classify_word" class="classify-word"
					:class="{isSelected:isChanged2.indexOf(index) !== -1 }" :key='index' @click="changeWord2(index)">{{item}}</view>
						<!-- <view class="classify-word">服装</view>
						<view class="classify-word">历史</view>
						<view class="classify-word">建筑</view>
						<view class="classify-word">服装</view>
						<view class="classify-word">毕业展</view>
						<view class="classify-word">建筑</view>
						<view class="classify-word">陶瓷艺术</view>
						<view class="classify-word">陶瓷艺术</view>
						<view class="classify-word">摄影</view> -->
					</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isInputActive:false,
				popular_word:['橘色','草间拟生','生动的','颜色丰富','草间拟生','橘色','蓝色','最新的','蒂芙尼'],
				classify_word:['摄影','服装','历史','建筑','服装','毕业展','建筑','陶瓷艺术','陶瓷艺术','摄影'],
				isChanged:[],
				isSelectedArray:[],//存被选中的标签
				isChanged2:[],
				isSelectedArray2:[],
			}
		},
		methods: {
			changeInputClass(){
				this.isInputActive=true;
			},
			removeInputClass(){
				this.isInputActive=false;
			},
			changeWord(index){
				if(this.isChanged.indexOf(index) === -1){
					this.isChanged.push(index);
				}else{
					this.isChanged.splice(this.isChanged.indexOf(index),1);
				}
				for(let index in this.isChanged){
					this.isSelectedArray.push(this.popular_word[index]);
				}
			},
			changeWord2(index){
				if(this.isChanged2.indexOf(index) === -1){
					this.isChanged2.push(index);
				}else{
					this.isChanged2.splice(this.isChanged2.indexOf(index),1);
				}
				for(let index in this.isChanged2){
					this.isSelectedArray2.push(this.classify_word[index]);
				}
			},
			toResult(){
				uni.navigateTo({
					url:"../discover-result/discover-result"
				})
			}
		}
	}
</script>

<style lang="less">
	@color:#1E6CB5;
	.wander-discover{
		.discover-body{
			width: 700rpx;
			margin: 0 auto;
			.discover-top{
				margin-top: 20rpx;
				width: 100%;
				.search{
					width: 100%;
					display: flex;
					justify-content: space-around;
					.Search{
						color: @color;
						font-size: 50rpx;
					}
					.iconfont{
						width: 10%;
						font-size: 50rpx;
						color: @color;
						margin-top: -2rpx;
					}
					input[type=text]{
						width: 80%;
						height: 60rpx;
						line-height: 60rpx;
						transform: all 1s ease;
						padding: 0 0 10rpx 0;
						box-sizing: border-box;
						border-bottom: 2rpx solid transparent;
					}
					.inputActive{
						border-bottom: 2rpx solid #1E6CB5 !important;
					}
				}
			}
			.popular{
				margin-top: 60rpx;
				.popular-title{
					text-align: center;
					color: @color;
					font-size: 30rpx;
				}
				.popular-word-line{
					width: 100%;
					margin: 0 auto;
					display: flex;
					justify-content: center;
					flex-wrap: wrap;
					.popular-word{
						margin-top: 30rpx;
						padding: 6rpx 40rpx;
						border: 2rpx solid #D0E0EC;
						font-size: 26rpx;
						border-radius: 10rpx;
						margin-right: 30rpx;
						color: #5B7BA1;
					}
				}
			}
			.classify{
				margin-top: 100rpx;
				.classify-title{
					text-align: center;
					color: @color;
					font-size: 30rpx;
				}
				.classify-word-line{
					width: 100%;
					margin: 0 auto;
					display: flex;
					justify-content: center;
					flex-wrap: wrap;
					.classify-word{
						padding: 6rpx 40rpx;
						border: 2rpx solid #D0E0EC;
						font-size: 26rpx;
						border-radius: 10rpx;
						margin-right: 30rpx;
						color: #5B7BA1;
						margin-top: 30rpx;
					}
				}
			}
			.isSelected{
				background-color: #D0E0EC;
			}
		}
	}
</style>
