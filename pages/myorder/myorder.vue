<template>
<!-- pages/myorder/myorder.wxml -->
<view class="myorder-main-box">
	<view class="function-title" :class="{functionTitleActive:functionIndex===1}">
		<view class="function-block" v-for="(item,index) in functionTitle" 
		:key="index" @click="changeIndex(index)" :class="{textActive:functionIndex===index}">{{item}}</view>
		<view class="assistant" :class="{assistantActive1:functionIndex===0,
		assistantActive3:functionIndex===2}"></view><!-- 该盒子仅仅作为背景填充辅助作用 -->
		<view class="assistant-bottom" :class="{assistantBottomActive1:functionIndex===0,
		assistantBottomActive2:functionIndex===1,assistantBottomActive3:functionIndex===2}"></view>
	</view>
	
    <view class="unoverdue" v-if="functionIndex===2">
		<view class="order" v-for="(item,index) in unoverdueOrder" :key="item.id" @tap="toOrderForm(item.id)">
			<view class="item-img">
				<image class="item-pic" mode="scaleToFill" :src="item.introImage"></image>
			</view>
			<view class="item-block">
				<view class="item-top">
					<view class="item-detail">
						<text class="item-title">{{item.name}}</text>
						<text class="item-date">{{formatDate2(item.startTime)}} - {{formatDate2(item.endTime)}}</text>
					</view>
				</view>
				<view class="bottom-box">
					<view class="item-bottom">
						<view class="order-number">单号：{{item.id}}</view>
						<view class="order-location">地点：{{item.address}}</view>
						<view class="order-count">数量：{{item.number}}</view>
						<view class="order-price">RMB : {{item.price}}</view>
						<view class="order-status">状态：未使用</view>
					</view>
					<text class="delete" @tap.stop="deleteOrder(item.id)">删除订单</text>
				</view>
			</view>
		</view>
	</view>
    <view class="overdue" v-else-if="functionIndex===1">
		<view class="order isUsed" v-for="(item,index) in overdueOrder" :key="item.id" @tap="toOrderForm(item.id)">
			<view class="item-img">
				<image class="item-pic" mode="scaleToFill" :src="item.introImage"></image>
			</view>
			<view class="item-block">
				<view class="item-top">
					<view class="item-detail">
						<text class="item-title">{{item.name}}</text>
						<text class="item-date">{{formatDate2(item.startTime)}} - {{formatDate2(item.endTime)}}</text>
					</view>
				</view>
				<view class="bottom-box">
					<view class="item-bottom">
						<view class="order-number">单号：{{item.id}}</view>
						<view class="order-location">地点：{{item.address}}</view>
						<view class="order-count">数量：{{item.number}}</view>
						<view class="order-price">RMB : {{item.price}}</view>
						<view class="order-status">状态：已使用</view>
					</view>
					<text class="delete" @tap.stop="deleteOrder(item.id)">删除订单</text>
				</view>
			</view>
		</view>
	</view>
	<view class="allOrder" v-else-if="functionIndex===0">
		<view class="order" v-for="(item,index) in sumOrder" :key="item.id" :class="{isUsed:item.usedStatus===1}" @tap="toOrderForm(item.id)">
			<view class="item-img">
				<image class="item-pic" mode="scaleToFill" :src="item.introImage"></image>
			</view>
			<view class="item-block">
				<view class="item-top">
					<view class="item-detail">
						<text class="item-title">{{item.name}}</text>
						<text class="item-date">{{formatDate2(item.startTime)}} - {{formatDate2(item.endTime)}}</text>
					</view>
				</view>
				<view class="bottom-box">
					<view class="item-bottom">
						<view class="order-number">单号：{{item.id}}</view>
						<view class="order-location">地点：{{item.address}}</view>
						<view class="order-count">数量：{{item.number}}</view>
						<view class="order-price">RMB : {{item.price}}</view>
						<view class="order-status">状态：{{item.usedStatus===0?"未使用":"已使用"}}</view>
					</view>
					<text class="delete" @tap.stop="deleteOrder(item.id)">删除订单</text>
				</view>
			</view>
		</view>
	</view>
	<view class="main-bottom">......已经到底啦......</view>
	<loading :showLoading="showLoading"></loading>
</view>
</template>

<script>
export default {
  data() {
    return {
		functionTitle:["全部","已使用","未使用"],
		functionIndex:0,
		//过期的订单
		overdueOrder:[],
		//未过期的订单
		unoverdueOrder:[],
		//总的订单
		sumOrder:[],
		//订单总数
		orderNum:0,
		userInfo:{},
		showLoading:true,
	};
  },
  components: {},
  props: {},
  methods: {
  	  changeIndex(index){
  	  	this.functionIndex=index;
  	  },
	  //自定义格式化时间2:2021.7.21
	  formatDate2(date){
	  	let d = new Date(date)
	  	let month = '' + (d.getMonth() + 1)
	  	let day = '' + d.getDate()
	  	let year = d.getFullYear()
	  	return [year, month, day].join('.');
	  },
	  //获取用户信息
	  async getUserInfo(){
	    if(uni.getStorageSync('user')){
	  	  this.userInfo = uni.getStorageSync('user');
	    } 
	  },
	  //获取所有的订单
	  async getOrder(){
		  //先清空所有的订单消息 
		  this.overdueOrder = []
		  this.unoverdueOrder = []
		  this.sumOrder = []
		  //先获取未过期的
		  let res = await this.$myRequest({
			  url:"/order/" + this.userInfo.userId + "/0/" + this.orderNum
			  // order/{id}/{current}/{count}
		  })
		  this.sumOrder = res.data.data
		  res = await this.$myRequest({
			  url:"/order/" + this.userInfo.userId + "/0/" + this.orderNum + "?usedStatus=1"
			  // order/{id}/{current}/{count}
		  })
		  this.overdueOrder = res.data.data
		  res = await this.$myRequest({
			  url:"/order/" + this.userInfo.userId + "/0/" + this.orderNum + "?usedStatus=0"
			  // order/{id}/{current}/{count}
		  })
		  this.unoverdueOrder = res.data.data
	  },
	  //删除订单
	  deleteOrder(id){
		  this.$myRequest({
			  url:"/order/delete/" + id,
			  method:"POST",
			  success:function(res){
				  console.log(res)
			  }
		  })
		  //重新获取订单的信息
		  this.getOrder()
	  },
	  //跳往订单详情
	  toOrderForm(id){
		  uni.navigateTo({
			  url:"../order-form/order-form?id=" + id,
		  })
	  },
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
	  this.orderNum = options.orderNum
	  this.getUserInfo()
	  this.getOrder()
	  this.showLoading = false;
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
	  this.showLoading = true;
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
  
};
</script>
<style lang="less">
@import "./myorder.css";
</style>