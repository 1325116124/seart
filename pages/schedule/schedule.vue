<template>
<view>
<!-- pages/schedule/schedule.wxml -->
<view class="schedule-top">
    <view class="schedule-top-box">
        <view class="schedule-date">
            <view class="date-bar"></view>
            <text class="date">2021年4月21日</text>
        </view>
        <view class="schedule-name">毕加索 麻胶版画展</view>
        <view class="schedule-date">
            <view class="date-bar"></view>
            <text class="date">2021年4月21日</text>
        </view>
        <view class="schedule-name">毕加索 麻胶版画展</view>
    </view>
    <view class="schedule-main-box">
        <view class="main-body">
            <view class="title">
                <view class="title-bar"></view>
                <text class="title-name">我的日程</text>
            </view>
            <view class="schedule-item">
                <view class="item-top">
                    <view class="item-img">
                        <image class="item-pic" mode="scaleToFill" src="/static/images/broadcast.jpg"></image>
                    </view>
                    <view class="item-detail">
                        <text class="item-title">毕加索 麻胶版画展</text>
                        <text class="item-date">2020.12.21-2021.1.5</text>
                    </view>
                </view>
                <view class="schedule-matters">
                    <view>注意事项：</view>
                    <view class="matters-content">
                        《时间的形态》将于2020.11.16-11.26闭展更新部分展品。《时间的形态》将于2020.11.16-11.26闭展更新部分展品。
                    </view>
                </view>
            </view>
            <map class="map" :enable-scroll="false" :longitude="longitude" :latitude="latitude" :markers="markers" :scale="scale"></map>
        </view>
        <view class="main-bottom">......已经到底啦......</view>
    </view>
</view>
<!-- 具体日程信息 -->
<view class="schedule-main"></view>
</view>
</template>

<script>

export default {
  data() {
    return {
      longitude: 113.411806,
      latitude: 23.053945,
      scale: 13,
      markers: [{
        longitude: 113.411806,
        latitude: 23.053945,
        iconPath: "/static/static/icon/location-map.png",
        width: 30,
        height: 30,
        alpha: 0.3
      }]
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
  methods: {}
};
</script>
<style>
@import "./schedule.css";
</style>