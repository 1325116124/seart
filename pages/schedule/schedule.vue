<template>
<view class="schedule-body">
<!-- pages/schedule/schedule.wxml -->
<view class="schedule-top">
    <scroll-view class="schedule-top-box" scroll-y="true">
        <view class="schedule-title-item" v-for="(item,index) in userSchedule" :key="item.id" @tap="showScheduleIndex(index)">
			<view class="schedule-date">
			    <view class="date-bar"></view>
			    <text class="date" :class="{activeSchedule:index===currentIndex}">{{formatDate(item.startTime)}}</text>
			</view>
			<view class="schedule-name">{{item.name}}</view>
		</view>
    </scroll-view>
    <view class="schedule-main-box">
        <view class="main-body"  v-for="(item,index) in currentSchedule">
            <view class="title">
                <view class="title-bar"></view>
                <text class="title-name">我的日程</text>
            </view>
            <view class="schedule-item">
                <view class="item-top" @tap="toClassify(item.id,item.type)">
                    <view class="item-img">
                        <image class="item-pic" mode="scaleToFill" :src="item.introImage"></image>
                    </view>
                    <view class="item-detail">
                        <text class="item-title">{{item.name}}</text>
                        <text class="item-date">{{formatDate2(item.startTime)}} - {{formatDate2(item.endTime)}}</text>
                    </view>
                </view>
                <view class="schedule-matters">
                    <view>注意事项：</view>
                    <view class="matters-content">
                        《时间的形态》将于2020.11.16-11.26闭展更新部分展品。《时间的形态》将于2020.11.16-11.26闭展更新部分展品。
                    </view>
                </view>
				 <!-- <map class="map" :enable-scroll="false" :longitude="longitude" :latitude="latitude" :markers="markers" :scale="scale"></map> -->
            </view>
            <map class="map" :enable-scroll="false" :longitude="item.longitude" :latitude="item.latitude" :scale="scale"></map>
        </view>
        <view class="main-bottom" v-show="currentIndex!==-1">......已经到底啦......</view>
    </view>
</view>
<loading :showLoading="showLoading"></loading>
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
      }],
	  //存传过来的id
	  userid:0,
	  userSchedule:[],
	  //存放当前点击的日程idnex
	  currentIndex:0,
	  currentSchedule:[],
	  showLoading:true,
    };
  },
  components: {},
  props: {},
  computed:{
	
  },
  watch:{
	userSchedule()  {
		this.currentSchedule.splice(0,this.currentSchedule.length)
		this.currentSchedule.push(this.userSchedule[0])
	}
  },
  methods: {
	  //获取我的日程数据
	  async getMySchedule(){
		  const res = await this.$myRequest({
			  // getApp().globalData.BASE_URL + 
			url:"/user/getSchedules/" + this.userid
		  })
		  this.userSchedule = res.data.data
	  },
	  //自定义格式化函数
	  formatDate(date){
		let d = new Date(date)
		let month = '' + (d.getMonth() + 1)
		let day = '' + d.getDate()
		let year = d.getFullYear()
		return year + '年' + month + "月" + day + "日"
	},
	//自定义格式化时间2:2021.7.21
	formatDate2(date){
		let d = new Date(date)
		let month = '' + (d.getMonth() + 1)
		let day = '' + d.getDate()
		let year = d.getFullYear()
		return [year, month, day].join('.');
	},
	//切换日程
	showScheduleIndex(index){
		this.currentIndex = index
		this.currentSchedule.splice(0,this.currentSchedule.length)
		this.currentSchedule.push(this.userSchedule[index]);
	},
	//点击进入对应的界面
	toClassify(id,type){
		if(type===0){
			uni.navigateTo({
				url:"../living/living?id="+id,
			})
		}else if(type===1){
			uni.navigateTo({
				url:"../artSalon/artSalon?id="+id
			})
		}else if(type===2){
			uni.navigateTo({
				url:"../course-template/course-template?id="+id
			})
		}
	},
  },
  /**
   * 生命周期函数--监听页面加载
   */
	onLoad(options){
	  this.userid = options.id
	  this.getMySchedule()
	  //初始化我的日程
	  this.showLoading = false;
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
	  
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
	
  },
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
@import "./schedule.css";
</style>