<template>
<!-- pages/collection/collection.wxml -->
<view class="main-box">
    <view class="search-box">
        <image class="search-icon" src="/static/icon/search.png" mode="center"></image>
        <input class="search-block" type="text">
    </view>
    <view class="collection-body">
        <view class="title">
            <view class="title-bar"></view>
            <view class="type">
                <view v-for="(item, index) in type_item" :key="index" :class="'title-name ' + (item.isActive?'active':'')" @tap="handleTitleTap" :data-index="index">
                    {{item.name}}
                </view>
            </view>
        </view>
        <view class="collect-item">
            <view class="item-img">
                <image class="item-pic" mode="scaleToFill" src="/static/images/broadcast.jpg"></image>
            </view>
            <view class="item-block">
                <view class="item-detail">
                    <text class="item-title">毕加索 麻胶版画展</text>
                    <text class="item-date">2020.12.21-2021.1.5</text>
                    <text class="item-location">广州市黄埔达到315羊城创意园3-08</text>
                    <view class="item-tags">
                        <view class="tag">古代</view>
                        <view class="tag">空间</view>
                        <view class="tag">幻想</view>
                    </view>
                </view>
            </view>
        </view>
        <view class="collect-item">
            <view class="item-img">
                <image class="item-pic" mode="scaleToFill" src="/static/images/broadcast2.png"></image>
            </view>
            <view class="item-block">
                <view class="item-detail">
                    <text class="item-title">谜物心神</text>
                    <text class="item-date">2020.12.21-2021.1.5</text>
                    <text class="item-location">广州市黄埔达到315羊城创意园3-08</text>
                    <view class="item-tags">
                        <view class="tag">古代</view>
                        <view class="tag">空间</view>
                        <view class="tag">幻想</view>
                    </view>
                </view>
            </view>
        </view>
        <view class="collect-item">
            <view class="item-img">
                <image class="item-pic" mode="scaleToFill" src="/static/images/broadcast.jpg"></image>
            </view>
            <view class="item-block">
                <view class="item-detail">
                    <text class="item-title">毕加索 麻胶版画展</text>
                    <text class="item-date">2020.12.21-2021.1.5</text>
                    <text class="item-location">广州市黄埔达到315羊城创意园3-08</text>
                    <view class="item-tags">
                        <view class="tag">古代</view>
                        <view class="tag">空间</view>
                        <view class="tag">幻想</view>
                    </view>
                </view>
            </view>
        </view>
        <view class="collect-item">
            <view class="item-img">
                <image class="item-pic" mode="scaleToFill" src="/static/images/broadcast.jpg"></image>
            </view>
            <view class="item-block">
                <view class="item-detail">
                    <text class="item-title">毕加索 麻胶版画展</text>
                    <text class="item-date">2020.12.21-2021.1.5</text>
                    <text class="item-location">广州市黄埔达到315羊城创意园3-08</text>
                    <view class="item-tags">
                        <view class="tag">古代</view>
                        <view class="tag">空间</view>
                        <view class="tag">幻想</view>
                    </view>
                </view>
            </view>
        </view>
        <view class="collect-item">
            <view class="item-img">
                <image class="item-pic" mode="scaleToFill" src="/static/images/broadcast.jpg"></image>
            </view>
            <view class="item-block">
                <view class="item-detail">
                    <text class="item-title">毕加索 麻胶版画展</text>
                    <text class="item-date">2020.12.21-2021.1.5</text>
                    <text class="item-location">广州市黄埔达到315羊城创意园3-08</text>
                    <view class="item-tags">
                        <view class="tag">古代</view>
                        <view class="tag">空间</view>
                        <view class="tag">幻想</view>
                    </view>
                </view>
            </view>
        </view>
    </view>
    <view class="collection-bottom">......已经到底啦......</view>
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
      }]
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
    handleTitleTap(e) {
      const {
        index
      } = e.currentTarget.dataset;
      let {
        type_item
      } = this;
      type_item.forEach((v, i) => {
        i === index ? v.isActive = true : v.isActive = false;
      });
      this.setData({
        type_item
      });
    }
  }
};
</script>
<style>
@import "./collection.css";
</style>