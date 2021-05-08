<template>
<!-- pages/collection/collection.wxml -->
<view class="main-box">
    <view class="search-box">
        <image class="search-icon" src="../../static/icon/search.png" mode="center"></image>
        <input class="search-block" type="text">
    </view>
    <view class="collection-body">
        <view class="title">
            <view class="title-bar"></view>
            <view class="type">
                <view v-for="(item, index) in type_item" :key="item.id" :class="{active:currentIndex==item.id}" @tap="handleTitleTap(index)">
                    {{item.name}}
                </view>
            </view>
        </view>
        <view class="content">
			<view class="collect-item" v-for="(item,index) in currentDetail" :key="item.id" @tap="toClassify(item.id)">
			    <view class="item-img">
			        <image class="item-pic" mode="scaleToFill" :src="item.introImage"></image>
			    </view>
			    <view class="item-block">
			        <view class="item-detail">
			            <text class="item-title">{{item.name}}</text>
			            <text class="item-date">{{formatDate2(item.startTime)}} - {{formatDate2(item.endTime)}}</text>
			            <text class="item-location">广州市黄埔达到315羊城创意园3-08</text>
			            <view class="item-tags">
			                <view class="tag" v-for="(value,index2) in item.tags" :key="index2">{{value}}</view>
			            </view>
			        </view>
			    </view>
			</view>
		</view>
		
	</view>
    <view class="collection-bottom">......已经到底啦......</view>
	<loading :showLoading="showLoading"></loading>
</view>
</template>

<script>
export default {
  data() {
    return {
      type_item: [{
        id: 0,
        name: "展览",
        isActive: true
      }, {
        id: 1,
        name: "沙龙",
        isActive: false
      }, {
        id: 2,
        name: "系列课程",
        isActive: false
      }],
	  //记录tab选项卡的index
	  currentIndex:0,
	  //三个收藏的数量，可以用于后期做加载
	  exhibitionsNum:0,
	  salonsNum:0,
	  coursesNum:0,
	  //userInfo
	  userInfo:{},
	  //展览的信息
	  exhibitionsDetail:[],
	  //沙龙的信息
	  salonsDetail:[],
	  //课程的信息
	  coursesDetail:[],
	  //当前渲染的信息
	  currentDetail:[],
	  showLoading:true
    };
  },
  components: {},
  props: {},
  watch:{
	  
  },
  methods: {
    handleTitleTap(index) {
      this.currentIndex = index;
	  if(index==0){
		  this.currentDetail = this.exhibitionsDetail
	  }else if(index==1){
		  this.currentDetail = this.salonsDetail
	  }else if(index==2){
		   this.currentDetail = this.coursesDetail
	  }
    },
	//获取用户信息
	async getUserInfo(){
	  if(uni.getStorageSync('user')){
		  this.userInfo = uni.getStorageSync('user');
	  } 
	},
	//获取展览的收藏
	async getExhibitions(){
		let res = await this.$myRequest({
			url:'/user/getFavour/' + this.userInfo.userId + "/0/0/" + this.exhibitionsNum
		})
		this.exhibitionsDetail = res.data.data
		if(this.currentIndex==0){
			this.currentDetail = this.exhibitionsDetail
		}
	},
	async getSalons(){
		let res = await this.$myRequest({
			url:'/user/getFavour/' + this.userInfo.userId + "/1/0/" + this.salonsNum
		})
		this.salonsDetail = res.data.data
		if(this.currentIndex==1){
			this.currentDetail = this.salonsDetail
		}
	},
	async getCourse(){
		let res = await this.$myRequest({
			url:'/user/getFavour/' + this.userInfo.userId + "/2/0/" + this.coursesNum
		})
		this.coursesDetail = res.data.data
		if(this.currentIndex==2){
			this.currentDetail = this.coursesDetail
		}
	},
	//自定义格式化时间2:2021.7.21
	formatDate2(date){
		let d = new Date(date)
		let month = '' + (d.getMonth() + 1)
		let day = '' + d.getDate()
		let year = d.getFullYear()
		return [year, month, day].join('.');
	},
	//根据functionIndex判断跳转页面
	toClassify(id){
		if(this.functionIndex===0){
			uni.navigateTo({
				url:"../living/living?id="+id,
			})
		}else if(this.functionIndex===1){
			uni.navigateTo({
				url:"../artSalon/artSalon?id="+id
			})
		}else{
			uni.navigateTo({
				url:"../course-template/course-template?id="+id
			})
		}
	},
	
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
		this.currentIndex = options.id
		//赋值各类收藏的数量
		this.exhibitionsNum = options.exhibitionsNum
		this.salonsNum = options.salonsNum
		this.coursesNum = options.coursesNum
		this.getUserInfo()
		this.getExhibitions()
		this.getSalons()
		this.getCourse()
		this.showLoading = false
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
	  this.showLoading = true
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
@import "./collection.css";
</style>