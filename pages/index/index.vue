<template>
	<view class="content">
	</view>
</template>

<script>
	export default {
		data() {
			return {
			
			}
		},
		onLoad() {
			uni.login({
			   provider: 'weixin',
			   success: function (loginRes) {
			       console.log(JSON.stringify(loginRes));
				   uni.getUserInfo({
				   	provider: 'weixin',
				   	success: function(infoRes) {
				   		console.log('-------获取微信用户所有-----')
				   		console.log(JSON.stringify(infoRes.userInfo));
				   	}
				   });   
			},
		})
	},
		methods: {

		}
	}
</script>

<style>
	
</style>
