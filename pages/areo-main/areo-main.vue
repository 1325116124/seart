<template>
<!-- pages/areo-main/areo-main.wxml -->
<view :class="'areo-main ' + (isDayTime ? 'isDay':'')">
    <!-- 个人信息头部 -->
    <view class="areo-top">
        <view class="user">
            <navigator url="../../pages/user-self/user-self">
                <image class="user-image" src="/static/images/user-image.jpg" mode="aspectFit" lazy-load="false" @error @load></image>
            </navigator>
            <view class="user-info">
                <text class="user-name">想不出名字啦</text>
                <view class="user-customization-block" :id="isDayTime ? 'UserInDay':''">
                    <text class="user-customization">我的艺术定制</text>
                </view>
            </view>
        </view>
        <view class="follow-block">
            <text class="user-tag">能不能不上课呀！！！！</text>
            <text class="user-follow">
                <text class="followed">
                    <text class="follow-title">关注</text>
                    <text class="num">12</text>
                </text>
                <text class="follower">
                    <text class="follow-title">粉丝</text>
                    <text class="num">12</text>
                </text>
            </text>
        </view>
    </view>
    <!-- areo-body -->
    <view class="areo-body-box">
        <view class="areo-body">
            <view class="title">
                <view class="title-bar"></view>
                <text class="title-name">我的日程</text>
            </view>
            <navigator url="../../pages/schedule/schedule">
                <view class="schedule-and-order">
                    <text>广州车展2021年7月5日 14：00</text>
                </view>
            </navigator>
            <view class="title">
                <view class="title-bar"></view>
                <text class="title-name">我的订单</text>
            </view>
            <navigator url="../../pages/myorder/myorder">
                <view class="schedule-and-order">
                    <text>2个待使用</text>
                </view>
            </navigator>
            <view class="title">
                <view class="title-bar"></view>
                <text class="title-name">我的收藏</text>
            </view>
            <view class="collection-block">
                <navigator url="../../pages/collection/collection" class="collection-item">
                    <text class="category">展览</text>
                    <text class="collection-count">共12个</text>
                </navigator>
                <navigator url="../../pages/collection/collection" class="collection-item">
                    <text class="category">沙龙</text>
                    <text class="collection-count">共12个</text>
                </navigator>
                <navigator url="../../pages/collection/collection" class="collection-item">
                    <text class="category">live</text>
                    <text class="collection-count">共12个</text>
                </navigator>
            </view>
            <view class="title">
                <view class="title-bar"></view>
                <text class="title-name">历史踪迹</text>
            </view>
        </view>
        <view class="areo-history-track">
            <view class="history-block">
                <view class="scroll-line"></view>
                <view class="scroll-dot"></view>
                <view class="date">一天前</view>
                <scroll-view class="history-scroll" scroll-x="true" @scroll>
                    <view class="history-item">
                        <view class="pic-box">
                            <text class="tag">雕塑</text>
                            <image class="pic" src="/static/images/album.jpg"></image>
                        </view>
                        <view class="text-box">
                            <text class="intro">欧初捐赠文物纪念展”分为“诸家“历代陶瓷”、“文房用品”和“青铜器”四个篇章。</text>
                        </view>
                    </view>
                    <view class="history-item">
                        <view class="pic-box">
                            <text class="tag">雕塑</text>
                            <image class="pic" src="/static/images/album.jpg"></image>
                        </view>
                        <view class="text-box">
                            <text class="intro">欧初捐赠文物纪念展”分为“诸家“历代陶瓷”、“文房用品”和“青铜器”四个篇章。</text>
                        </view>
                    </view>
                    <view class="history-item">
                        <view class="pic-box">
                            <text class="tag">雕塑</text>
                            <image class="pic" src="/static/images/album.jpg"></image>
                        </view>
                        <view class="text-box">
                            <text class="intro">欧初捐赠文物纪念展”分为“诸家“历代陶瓷”、“文房用品”和“青铜器”四个篇章。</text>
                        </view>
                    </view>
                    <view class="history-item">
                        <view class="pic-box">
                            <text class="tag">雕塑</text>
                            <image class="pic" src="/static/images/album.jpg"></image>
                        </view>
                        <view class="text-box">
                            <text class="intro">欧初捐赠文物纪念展”分为“诸家“历代陶瓷”、“文房用品”和“青铜器”四个篇章。</text>
                        </view>
                    </view>
                </scroll-view>
            </view>
            <view class="history-block">
                <view class="scroll-line"></view>
                <view class="scroll-dot"></view>
                <view class="date">一天前</view>
                <scroll-view class="history-scroll" scroll-x="true" @scroll>
                    <view class="history-item">
                        <view class="pic-box">
                            <image class="pic" src="/static/images/album.jpg"></image>
                        </view>
                        <view class="text-box">
                            <text class="intro">欧初捐赠文物纪念展”分为“诸家“历代陶瓷”、“文房用品”和“青铜器”四个篇章。</text>
                        </view>
                    </view>
                    <view class="history-item">
                        <view class="pic-box">
                            <image class="pic" src="/static/images/album.jpg"></image>
                        </view>
                        <view class="text-box">
                            <text class="intro">欧初捐赠文物纪念展”分为“诸家“历代陶瓷”、“文房用品”和“青铜器”四个篇章。</text>
                        </view>
                    </view>
                    <view class="history-item">
                        <view class="pic-box">
                            <image class="pic" src="/static/images/album.jpg"></image>
                        </view>
                        <view class="text-box">
                            <text class="intro">欧初捐赠文物纪念展”分为“诸家“历代陶瓷”、“文房用品”和“青铜器”四个篇章。</text>
                        </view>
                    </view>
                    <view class="history-item">
                        <view class="pic-box">
                            <image class="pic" src="/static/images/album.jpg"></image>
                        </view>
                        <view class="text-box">
                            <text class="intro">欧初捐赠文物纪念展”分为“诸家“历代陶瓷”、“文房用品”和“青铜器”四个篇章。</text>
                        </view>
                    </view>
                </scroll-view>
            </view>
        </view>
        <view class="areo-bottom">......已经到底啦......</view>
    </view>
</view>
</template>

<script>
// pages/areo-main/areo-main.js
let util = require("../../utils/util.js");

export default {
  data() {
    return {
      hour: '',
      isDayTime: false
    };
  },

  components: {},
  props: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var hour = util.formatHour(new Date());
    this.setData({
      hour: hour
    }); // 早上6点到晚上6点为白天

    if (hour >= 6 && hour < 18) {
      this.setData({
        isDayTime: true
      });
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    if (this.isDayTime) {
      wx.setNavigationBarColor({
        frontColor: '#ffffff',
        backgroundColor: '#b0d4f8',
        animation: {
          duration: 0,
          timingFunc: 'linear'
        },
        success: result => {},
        fail: () => {},
        complete: () => {}
      });
    } else {
      wx.setNavigationBarColor({
        frontColor: '#ffffff',
        backgroundColor: '#041746',
        animation: {
          duration: 0,
          timingFunc: 'linear'
        },
        success: result => {},
        fail: () => {},
        complete: () => {}
      });
    }
  },

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
    // () {
    //   console.log("占位：函数  未声明");
    // }

  }
};
</script>
<style>
@import "./areo-main.css";
</style>