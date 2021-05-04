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
/* pages/areo-main/areo-main.wxss */
.areo-main{
    background-color: #041746;
     /* 白天
    background-color: #b0d4f8;  */
}
.isDay{
    background-color: #b0d4f8 !important;
}
.areo-top{
    padding-top: 88rpx;
    padding-left: 48rpx;
    padding-right: 48rpx;
    color: #fff;
}
.user-image{
    margin-right: 26rpx;
    width: 170rpx;
    height: 170rpx;
    border-radius: 24rpx;
}
.user{
    display: flex;
}
.user .user-info{
    height: 170rpx;
}
.user .user-name{
    display: block;
    padding-left: 30rpx;
    font-size: 32rpx;
    font-weight: 500;
    line-height: 42rpx;
    padding-top: 14rpx;
}
.user .user-info .user-customization-block{
    margin-top: 38rpx;
    width: 234rpx;
    height: 70rpx;
    border-radius: 42rpx;
    background-color: #F1B0F8;
    filter: opacity(53%);
    box-shadow: 0 0 10rpx #F1B0F8;
    /* 白天
    background-color: #8bb7f3; */
}
.user .user-customization{
    z-index: 10;
    display: block;
    font-size: 20rpx;
    line-height: 70rpx;
    text-align: center;
}
#UserInDay{
    background-color: #6B9DEF ;
    box-shadow: 0 0 10rpx #6B9DEF;
}
.follow-block{
    margin-top: 56rpx;
    height: 40rpx;
    display: flex;
    margin-bottom: 90rpx;
}
.follow-block .user-tag{
    line-height: 38rpx;
    font-size: 28rpx;
    width: 440rpx;
    /* display: flex;
    justify-content: flex-start; */
}
.user-follow{
    width: 160rpx;
    line-height: 28rpx;
    font-size: 20rpx;
    /* display: flex; */
    justify-content: flex-end;
}
.user-follow .followed{
    padding-right: 30rpx;
}
.areo-body-box{
    background-color: #fff;
    border-top-left-radius: 58rpx;
    border-top-right-radius: 58rpx;
}
.areo-body{
    padding-left: 48rpx;
    padding-right: 48rpx;
    padding-top: 82rpx;
}
.title{
    color: #1E6CB5;
    font-size: 28rpx;
    line-height: 30rpx;
    margin-bottom: 20rpx;
    /* font-family: "PingFang SC"; */
}
.title .title-bar{
    display: inline-block;
    width: 10rpx;
    height: 24rpx;
    background-color: #041746;
    border-radius: 4rpx;
    margin-right: 14rpx;
}
.title-name{
    letter-spacing: 6rpx;
}
.schedule-and-order{
    margin-bottom: 48rpx;
    margin-left: 24rpx;
    background-color: #ebf3fc;
    border-radius: 10rpx;
    padding: 8rpx 0 8rpx 0;
    text-align: center;
}
.schedule-and-order text{
    color: #4f73a5;
    line-height: 30rpx;
    font-size: 22rpx;
}
.collection-block{
    height: 82rpx;
    display: flex;
    margin-bottom: 44rpx;
}
.collection-block .collection-item{
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ebf3fc;
    margin-left: 30rpx;
    border-radius: 24rpx;
}
.collection-block .collection-item .category{
    font-size: 24rpx;
    line-height: 32rpx;
    color: #4f73a5;
}
.collection-block .collection-item .collection-count{
    font-size: 12rpx;
    line-height: 32rpx;
    color: #707070;
    display: inline-block;
    margin-left: 20rpx;
}
.areo-history-track{
    padding-left: 48rpx;
}
.history-block{
    display: flex;
}
.history-block .scroll-line{
    display: inline-block;
    width: 4rpx;
    height: 350rpx;
    background-color: #5F83B1;
    margin-right: 22rpx;
}
.history-block .scroll-dot{
  background-color: #006FFF;
  width: 10rpx;
  height: 10rpx;
  position: absolute;
  margin-top: 138rpx;
}
.history-block .date{
    position: absolute;
    width: 100%;
    height: 56rpx;
    margin-left: 30rpx;
    text-align: start;
    color: #8E8E8E;
    line-height: 56rpx;
    font-size: 20rpx;
}
.history-block .history-scroll
{
  position: absolute;
  margin: 60rpx 0 0 30rpx; 
  display: flex;
  overflow: hidden;
  white-space: nowrap;
}
.history-item{
    display: inline-block;
    text-align: center;
    margin-right: 36rpx;
}
.history-item .pic-box{
    height: 142rpx;
    display: flex;
    flex-flow: row-reverse;
}
.history-item .pic-box .tag{
    position: absolute;
    opacity: 38%;
    box-shadow: 0 6rpx 12rpx #000;
    font-size: 16rpx;
    line-height: 32rpx;
    padding: 0 28rpx 0 28rpx;
    height: 32rpx;
    background-color: #f0f0f0;
    color: #000;
    border-radius: 16rpx;
}
.history-item image{
    width: 274rpx;
    height: 184rpx;
    border-radius: 20rpx;
    box-shadow: 0rpx 6rpx 6rpx #738eae, -6rpx 0 6rpx #738eae, 5rpx 0 5rpx #738eae;
}

.history-item .text-box{
    z-index: -1;
    height: 126rpx;
    width: 284rpx;
    padding-top: 54rpx;
    box-sizing: border-box;
    white-space: normal !important;
    /* border-width: 4rpx; */
    background-color: rgb(235, 243, 252);
    border-color: rgb(45, 112, 231);
    border-bottom-left-radius: 34rpx;
    border-bottom-right-radius: 34rpx;
}
.history-item .intro{
    display: -webkit-box;
    padding: 0 18rpx 0 18rpx;
    height: 60rpx;
    line-height: 30rpx;
    font-size: 16rpx;
    overflow: hidden;
    -webkit-line-clamp: 2;
    text-overflow: ellipsis;
}
.areo-bottom{
    margin:20rpx 0 40rpx 0;
    text-align: center;
    font-size: 22rpx;
    color: #006AD7;
}
</style>