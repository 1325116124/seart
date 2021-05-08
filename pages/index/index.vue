<template>
	<view class="content">
		<button @click="testFn">打开弹窗</button>
		<uni-popup ref="popup" type="dialog">
		    <uni-popup-dialog mode="base" message="成功消息" :duration="2000" :before-close="true" @close="close" @confirm="confirm" title="12312" content="123132">
				<view class="test">
					<view class="title">提示</view>
					<view class="content">标签最多选择三个哦！</view>
				</view>
			</uni-popup-dialog>
		</uni-popup>
		<!-- <uni-popup ref="popup" type="message">
		    <uni-popup-message type="success" message="成功消息" :duration="2000"></uni-popup-message>
		</uni-popup> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				flag:false
			}
		},
		onLoad() {
			
	},
		methods: {
			 open() {
			             this.$refs.popup.open()
			         },
			         /**
			          * 点击取消按钮触发
			          * @param {Object} done
			          */
			         close() {
			             // TODO 做一些其他的事情，before-close 为true的情况下，手动执行 close 才会关闭对话框
			             // ...
			             this.$refs.popup.close()
			         },
					 confirm(value) {
					             // 输入框的值
					             console.log(value)
					             // TODO 做一些其他的事情，手动执行 close 才会关闭对话框
					             // ...
					             this.$refs.popup.close()
					         },
							 testFn(){
								 this.open()
							 }
		}
	}
</script>

<style lang="less">
	.test{
		width: 500rpx;
		height: 300rpx;
		background-color: #fff;
		border-radius: 50rpx;
		text-align: center;
		padding-top: 20rpx;
		.title{
			font-size: 30rpx;
		}
		.content{
			margin-top: 100rpx;
			width: 100%;
		}
	}
</style>
