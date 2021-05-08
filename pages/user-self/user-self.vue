<template>
<!-- pages/myself/myself.wxml -->
<!-- 自己看自己个人用户主页 -->
<view class="myself">
    <view class="myself-top">
        <view class="user-img-box">
            <image class="user-img" :src="userInfo.avatarUrl" mode="scaleToFill"></image>
        </view>
        <view class="user-name">想不出名字啦</view>
        <view class="user-follow">
            <view>
                <text class="followed">关注</text>
                <text class="num">{{userMine.follows}}</text>
            </view>
            <view>
                <text class="follower">粉丝</text>
                <text class="num">{{userMine.fans}}</text>
            </view>
        </view>
    </view>
    <view class="myself-main">
        <Tabs @returnIndex="getIndex"></Tabs>
		<view class="result-items" v-if="functionIndex===0">
			<view class="result-item" v-for="(item,index) in collectionDetail" :key="item.id"  @click="toClassify(item.id,item.type)">
				<image :src="item.introImage" mode="aspectFill"></image>
				<view class="des">{{item.name}}</view>
				<view class="tag">{{tab(item.type)}}</view>
			</view>
		</view>
        <view class="myself-main-bottom">......已经到底啦......</view>
    </view>
	<loading :showLoading="showLoading"></loading>
</view>
</template>

<script>
import Tabs from "../../components/Tabs/Tabs";
export default {
  data() {
    return {
		functionIndex:0,
		//总的收藏数
		collectionDetail:[],
		coursesDetail:[],
		exhibitionsDetail:[],
		salonsDetail:[],
		//各类收藏的数量
		exhibitionsNum:0,
		salonsNum:0,
		coursesNum:0,
		userInfo:{},
		userMine:{},
		showLoading:true,
	};
  },
  computed:{
	  
  },
  components: {
    Tabs
  },
  methods:{
	  //获取子组件传递的参数
	  getIndex(index){
		  console.log(index)
		  this.functionIndex=index
	  },
	  //判断上面的tab
	  tab(type){
		  if(type==0) return "展览"
		  else if(type==1) return "沙龙"
		  else if(type==2) return "课程"
	  },
	  //获取用户信息
	   async getUserInfo(){
		  if(uni.getStorageSync('user')){
			  this.userInfo = uni.getStorageSync('user');
			  const res = await this.$myRequest({
				  url:"/user/getMine/" + this.userInfo.userId,
			  })
			  this.userMine = res.data.data
		  } 
	  },
	async getExhibitions(){
		let res = await this.$myRequest({
			url:'/user/getFavour/' + this.userInfo.userId + "/0/0/" + this.exhibitionsNum
		})
		this.exhibitionsDetail = res.data.data
		this.collectionDetail = [...this.collectionDetail,...res.data.data]
	},
	async getSalons(){
		let res = await this.$myRequest({
			url:'/user/getFavour/' + this.userInfo.userId + "/1/0/" + this.salonsNum
		})
		this.salonsDetail = res.data.data
		this.collectionDetail = [...this.collectionDetail,...res.data.data]
	},
	async getCourse(){
		let res = await this.$myRequest({
			url:'/user/getFavour/' + this.userInfo.userId + "/2/0/" + this.coursesNum
		})
		this.coursesDetail = res.data.data
		this.collectionDetail = [...this.collectionDetail,...res.data.data]
	},
	//根据type跳往不同的页面
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
  props: {},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
	  //赋值各类收藏的数量
	  this.exhibitionsNum = options.exhibitionsNum
	  this.salonsNum = options.salonsNum
	  this.coursesNum = options.coursesNum
	  this.getUserInfo()
	  this.getExhibitions()
	  this.getSalons()
	  this.getCourse()
	  this.showLoading = false;
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
@import "./user-self.css";
</style>