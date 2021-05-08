<template>
<!-- components/Tabs/Tabs.wxml -->
<view class="tabs">
    <view class="tabs-title">
        <view class="title-item" v-for="(item,index) in title" :key="index"  @click="changeIndex(index)" :class="{active:currentIndex===index}">{{item}}</view>
    </view>
	
</view>
</template>

<script>
export default {
  data() {
    return {
		title:["我的收藏","我的作品"],
		currentIndex:0
	};
  },
  components: {},
  props:[],
  methods: {
	  changeIndex(index){
		  this.currentIndex = index
		  //想父组件传递参数
		  this.$emit("returnIndex",this.currentIndex)
	  }
  }
};
</script>
<style>
	@import url("./Tabs.css");
</style>
