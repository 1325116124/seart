<template>
	<view>
		<button @click="Login()">点击登录</button>
		<loading></loading>
	</view>
</template>

<script>
	import loading from "../../components/loading/loading.vue"
	export default {
		data() {
			return {
				
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
								console.log(loginRes);
								uni.request({
									url:"http://112.74.59.218:8080/login",
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
									success(res) {
										user.code = loginRes.code
										user.openId = res.data.data.id
										console.log(user.code)
										uni.getLocation({
										    type: 'wgs84',
										    success: function (res) {
												user.longitude = res.longitude
												user.latitude = res.latitude
												uni.setStorageSync('user',user);
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
		// 	myLogin(){
		// 		uni.login({
		// 			provider: 'weixin',
		// 			success: loginRes => {
		// 				// console.log('-------用户授权，并获取用户code------');
		// 				let code = loginRes.code;
		// 				console.log(loginRes);
		// 				uni.getUserProfile({
		// 					desc:'正在获取',//不写不弹提示框
		// 					    success:function(res){
		// 					      // app.globalData.userInfo=res.userInfo //存储用户信息
		// 					      console.log('获取成功: ',res)
		// 					      uni.showToast({
		// 					        title:'授权成功',
		// 					        mask:true
		// 					      })
		// 					      setTimeout(res=>{
		// 					        //跳转到上级界面
		// 					        uni.navigateBack();
		// 					      }, 1500)
		// 					    },
		// 					    fail:function(err){
		// 					      console.log("获取失败: ",err)
		// 					      uni.navigateBack();
		// 					    }
		// 				})			
		// 			// 	uni.getUserProfile({
		// 			// 		desc:'正在获取',//不写不弹提示框
		// 			// 		success: userRes => {
		// 			// 			console.log(userRes);
		// 			// 			let iv = userRes.iv;
		// 			// 			let encrypted_data = userRes.encryptedData;
		// 			// 			let nickName = userRes.userInfo.nickName;
		// 			// 			let avatarUrl = userRes.userInfo.avatarUrl;
		// 			// 			let gender = userRes.userInfo.gender;
		// 			// 			let country = userRes.userInfo.country;
		// 			// 			let province = userRes.userInfo.province;
		// 			// 			let city = userRes.userInfo.city;
		// 			// 			uni.showToast({
		// 			// 			  title:'授权成功',
		// 			// 			  mask:true
		// 			// 			})
		// 			// 			uni.request({
		// 			// 				url:"http://47.112.188.99:8080/login",
		// 			// 				method:"PUT",
		// 			// 				data:{
		// 			// 					code:code,
		// 			// 					nickName:nickName,
		// 			// 					avatarUrl:avatarUrl,
		// 			// 					gender:gender,
		// 			// 					country:country,
		// 			// 					province:province,
		// 			// 					city:city
		// 			// 				},
		// 			// 				success(res) {
		// 			// 					console.log(res);
		// 			// 				}
		// 			// 			})
		// 			// 		}
							
		// 			// 	})
					
		// 			},
		// 		})
						
		// 	}
		
		},
		onLoad() {
			
		}
	}
</script>

<style>

</style>
