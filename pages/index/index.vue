<template>
<!--index.wxml-->
<view class="container">
  <view class="userinfo">
    <block v-if="canIUseOpenData" calss="userinfo-opendata">
      <view class="userinfo-avatar" @tap="bindViewTap">
        <open-data type="userAvatarUrl"></open-data>
      </view>
      <open-data type="userNickName"></open-data>
    </block>
    <block v-else-if="!hasUserInfo">
      <button v-if="canIUseGetUserProfile" @tap="getUserProfile"> 获取头像昵称 </button>
      <button v-else-if="canIUse" open-type="getUserInfo" @getuserinfo="getUserInfo"> 获取头像昵称 </button>
      <view v-else> 请使用1.4.4及以上版本基础库 </view>
    </block>
    <block v-else>
      <image @tap="bindViewTap" class="userinfo-avatar" :src="userInfo.avatarUrl" mode="cover"></image>
      <text class="userinfo-nickname">{{userInfo.nickName}}</text>
    </block>
  </view>
  <view class="usermotto">
    <text class="user-motto">{{motto}}</text>
  </view>
</view>
</template>

<script>
// index.js
// 获取应用实例
const app = getApp();

export default {
  data() {
    return {
      motto: 'Hello World',
      userInfo: {
        avatarUrl: "",
        nickName: ""
      },
      hasUserInfo: false,
      canIUse: wx.canIUse('button.open-type.getUserInfo'),
      canIUseGetUserProfile: false,
      canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false

    };
  },

  components: {},
  props: {},

  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      });
    }
  },

  methods: {
    // 事件处理函数
    bindViewTap() {
      wx.navigateTo({
        url: '../logs/logs'
      });
    },

    getUserProfile(e) {
      // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
      wx.getUserProfile({
        desc: '展示用户信息',
        // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
        success: res => {
          console.log(res);
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          });
        }
      });
    },

    getUserInfo(e) {
      // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
      console.log(e);
      this.setData({
        userInfo: e.detail.userInfo,
        hasUserInfo: true
      });
    }

  }
};
</script>
<style>
@import "./index.css";
</style>