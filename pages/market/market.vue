<template>
<!-- pages/market/market.wxml -->
<view class="art-recommend-box">
    <view class="title-box">我的艺术定制</view>
    <view class="img-box box1">
        <text class="tag">雕塑</text>
        <image class="recommend-pic" src="http://120.79.57.164:8088/images/封面1.png" mode="scaleToFill"></image>
        <canvas class="scratch-canvas" disable-scroll="false" canvas-id="canvas-demo1" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd"></canvas>
    </view>
    <view class="img-box box2">
        <text class="tag">雕塑</text>
        <image class="recommend-pic" src="http://120.79.57.164:8088/images/封面2.png" mode="scaleToFill"></image>
        <canvas class="scratch-canvas" disable-scroll="false" canvas-id="canvas-demo2" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd"></canvas>
    </view>
    <view class="img-box box3">
        <text class="tag">雕塑</text>
        <image class="recommend-pic" src="http://120.79.57.164:8088/images/封面4.png" mode="scaleToFill"></image>
        <canvas class="scratch-canvas" disable-scroll="false" canvas-id="canvas-demo3" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd"></canvas>
    </view>
    <view class="img-box box4" >
        <text class="tag">雕塑</text>
        <image style="z-index: 1;" class="recommend-pic" src="http://120.79.57.164:8088/images/封面7.png" mode="scaleToFill"></image>
        <canvas style="z-index: 2;" class="scratch-canvas" disable-scroll="false" canvas-id="canvas-demo4" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd"></canvas>
    </view>
    <view class="img-box box5">
        <text class="tag">雕塑</text>
        <image style="z-index: 3;" class="recommend-pic" :src="currentRecommend.introImage" mode="scaleToFill"></image>
        <!-- canvas层级最高，无法通过z-index改变，点击海报跳转失效 -->
        <canvas style="z-index: 4;" class="scratch-canvas" disable-scroll="false" canvas-id="canvas-demo5" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd" @tap="toArtRecommand()"></canvas>
    </view>
	<loading :showLoading="showLoading"></loading>
</view>
</template>

<script>
// pages/market/market.js
import Scratch from '../../utils/Scratch.js';
let demo = null
export default {
  data() {
    return {
		userInfo:{},
		//我的艺术定制信息 
		myArtRecommend:[],
		//当前渲染的艺术定制
		currentRecommend:{},
		showLoading:true
	}
  },
  components: {},
  props: {},
  methods: {
	  //获取用户信息
	   async getUserInfo(){
		  if(uni.getStorageSync('user')){
			  this.userInfo = uni.getStorageSync('user');
			  const res = await this.$myRequest({
				  url:"/users/" + this.userInfo.userId + "/mine"
			  })
			  this.userMine = res.data.data
		  } 
	  },
	  //随机数函数
	  getRandomInt(min, max) {
	    min = Math.ceil(min);
	    max = Math.floor(max);
	    return Math.floor(Math.random() * (max - min)) + min; //不含最大值，含最小值
	  },
	  toTest(){
		  uni.navigateTo({
		  	url:"../art-recommend/art-recommend?id=" + this.currentRecommend.id +
		  	"&type=" + this.currentRecommend.type
		  })
	  },
	  //跳转到art-recommend
  	  toArtRecommand(){
		  if(demo.show){
			  uni.navigateTo({
				url:"../art-recommend/art-recommend?id=" + this.currentRecommend.id +
				"&type=" + this.currentRecommend.type
			  })
		  }
		  console.log(demo.show)
	  },
	  //洗牌算法
		shuffle(arr) {
	      let m = arr.length;
	      while (m > 1){
	          let index = Math.floor(Math.random() * m--);
	          [arr[m] , arr[index]] = [arr[index] , arr[m]]
	      }
	      return arr;
	  },
	  //获取我的艺术定制
	  async getArtRecommend(){
		  let res = await this.$myRequest({
			  url:"/users/" + this.userInfo.userId + "/recommendation"
		  })
		  for(let key in res.data.data){
			 this.myArtRecommend.push(res.data.data[key])
		  }
		  let randomInt = this.getRandomInt(0,4);
		  this.currentRecommend = this.myArtRecommend[randomInt]
		  console.log(this.currentRecommend)
	  }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let This = this;
    new Scratch(This, {
      canvasId: 'canvas-demo1',
      width: 124,
      height: 120,
      // maskColor: 'rgba(255,255,255,0.8)',
      //size:15,
      //scale:1,
      scale: .5
    });
    new Scratch(This, {
      canvasId: 'canvas-demo2',
      width: 195,
      height: 185,
      // maskColor: 'rgba(255,255,255,80)',
      //size:15,
      //scale:1,
      scale: .5
    });
    new Scratch(This, {
      canvasId: 'canvas-demo3',
      width: 108,
      height: 150,
      // maskColor: 'rgba(255,255,255,80)',
      //size:15,
      //scale:1,
      scale: .5
    });
    new Scratch(This, {
	    canvasId: 'canvas-demo4',
	    width: 230,
	    height: 250,
	    // maskColor: 'rgba(255,255,255,80)',
	    //size:15,
	    //scale:1,
	    scale: .5
	  });
	  demo = new Scratch(this, {
		canvasId: 'canvas-demo5',
		width: 200,
		height: 195,
		// maskColor: 'rgb(200,200,200,80)',
		//size:15,
		//scale:1,
		scale: .5
	  });
	  this.getUserInfo()
	  this.getArtRecommend()
	  this.showLoading = false;
  },
  computed:{
	
  },
  watch:{
	 
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
	 
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
@import "./market.css";
</style>