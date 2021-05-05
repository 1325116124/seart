<template>
<!-- pages/switch-more/switch-more.wxml -->
<view class="art-recommend-box">
    <view class="main-title-box">我的艺术定制</view>
    <view class="main-body">
        <view class="body-right" :style="'opacity:' + opacity_right">
            <view class="class-intro">
                <view class="intro-title">课程介绍</view>
                <view class="class-detail">
                    “隐·形”的话题跨越时代和地域空间，又以其普适性、通识性毫无违和感地适用于我们所处的数码世代。此次参展的七位艺术家以各自不同的创作历程、视觉语言、表达方式、技术手段通过绘画、雕塑、摄影、版画、影像.......
                </view>
                <view class="click-to-detail">详情</view>
            </view>
            <image class="class-img" src="/static/images/broadcast.jpg" mode="aspectFill"></image>
            <view class="team-intro">
                <view class="intro-title">团队介绍</view>
                <view class="team-detail">
                    “隐·形”的话题跨越时代和地域空间，又以其普适性、通识性毫无违和感地适用于我们所处的数码世代。此次参展的七位艺术家以各自不同的创作历程、视觉语言、表达方式、技术手段通过绘画、雕塑、摄影、版画、影像.......
                </view>
                <view class="click-to-detail">详情</view>
            </view>
            <view class="enter">Enter></view>
        </view>
        <movable-area class="move-body">
            <movable-view class="move-pic" direction="horizontal" :inertia="true" :out-of-bounds="true" x="1000" @change="handlemove">
                <image class="recommend-pic" src="/static/images/recommend-pic.jpg" mode="aspectFill"></image>
            </movable-view>
        </movable-area>
        <view class="body-left" :style="'opacity:' + opacity_left">
            <view class="comment-title">热门评论</view>
            <view class="comment">
                <!-- 首个评论详情高度不同 -->
                <view class="comment-item">
                    <view class="user-box">
                        <image class="user-img" src="/static/images/user-image.jpg" mode="scaleToFill"></image>
                        <text class="user-name">草间弥生</text>
                    </view>
                    <view class="content isTopComment">
                        “隐·形”的话题跨越时代和地域空间，又以其普适性、通识性毫无违和感地适用于我们所处的数码世代。此次参展的七位艺术家以各自不同的创作历程、视觉语言、表达方式、技术手段通过绘画、雕塑、摄影、版画、影像.......
                    </view>
                </view>
            </view>
            <view class="comment">
                <view class="comment-item">
                    <view class="user-box">
                        <image class="user-img" src="/static/images/user-image.jpg" mode="scaleToFill"></image>
                        <text class="user-name">草间弥生</text>
                    </view>
                    <view class="content ">
                        “隐·形”的话题跨越时代和地域空间，又以其普适性、通识性毫无违和感地适用于我们所处的数码世代。此次参展的七位艺术家以各自不同的创作历程、视觉语言、表达方式、技术手段通过绘画、雕塑、摄影、版画、影像.......
                    </view>
                </view>
            </view>
            <view class="comment">
                <view class="comment-item">
                    <view class="user-box">
                        <image class="user-img" src="/static/images/user-image.jpg" mode="scaleToFill"></image>
                        <text class="user-name">草间弥生</text>
                    </view>
                    <view class="content ">
                        “隐·形”的话题跨越时代和地域空间，又以其普适性、通识性毫无违和感地适用于我们所处的数码世代。此次参展的七位艺术家以各自不同的创作历程、视觉语言、表达方式、技术手段通过绘画、雕塑、摄影、版画、影像.......
                    </view>
                </view>
            </view>
            <view class="enter">Enter></view>
        </view>
    </view>
</view>
</template>

<script>
export default {
  data() {
    return {
      opacity_left: '100%',
      opacity_right: '0',
      ini_x: 223
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
    handlemove(e) {
      let ini_x = this.ini_x;
      let curr_x = e.detail.x;
      let opacity_precent = (ini_x - curr_x) / ini_x;
      this.setData({
        opacity_left: 1 - opacity_precent,
        opacity_right: opacity_precent
      });
    }
  }
};
</script>
<style>
@import "./switch-more.css";
</style>