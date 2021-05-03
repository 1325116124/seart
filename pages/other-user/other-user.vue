<template>
<!-- pages/other-user/other-user.wxml -->
<view class="other-user">
    <view class="other-user-top">
        <view class="user-img-box">
            <image class="user-img" src="/static/images/user-image.jpg" mode="scaleToFill"></image>
        </view>
        <view class="user-name">想不出名字啦</view>
        <view class="user-follow">
            <view class="follow-detail">
                <text class="followed">关注</text>
                <text class="num">12</text>
            </view>
            <view class="follow-detail">
                <text class="follower">粉丝</text>
                <text class="num">12</text>
            </view>
            <view class="follow-click " @tap="handleFollowTap">{{isFollow.text}}</view>
        </view>
    </view>
    <view class="myself-main">
        <Tabs></Tabs>
        <view class="myself-main-bottom">......已经到底啦......</view>
    </view>
</view>
</template>

<script>
import Tabs from "../../components/Tabs/Tabs";

export default {
  data() {
    return {
      isFollow: {
        text: "关注"
      }
    };
  },

  components: {
    Tabs
  },
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
    handleFollowTap(e) {
      this.setData({
        'isFollow.text': '已关注'
      });
    }

  }
};
</script>
<style>
@import "./other-user.css";
</style>