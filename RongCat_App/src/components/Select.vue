<template>
  <div class="select">
    <div class="header">
      <!-- <h1>严选</h1> -->
      <div class="nav">
        <span class="city"
          >{{ city }} <img src="../assets/city.png" alt=""
        /></span>
        <div class="search">
          <div class="space"></div>
          <input type="text" placeholder="请输入你想要的内容" />
          <button></button>
        </div>
        <span class="notice"><img src="../assets/notice.png" alt="" /></span>
      </div>
      <div class="navspace"></div>
      <div class="items">
        <swipe class="my-swipe" indicator-color="white">
          <swipe-item>
            <div class="items">
              <div class="item" v-for="item in 10">
                <div class="img"></div>
                <span>面部轮廓</span>
              </div>
            </div>
          </swipe-item>
          <swipe-item>
            <div class="items">
              <div class="item" v-for="item in 10">
                <div class="img"></div>
                <span>补水美白</span>
              </div>
            </div>
          </swipe-item>
        </swipe>
      </div>
    </div>
    <div class="lists">
      <h3>品质榜单</h3>
      <div class="highlist">高精尖榜单</div>
      <div class="flex">
        <div class="list">好医榜</div>
        <div class="list">机构榜</div>
        <div class="list">甄选榜</div>
      </div>
    </div>
    <div class="tab">
      <tabs v-model:active="active">
        <tab title="医院">
          <dropdown-menu>
            <dropdown-item v-model="value1" :options="option1" />
            <dropdown-item
              v-model="value2"
              :options="option2"
            /> </dropdown-menu
          >医院</tab
        >
        <tab title="商品">
          <dropdown-menu>
            <dropdown-item v-model="value1" :options="option1" />
            <dropdown-item
              v-model="value2"
              :options="option2"
            /> </dropdown-menu
          >商品</tab
        >
        <tab title="医生">
          <dropdown-menu>
            <dropdown-item v-model="value1" :options="option1" />
            <dropdown-item
              v-model="value2"
              :options="option2"
            /> </dropdown-menu
          >医生</tab
        >
      </tabs>
    </div>
  </div>
</template>
<script setup>
import { Swipe, SwipeItem, Tab, Tabs, DropdownMenu, DropdownItem } from "vant";
import { ref } from "vue";
let city = ref("北京");
const value1 = ref(0);
const value2 = ref("a");
const option1 = [
  { text: "全部项目", value: 0 },
  { text: "新款项目", value: 1 },
  { text: "活动项目", value: 2 },
];
const option2 = [
  { text: "默认排序", value: "a" },
  { text: "好评排序", value: "b" },
  { text: "销量排序", value: "c" },
];
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.select {
  background-color: #fafafa;
  height: 2000px;
}
.nav {
  background-color: #9bf3f9;
  position: fixed;
  display: flex;
  justify-content: center;
  line-height: 30px;
  width: 100%;
  padding: 10px 0px;
  /* margin-top: 10px; */
  z-index: 10;
}
.city {
  display: flex;
  align-items: center;
  margin-left: -20px;
  margin-right: 10px;
}
.city img {
  width: 6px;
  height: 4px;
}
.notice {
  display: flex;
  align-items: center;
  margin-left: 15px;
  margin-right: -20px;
}
.notice img {
  width: 16px;
  height: 19px;
}
.navspace {
  height: 45px;
}
input {
  outline: none;
  border: none;
  /* border-radius: 40px; */
  font-size: 12px;
  /* width: 270px; */
  width: 90%;
  height: 30px;
}
.header {
  background: url(../assets/slow.png) 100%;
  background-size: auto 307px;
  height: 307px;
}
.search {
  display: flex;
  width: 270px;
  background-color: white;
  border-radius: 40px;
  overflow: hidden;
}
.search button {
  background-color: white;
  background: url(../assets/search.png) no-repeat center;
  background-size: 15px 15px;
  border: none;
  width: 14px;
  margin-right: 15px;
}
.items {
  width: 350px;
  height: 175px;
  border-radius: 8px;
  background-color: #fff;
  margin: 16px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  /* align-items: flex-start; */
  padding-top: 10px;
}
.space {
  width: 16px;
  height: 100%;
  background-color: #fff;
}
.img {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: antiquewhite;
}
.item {
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  height: 70px;
  font-size: 10px;
  margin: 0 10px;
  /* margin-bottom: 10px; */
  line-height: 22px;
}
.lists {
  border-radius: 10px;
  background-color: white;
  padding-top: 16px;
  margin-top: -16px;
  height: 293px;
}
.lists h3 {
  font-size: 14px;
  font-family: PingFang SC-Bold, PingFang SC;
  font-weight: bold;
  height: 22px;
  margin: 0 13px;
}
.highlist {
  width: 350px;
  height: 87px;
  margin: 0 auto;
  margin-top: 25px;
  background-color: aquamarine;
}
.flex {
  width: 350px;
  display: flex;
  height: 120px;
  margin: 16px auto;
  justify-content: space-between;
}
.flex .list {
  width: 110px;
  background-color: bisque;
}
.my-swipe .van-swipe-item {
  width: 100%;
  /* color: #fff; */
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  margin-top: -24px;
  /* background-color: #39a9ed; */
}
.tab {
  border-radius: 10px;
  margin-top: 16px;
  overflow: hidden;
}
</style>
