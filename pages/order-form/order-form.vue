<template>
<!-- pages/order-form/order-form.wxml -->
<view class="order-form">
    <!-- 订单信息头部 -->
    <view class="order-form-top">
        <view class="item-img">
            <image class="item-pic" mode="scaleToFill" src="/static/images/album.jpg"></image>
        </view>
        <view class="item-detail">
            <text class="item-title">HELLO 2021</text>
            <text class="item-intro">毕加索的麻胶版画部分的展览</text>
            <text class="item-cost">实际付款：300.00</text>
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
                <text class="more-detail" id="seller-info">上海美术馆有限公司</text>
            </view>
            <view>
                <text class="detail-title">下单时间：</text>
                <text class="more-detail" id="order-time">2020.10.25， 10：06</text>
            </view>
            <view>
                <text class="detail-title">订单编号：</text>
                <text class="more-detail" id="order-number">1025689326988</text>
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
        <view class="review-or-living">
            <view class="pic-box">
                <image class="pic" src="/static/images/result-bazzar4.jpg" mode="center"></image>
            </view>
            <view class="text-box">
                <text class="review-or-living-text">直播回放</text>
            </view>
        </view>
        <!-- 展览未开始状态 -->
        <view class="not-start">
            <view class="pic-box">
                <image class="pic" src="/static/images/result-bazzar1.jpg" mode="center"></image>
            </view>
            <view class="text-box">
                <text class="not-start-text">展览还未开始，点击可以先去评论区互动哦~</text>
            </view>
        </view>
        <!-- 正在直播状态 -->
        <view class="review-or-living">
            <view class="pic-box">
                <image class="pic" src="/static/images/result-bazzar4.jpg" mode="center"></image>
            </view>
            <view class="text-box">
                <text class="review-or-living-text">正在直播</text>
            </view>
        </view>
    </view>
</view>
</template>

<script>
export default {
  data() {
    return {};
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
  methods: {}
};
</script>
<style>
@import "./order-form.css";
</style>