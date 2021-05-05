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
    <view class="order">
        <view class="item-img">
            <image class="item-pic" mode="scaleToFill" src="/static/images/broadcast.jpg"></image>
        </view>
        <view class="item-block">
            <view class="item-top">
                <view class="item-detail">
                    <text class="item-title">毕加索 麻胶版画展</text>
                    <text class="item-date">2020.12.21-2021.1.5</text>
                </view>
            </view>
            <view class="bottom-box">
                <view class="item-bottom">
                    <view class="order-number">单号：20212003669874521</view>
                    <view class="order-location">地点：The big wave livehouse</view>
                    <view class="order-count">数量：one</view>
                    <view class="order-price">RMB : 36</view>
                    <view class="order-status">状态：已使用</view>
                </view>
                <text class="delete">删除订单</text>
            </view>
        </view>
    </view>
    <view class="order isUsed">
        <view class="item-img">
            <image class="item-pic" mode="scaleToFill" src="/static/images/album.jpg"></image>
        </view>
        <view class="item-block">
            <view class="item-top">
                <view class="item-detail">
                    <text class="item-title">毕加索 麻胶版画展</text>
                    <text class="item-date">2020.12.21-2021.1.5</text>
                </view>
            </view>
            <view class="bottom-box">
                <view class="item-bottom">
                    <view class="order-number">单号：20212003669874521</view>
                    <view class="order-location">地点：The big wave livehouse</view>
                    <view class="order-count">数量：one</view>
                    <view class="order-price">RMB : 36</view>
                    <view class="order-status">状态：已使用</view>
                </view>
                <text class="delete">删除订单</text>
            </view>
        </view>
    </view>
    <view class="order">
        <view class="item-img">
            <image class="item-pic" mode="scaleToFill" src="/static/images/broadcast.jpg"></image>
        </view>
        <view class="item-block">
            <view class="item-top">
                <view class="item-detail">
                    <text class="item-title">毕加索 麻胶版画展</text>
                    <text class="item-date">2020.12.21-2021.1.5</text>
                </view>
            </view>
            <view class="bottom-box">
                <view class="item-bottom">
                    <view class="order-number">单号：20212003669874521</view>
                    <view class="order-location">地点：The big wave livehouse</view>
                    <view class="order-count">数量：one</view>
                    <view class="order-price">RMB : 36</view>
                    <view class="order-status">状态：已使用</view>
                </view>
                <text class="delete">删除订单</text>
            </view>
        </view>
    </view>
    <view class="order isUsed">
        <view class="item-img">
            <image class="item-pic" mode="scaleToFill" src="/static/images/album.jpg"></image>
        </view>
        <view class="item-block">
            <view class="item-top">
                <view class="item-detail">
                    <text class="item-title">毕加索 麻胶版画展</text>
                    <text class="item-date">2020.12.21-2021.1.5</text>
                </view>
            </view>
            <view class="bottom-box">
                <view class="item-bottom">
                    <view class="order-number">单号：20212003669874521</view>
                    <view class="order-location">地点：The big wave livehouse</view>
                    <view class="order-count">数量：one</view>
                    <view class="order-price">RMB : 36</view>
                    <view class="order-status">状态：已使用</view>
                </view>
                <text class="delete">删除订单</text>
            </view>
        </view>
    </view>
    <view class="main-bottom">......已经到底啦......</view>
</view>
</template>

<script>
export default {
  data() {
    return {
		functionTitle:["全部","已使用","live专区"],
		functionIndex:0,
	};
  },
  components: {},
  props: {},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},
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
  onUnload: function () {},
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
  methods: {
	  changeIndex(index){
	  	this.functionIndex=index;
	  },
  }
};
</script>
<style lang="less">
@import "./myorder.css";
</style>