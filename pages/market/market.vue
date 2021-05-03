<template>
<!-- pages/market/market.wxml -->
<view class="art-recommend-box">
    <view class="title-box">我的艺术定制</view>
    <view class="img-box box1">
        <text class="tag">雕塑</text>
        <image class="recommend-pic" src="/static/images/recommend-pic.jpg" mode="scaleToFill"></image>
        <canvas class="scratch-canvas" disable-scroll="false" canvas-id="canvas-demo1" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd"></canvas>
    </view>
    <view class="img-box box2">
        <text class="tag">雕塑</text>
        <image class="recommend-pic" src="/static/images/recommend-pic.jpg" mode="scaleToFill"></image>
        <canvas class="scratch-canvas" disable-scroll="false" canvas-id="canvas-demo2" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd"></canvas>
    </view>
    <view class="img-box box3">
        <text class="tag">雕塑</text>
        <image class="recommend-pic" src="/static/images/recommend-pic.jpg" mode="scaleToFill"></image>
        <canvas class="scratch-canvas" disable-scroll="false" canvas-id="canvas-demo3" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd"></canvas>
    </view>
    <view class="img-box box4">
        <text class="tag">雕塑</text>
        <image class="recommend-pic" src="/static/images/recommend-pic.jpg" mode="scaleToFill"></image>
        <canvas class="scratch-canvas" disable-scroll="false" canvas-id="canvas-demo4" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd"></canvas>
    </view>
    <view class="img-box box5">
        <text class="tag">雕塑</text>
        <navigator url="../../pages/art-recommend/art-recommend">
            <image class="recommend-pic" src="/static/images/recommend-pic.jpg" mode="scaleToFill"></image>
        </navigator>
        <!-- canvas层级最高，无法通过z-index改变，点击海报跳转失效 -->
        <canvas class="scratch-canvas" disable-scroll="false" canvas-id="canvas-demo5" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd"></canvas>
    </view>
</view>
</template>

<script>
// pages/market/market.js
import Scratch from '../../utils/scratch.js';

export default {
  data() {
    return {};
  },

  components: {},
  props: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let This = this;
    new Scratch(This, {
      canvasId: 'canvas-demo1',
      width: 124,
      height: 120,
      maskColor: '#F0F0F0',
      //size:15,
      //scale:1,
      scale: .5
    });
    new Scratch(This, {
      canvasId: 'canvas-demo2',
      width: 195,
      height: 185,
      maskColor: '#F0F0F0',
      //size:15,
      //scale:1,
      scale: .5
    });
    new Scratch(This, {
      canvasId: 'canvas-demo3',
      width: 108,
      height: 150,
      maskColor: '#F0F0F0',
      //size:15,
      //scale:1,
      scale: .5
    });
    new Scratch(This, {
      canvasId: 'canvas-demo4',
      width: 230,
      height: 250,
      maskColor: '#F0F0F0',
      //size:15,
      //scale:1,
      scale: .5
    });
    new Scratch(This, {
      canvasId: 'canvas-demo5',
      width: 200,
      height: 195,
      maskColor: '#F0F0F0',
      //size:15,
      //scale:1,
      scale: .5
    });
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
    touchStart() {
      console.log("占位：函数 touchStart 未声明");
    },

    touchMove() {
      console.log("占位：函数 touchMove 未声明");
    },

    touchEnd() {
      console.log("占位：函数 touchEnd 未声明");
    }

  }
};
</script>
<style>
@import "./market.css";
</style>