<template>
	<view class="page">
		<view class="logo-item">
			<image src="../../static/images/logo.jpg" mode="aspectFit" class="logo"></image>
			<view class="name">seart</view>
		</view>
		<button @click="Login()" class=".login">点击登录</button>
		<loading :showLoading="showLoading"></loading>
	</view>
</template>

<script>
	import loading from "../../components/loading/loading.vue"
	export default {
		data() {
			return {
				showLoading:true
			}
		},
		components:{
			loading
		},
		methods: {
			Login(){
				uni.getUserProfile({
					desc:'正在获取',//不写不弹提示框
					success:function(userRes){
					  // app.globalData.userInfo=res.userInfo //存储用户信息
						console.log('获取成功: ',userRes)
						let iv = userRes.iv;
						let encrypted_data = userRes.encryptedData;
						let nickName = userRes.userInfo.nickName;
						let avatarUrl = userRes.userInfo.avatarUrl;
						let gender = userRes.userInfo.gender;
						let country = userRes.userInfo.country;
						let province = userRes.userInfo.province;
						let city = userRes.userInfo.city;
						let user={
							nickName:nickName,
							avatarUrl:avatarUrl,
							gender:gender,
							country:country,
							province:province,
							city:city
						}
						uni.login({
							provider: 'weixin',
							success: loginRes => {
								// console.log('-------用户授权，并获取用户code------');
								uni.request({
									url:"http://120.79.57.164:8080/login",
									method:"PUT",
									header : {  
										'content-type': 'application/x-www-form-urlencoded;charset=utf-8'  
									},
									data: {
										code:loginRes.code,
									},
									// data:{
									// 	code:code,
										// nickName:nickName,
										// avatarUrl:avatarUrl,
										// gender:gender,
										// country:country,
										// province:province,
										// city:city
									// },
									success: res => {
										user.code = loginRes.code
										user.openId = res.data.data.id
										uni.getLocation({
										    type: 'wgs84',
										    success: res => {
												user.longitude = res.longitude
												user.latitude = res.latitude
												//获取用户在数据库中的id
												uni.request({
													url:"http://120.79.57.164:8080/authorize/"+ user.openId + "/" + user.nickName,
													data:{
														avatarUrl:user.avatarUrl,
														gender:user.gender,
														country:user.country,
														province:user.province,
														city:user.city
													},
													method:"POST",
													success:function(res){
														user.userId = res.data.data;
														uni.setStorageSync('user',user);
													},
													fail: function(err){
														console.log(err)
													}
												})
										    },
											fail: function(err){
												console.log(err)
											}
										});
									},
									fail(err) {
										console.log("fall",err)
									}
								})
							}
						});
						uni.showToast({
							title:'登录成功',
							mask:true
						})
						setTimeout(res=>{
						//跳转到上级界面
							uni.navigateBack();
						}, 1500)
					},
					fail:function(err){
					  console.log("获取失败: ",err)
					  uni.navigateBack();
					}
				})				
			},
		},
		onLoad() {
			this.showLoading = false;
		},
		onUnload() {
			this.showLoading = true;
		}
	}
</script>

<style lang="less">
	.page{
		width: 100%;
		height: 100%;
		background: url(../../static/images/login.png) no-repeat;
		background-size: cover;
		.logo-item{
			position: absolute;
			left: 50%;
			transform: translateX(-50%);
			top: 250rpx;
			text-align: center;
			.logo{
				height: 170rpx;
			}
			.name{
				color: #1A5894;
			}
		}
		.login{
			position: absolute;
			width: 560rpx;
			height: 60rpx;
			background-color: #fff;
			line-height: 60rpx;
			text-align: center;
			border-radius: 24rpx;
			font-size: 30rpx;
			color: #1A5894;
			top: 900rpx;
			left: 50%;
			transform: translateX(-50%);
			box-shadow: 0 0 0 0 #ccc,0 0 10rpx 0 #ccc,0 0 10rpx 0 #ccc,0 0 10rpx 0 #ccc;
		}
	}
</style>
