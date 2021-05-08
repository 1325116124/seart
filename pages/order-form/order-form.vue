<template>
<!-- pages/order-form/order-form.wxml -->
<view class="order-form">
    <!-- 订单信息头部 -->
    <view class="order-form-top">
        <view class="item-img">
            <image class="item-pic" mode="scaleToFill" :src="orderDetail.introImage"></image>
        </view>
        <view class="item-detail">
            <text class="item-title">{{orderDetail.name}}</text>
            <text class="item-intro">{{orderDetail.introduction}}</text>
            <text class="item-cost">实际付款：{{orderDetail.price}}</text>
        </view>
    </view>
    <!-- 订单信息中部 -->
    <view class="order-form-middle">
        <view class="title">
            <view class="title-bar"></view>
            <text class="title-name">订单详情</text>
        </view>
        <view class="order-detail">
            <view>
                <text class="detail-title">卖家信息：</text>
                <text class="more-detail" id="seller-info">{{orderDetail.company}}</text>
            </view>
            <view>
                <text class="detail-title">下单时间：</text>
                <text class="more-detail" id="order-time">{{formatDate(orderDetail.time)}}</text>
            </view>
            <view>
                <text class="detail-title">订单编号：</text>
                <text class="more-detail" id="order-number">{{orderDetail.id}}</text>
            </view>
        </view>
    </view>
    <!-- 联系客服按钮 -->
    <button class="contact-support" open-type="contact">联系客服</button>
    <!-- 下方提示 -->
    <view class="order-form-bottom">
        <view class="title">
            <view class="title-bar"></view>
            <text class="title-name">互动与回顾</text>
        </view>
        <!-- 直播结束状态 -->
        <view class="review-or-living" v-if="ExhibitionDetail.status===2"  @tap="toCommunication()">
            <view class="pic-box">
                <image class="pic" :src="ExhibitionDetail.introImage" mode="center"></image>
            </view>
            <view class="text-box">
                <text class="review-or-living-text">直播回放</text>
            </view>
        </view>
        <!-- 展览未开始状态 -->
        <view class="not-start" v-else-if="ExhibitionDetail.status===0" @tap="toCommunication()">
            <view class="pic-box">
                <image class="pic" :src="ExhibitionDetail.introImage" mode="center"></image>
            </view>
            <view class="text-box">
                <text class="not-start-text">展览还未开始，点击可以先去评论区互动哦~</text>
            </view>
        </view>
        <!-- 正在直播状态 -->
        <view class="review-or-living" v-else-if="ExhibitionDetail.status===1" @tap="toCommunication()">
            <view class="pic-box">
                <image class="pic" :src="ExhibitionDetail.introImage" mode="center"></image>
            </view>
            <view class="text-box">
                <text class="review-or-living-text">正在直播</text>
            </view>
        </view>
    </view>
	<loading :showLoading="showLoading"></loading>
</view>
</template>

<script>
export default {
  data() {
    return {
		//订单的id
		id:0,
		//订单的信息
		orderDetail:{},
		//订单对应的展的信息
		ExhibitionDetail:{},
		showLoading:true,
	};
	
  },
  components: {},
  props: {},
  methods:{
	  //自定义格式化时间2:2021.7.21
	  formatDate(date){
	  	let d = new Date(date)
	  	let month = '' + (d.getMonth() + 1)
	  	let day = '' + d.getDate()
	  	let year = d.getFullYear()
		let hour = d.getHours()
		if(parseInt(hour)<10){
			hour = '0'+hour
		}
		let minute = d.getMinutes()
		if(parseInt(minute)<10){
			minute = '0'+minute
		}
		let str = hour + ":" + minute
	  	return [year, month, day].join('.') + "，" + str
	  },
	  //获取订单信息
	  async getOrderDetail(){
		  let res = await this.$myRequest({
			  url:"/order/getOrder/" + this.id
		  })
		  this.orderDetail = res.data.data
		  if(this.orderDetail.price % 1 === 0){
			   this.orderDetail.price = this.orderDetail.price + ".00"
		  }
		  this.getExhibitionDetail()
	  },
	  //获取对应的展的信息
	  async getExhibitionDetail(){
		  //showType 展览：0，沙龙：1，课程：2
		  let showType = this.orderDetail.showType
		  console.log(showType)
		  if(showType===0){
			  let res = await this.$myRequest({
					url:"/exhibitions/" + this.orderDetail.showId 
			  })
			  this.ExhibitionDetail = res.data.data
		  }else if(showType===1){
			  let res = await this.$myRequest({
			  		url:"/salons/" + this.orderDetail.showId 
			  })
			  this.ExhibitionDetail = res.data.data
		  }else if(showType===2){
			  let res = await this.$myRequest({
			  		url:"/courses/" + this.orderDetail.showId 
			  })
			  this.ExhibitionDetail = res.data.data
		  }
		  console.log(this.ExhibitionDetail)
	  },
	  //根据回放或者直播以及相应的type跳转到相应的界面
	  toCommunication(){
		 uni.navigateTo({
			 url:"../real-time-communication/real-time-communication?id=" + 
			 this.ExhibitionDetail.id + "&type=" + this.ExhibitionDetail.type, 
		 })
	  }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
	  this.id = options.id;
	  this.getOrderDetail()
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
<style>
@import "./order-form.css";
</style>