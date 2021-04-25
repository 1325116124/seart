<template>
	<view class="wander-discover">
		<view class="discover-body">
			<view class="discover-top">
				<view class="search">
					<!-- <input type="text" placeholder-class="Search" placeholder="Discover"
					@focus="changeInputClass" :class="{inputActive:isInputActive}" @blur="removeInputClass"> -->
					<view class="input">
						<scroll-view scroll-x="true" class="selectedWords" show-scrollbar="false">
							<view class="selectedWord-body">
								<view class="selectedWord" v-for="(item,index) in isSelectedArraySum" :key="index">
									<view class="text">{{item}}</view>
									<view class="delete" @click="delSelectedWord(item,index)">×</view>
								</view>
							</view>
						</scroll-view>
					</view>
					<text class="iconfont icon-fangdajing" @click="toResult"></text>
					<!-- 当用户选择的标签为0时出现的弹窗 -->
					<uni-popup ref="popup" type="dialog">
					    <uni-popup-dialog type="info" mode="base" title="提示" content="您尚未选择任何标签!" :duration="2000" :before-close="true" @close="close" @confirm="confirm"></uni-popup-dialog>
					</uni-popup>
				</view>
			</view>
			<view class="popular">
				<view class="popular-title">热门搜索词</view>
				<view class="popular-word-line">
					<view v-for="(item,index) in popular_word" class="popular-word" 
					:class="{isSelected:isChanged.indexOf(index) !== -1 }" :key='index' @click="changeWord(index)">{{item}}</view>
				</view>
			</view>
			<view class="classify">
				<view class="classify-title">展览分类</view>
					<view class="classify-word-line">
						<view v-for="(item,index) in classify_word" class="classify-word"
					:class="{isSelected:isChanged2.indexOf(index) !== -1 }" :key='index' @click="changeWord2(index)">{{item}}</view>
					</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniPopup from "../../components/uni-popup/uni-popup.vue"
	import uniPopupDialog from "../../components/uni-popup/uni-popup-dialog.vue"
	export default {
		data() {
			return {
				isInputActive:false,
				popular_word:['橘色','草间拟生','生动的','颜色丰富','草间','橘色','蓝色','最新的','蒂芙尼'],
				classify_word:['摄影','服装','历史','工业','服装','毕业展','建筑','陶瓷艺术','陶瓷艺术','摄影'],
				isChanged:[],
				isSelectedArray:[],//存被选中的标签
				isChanged2:[],
				isSelectedArray2:[],
				//总的标签，用于放入input框
				isSelectedArraySum:[]
			}
		},
		//注册提示窗口的子组件
		components:{
			uniPopup,
			uniPopupDialog
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
					if(this.isSelectedArraySum.length<3){
						this.isSelectedArraySum.push(this.popular_word[index])
					}
				}else{
					this.isChanged.splice(this.isChanged.indexOf(index),1);
					this.isSelectedArraySum.remove(this.popular_word[index]);
				}
				this.isSelectedArray = [];
				this.isChanged.forEach((item,index) => {
					this.isSelectedArray.push(this.popular_word[item]);
				})
				console.log(this.isSelectedArraySum)
			},
			changeWord2(index){
				if(this.isChanged2.indexOf(index) === -1){
					this.isChanged2.push(index);
					this.isSelectedArraySum.push(this.classify_word[index])
				}else{
					this.isChanged2.splice(this.isChanged2.indexOf(index),1);
					this.isSelectedArraySum.remove(this.classify_word[index]);
				}
				this.isSelectedArray2 = [];
				this.isChanged2.forEach((item,index) => {
					this.isSelectedArray2.push(this.classify_word[item]);
				})
				console.log(this.isSelectedArraySum)
			},
			delSelectedWord(item,index){
				this.isSelectedArraySum.remove(item,index);
				// const found = array1.find(element => element > 10);
				const isChanged1 = this.popular_word.indexOf(item);
				console.log(isChanged1)
				if(isChanged1>=0){
					this.isChanged.remove(isChanged1);
				}else{
					const isChanged2 = this.classify_word.indexOf(item);
					this.isChanged2.remove(isChanged2);
					console.log(isChanged2)
				}
			},
			close(done){
				done()
			},
			confirm(done,value){
				done()
			},
			toResult(){
				if(this.isSelectedArraySum.length===0) {
					 this.$refs.popup.open()
				}
				else{
					uni.navigateTo({
						url:"../discover-result/discover-result",
						events: {
						    // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
						    acceptDataFromOpenedPage: function(data) {
						      console.log(data)
						    },
						    someEvent: function(data) {
						      console.log(data)
							}
						  },
						success: (res) => {
							res.eventChannel.emit('acceptDataFromOpenerPage', { isSelectedArraySum:this.isSelectedArraySum })
						}
					})
				}
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
						position: relative;
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
										height: 44rpx;
										font-size: 30rpx;
										color: #006AD7;
										text-align: center;
										line-height: 44rpx;
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
			}
			.popular{
				margin-top: 60rpx;
				.popular-title{
					text-align: center;
					color: #006AD7;
					font-size: 30rpx;
					margin-bottom: 30rpx;
				}
				.popular-word-line{
					width: 100%;
					margin: 0 auto;
					display: flex;
					justify-content: center;
					flex-wrap: wrap;
					.popular-word{
						margin-top: 30rpx;
						padding: 6rpx 50rpx;
						border: 2rpx solid #4F73A5;
						font-size: 28rpx;
						border-radius: 10rpx;
						margin-right: 30rpx;
						color: #6887B2;
					}
				}
			}
			.classify{
				margin-top: 80rpx;
				.classify-title{
					text-align: center;
					color: #006AD7;
					font-size: 30rpx;
					margin-bottom: 30rpx;
				}
				.classify-word-line{
					width: 100%;
					margin: 0 auto;
					display: flex;
					justify-content: center;
					flex-wrap: wrap;
					.classify-word{
						padding: 6rpx 40rpx;
						border: 2rpx solid #4F73A5;
						font-size: 28rpx;
						border-radius: 10rpx;
						margin-right: 30rpx;
						color: #6887B2;
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
