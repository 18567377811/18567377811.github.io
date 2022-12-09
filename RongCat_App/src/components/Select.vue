<template>
  <div class="select">
    <div class="header">
      <!-- <h1>严选</h1> -->
      <div class="nav">
        <span class="city"
          >{{ city }} <img src="./Select/selectImages/city.png" alt=""
        /></span>
        <div class="search">
          <div class="space"></div>
          <input type="text" placeholder="请输入你想要的内容" />
          <button></button>
        </div>
        <span class="notice"
          ><img src="./Select/selectImages/notice.png" alt=""
        /></span>
      </div>
      <div class="navspace"></div>
      <div class="items">
        <swipe class="my-swipe" indicator-color="white">
          <swipe-item>
            <div class="items">
              <div class="item">
                <div class="img">
                  <img src="./Select/selectImages/mianbulunkuo.png" alt="" />
                </div>
                <span>面部轮廓</span>
              </div>
              <div class="item">
                <div class="img">
                  <img src="./Select/selectImages/bibu.png" alt="" />
                </div>
                <span>鼻部</span>
              </div>
              <div class="item">
                <div class="img">
                  <img src="./Select/selectImages/jinzhisuxing.png" alt="" />
                </div>
                <span>紧致塑形</span>
              </div>
              <div class="item">
                <div class="img">
                  <img src="./Select/selectImages/poniaosuan.png" alt="" />
                </div>
                <span>玻尿酸</span>
              </div>
              <div class="item">
                <div class="img">
                  <img src="./Select/selectImages/meitisuxing.png" alt="" />
                </div>
                <span>美体塑形</span>
              </div>
              <div class="item">
                <div class="img">
                  <img src="./Select/selectImages/bushuimeibai.png" alt="" />
                </div>
                <span>补水美白</span>
              </div>
              <div class="item">
                <div class="img">
                  <img src="./Select/selectImages/xiongbu.png" alt="" />
                </div>
                <span>胸部</span>
              </div>
              <div class="item">
                <div class="img">
                  <img src="./Select/selectImages/chuzhoushoulian.png" alt="" />
                </div>
                <span>除皱瘦脸</span>
              </div>
              <div class="item">
                <div class="img">
                  <img src="./Select/selectImages/zitizhifang.png" alt="" />
                </div>
                <span>自体脂肪</span>
              </div>
              <div class="item">
                <div class="img">
                  <img src="./Select/selectImages/yanbu.png" alt="" />
                </div>
                <span>眼部</span>
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
      <div class="highlist" @click="$router.push('/List')"></div>
      <div class="flex">
        <div
          class="list doctor"
          @click="$router.push('/List/GoodDoctor')"
        ></div>
        <div
          class="list oran"
          @click="$router.push('/List/Organization')"
        ></div>
        <div
          class="list choose"
          @click="$router.push('/List/Popularity')"
        ></div>
      </div>
    </div>
    <div class="tab">
      <tabs v-model:active="active">
        <tab title="医院">
          <dropdown-menu>
            <dropdown-item v-model="value1" :options="option1" />
            <dropdown-item v-model="value2" :options="option2" />
          </dropdown-menu>
          <div class="hos-item1">
            <img src="./Select/selectImages/beijinghuayue.png" alt="" />
            <h3>北京华悦府医疗美容</h3>
            <span>0日记 | 250预约</span>
            <div class="span">
              <span>认证</span>
              <span>可分期</span>
              <span>免费咨询</span>
            </div>
            <div class="huayue">
              <img src="./Select/selectImages/huayue1.png" alt="" />
              <img src="./Select/selectImages/huayue2.png" alt="" />
              <img src="./Select/selectImages/huayue3.png" alt="" />
            </div>
          </div>
          <div class="hos-item2">
            <img src="./Select/selectImages/beijinghuayue.png" alt="" />
            <h3>北京华悦府医疗美容</h3>
            <span>0日记 | 250预约</span>
            <div class="span">
              <span>认证</span>
              <span>可分期</span>
              <span>免费咨询</span>
            </div>
            <div class="huayue">
              <img src="./Select/selectImages/huayue1.png" alt="" />
              <img src="./Select/selectImages/huayue2.png" alt="" />
              <img src="./Select/selectImages/huayue3.png" alt="" />
            </div>
          </div>
          <div class="hos-item3">
            <img src="./Select/selectImages/beijinghuayue.png" alt="" />
            <h3>北京华悦府医疗美容</h3>
            <span>0日记 | 250预约</span>
            <div class="span">
              <span>认证</span>
              <span>可分期</span>
              <span>免费咨询</span>
            </div>
            <div class="huayue">
              <img src="./Select/selectImages/huayue1.png" alt="" />
              <img src="./Select/selectImages/huayue2.png" alt="" />
              <img src="./Select/selectImages/huayue3.png" alt="" />
            </div>
          </div>
        </tab>
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
  /* height: 2000px; */
  /* flex: 1;
  overflow: auto; */
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
  font-size: 14px;
}
.city img {
  width: 8px;
  height: 6px;
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
  background: url(./Select/selectImages/slow.png) 100%;
  background-size: auto 307px;
  height: 297px;
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
  background: url(./Select/selectImages/search.png) no-repeat center;
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
  align-items: center;
  justify-content: space-around;
  /* align-items: flex-start; */
  padding-top: 6px;
  padding-bottom: 20px;
  overflow: hidden;
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
  font-size: 12px;
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
  width: 64px;
  height: 22px;
  font-size: 16px;
  margin-left: 12px;
  font-family: PingFang SC-Bold, PingFang SC;
  font-weight: bold;
  color: #333333;
  line-height: 22px;
}
.highlist {
  width: 350px;
  height: 110px;
  margin: 0 auto;
  border-radius: 8px;
  overflow: hidden;
  /* margin-top: -6px; */
  background-color: aquamarine;
  background: url(./Select/selectImages/highlist.png) no-repeat;
  background-size: 350px 110px;
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
.doctor {
  border-radius: 8px;
  overflow: hidden;
  background: url(./Select/selectImages/doctorlist.png) no-repeat;
  background-size: 110px 120px;
}
.oran {
  border-radius: 8px;
  overflow: hidden;
  background: url(./Select/selectImages/oran.png) no-repeat;
  background-size: 110px 120px;
}
.choose {
  border-radius: 8px;
  overflow: hidden;
  background: url(./Select/selectImages/choose.png) no-repeat;
  background-size: 110px 120px;
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
.hos-item1 {
  width: 349px;
  height: 272px;
  background: linear-gradient(
    180deg,
    rgba(255, 239, 221, 0.88) 0%,
    #fefdf9 43%,
    #ffffff 84%
  );
  box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.04),
    1px 0px 6px 0px rgba(0, 0, 0, 0.04), -1px 4px 6px 0px rgba(0, 0, 0, 0.04);
  border-radius: 8px 8px 8px 8px;
  opacity: 1;
  margin: 16px auto;
  margin-top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.hos-item1 img {
  width: 60px;
  height: 60px;
  margin-top: 16px;
  margin-bottom: 13px;
}
.hos-item2 img {
  width: 60px;
  height: 60px;
  margin-top: 16px;
  margin-bottom: 13px;
}
.hos-item3 img {
  width: 60px;
  height: 60px;
  margin-top: 16px;
  margin-bottom: 13px;
}
.hos-item1 h3 {
  width: 144px;
  height: 22px;
  font-size: 16px;
  font-family: PingFang SC-Bold, PingFang SC;
  font-weight: bold;
  color: #333333;
  line-height: 22px;
  /* -webkit-background-clip: text;
-webkit-text-fill-color: transparent; */
}
.hos-item2 h3 {
  width: 144px;
  height: 22px;
  font-size: 16px;
  font-family: PingFang SC-Bold, PingFang SC;
  font-weight: bold;
  color: #333333;
  line-height: 22px;
  /* -webkit-background-clip: text;
-webkit-text-fill-color: transparent; */
}
.hos-item3 h3 {
  width: 144px;
  height: 22px;
  font-size: 16px;
  font-family: PingFang SC-Bold, PingFang SC;
  font-weight: bold;
  color: #333333;
  line-height: 22px;
  /* -webkit-background-clip: text;
-webkit-text-fill-color: transparent; */
}
.hos-item1 span {
  /* width: 40px; */
  height: 10px;
  font-size: 11px;
  font-family: DIN-Regular, DIN;
  font-weight: 400;
  color: #72727a;
  line-height: 22px;
  /* -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; */
}
.hos-item2 span {
  /* width: 40px; */
  height: 10px;
  font-size: 11px;
  font-family: DIN-Regular, DIN;
  font-weight: 400;
  color: #72727a;
  line-height: 22px;
  /* -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; */
}
.hos-item3 span {
  /* width: 40px; */
  height: 10px;
  font-size: 11px;
  font-family: DIN-Regular, DIN;
  font-weight: 400;
  color: #72727a;
  line-height: 22px;
  /* -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; */
}

.span {
  display: flex;
}
.hos-item1 .span span {
  display: block;
  background: linear-gradient(176deg, #6efff6 0%, #5ee2f3 50%, #1ab3f5 92%);
  box-shadow: 0px 2px 4px 0px rgba(30, 185, 204, 0.3);
  border-radius: 6px 6px 6px 6px;
  /* width: 21px; */
  height: 16px;
  font-size: 10px;
  font-family: PingFang SC-Medium, PingFang SC;
  font-weight: 500;
  color: #ffffff;
  line-height: 16px;
  margin: 11px 6px;
  padding: 0 8px;
  text-align: center;

  opacity: 1;
}
.hos-item2 .span span {
  display: block;
  background: linear-gradient(176deg, #6efff6 0%, #5ee2f3 50%, #1ab3f5 92%);
  box-shadow: 0px 2px 4px 0px rgba(30, 185, 204, 0.3);
  border-radius: 6px 6px 6px 6px;
  /* width: 21px; */
  height: 16px;
  font-size: 10px;
  font-family: PingFang SC-Medium, PingFang SC;
  font-weight: 500;
  color: #ffffff;
  line-height: 16px;
  margin: 11px 6px;
  padding: 0 8px;
  text-align: center;

  opacity: 1;
}
.hos-item3 .span span {
  display: block;
  background: linear-gradient(176deg, #6efff6 0%, #5ee2f3 50%, #1ab3f5 92%);
  box-shadow: 0px 2px 4px 0px rgba(30, 185, 204, 0.3);
  border-radius: 6px 6px 6px 6px;
  /* width: 21px; */
  height: 16px;
  font-size: 10px;
  font-family: PingFang SC-Medium, PingFang SC;
  font-weight: 500;
  color: #ffffff;
  line-height: 16px;
  margin: 11px 6px;
  padding: 0 8px;
  text-align: center;

  opacity: 1;
}
.huayue {
  display: flex;
}
.hos-item1 .huayue img {
  width: 95px;
  height: 95px;
  margin: 0 4px;
}
.hos-item2 .huayue img {
  width: 95px;
  height: 95px;
  margin: 0 4px;
}
.hos-item3 .huayue img {
  width: 95px;
  height: 95px;
  margin: 0 4px;
}
.hos-item2 {
  width: 349px;
  height: 272px;
  background: linear-gradient(
    180deg,
    rgba(245, 233, 251, 0.83) 0%,
    #f9fcfe 43%,
    #ffffff 84%,
    #ffffff 100%
  );
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.04),
    1px 0px 4px 0px rgba(0, 0, 0, 0.02), -1px 4px 4px 0px rgba(0, 0, 0, 0.04);
  border-radius: 8px 8px 8px 8px;
  opacity: 1;
  margin: 16px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.hos-item3 {
  width: 349px;
  height: 273px;
  background: linear-gradient(
    180deg,
    rgba(253, 239, 239, 0.83) 0%,
    #fefaf9 43%,
    #ffffff 84%
  );
  box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.04),
    1px 0px 6px 0px rgba(0, 0, 0, 0.04), -1px 4px 6px 0px rgba(0, 0, 0, 0.04);
  border-radius: 8px 8px 8px 8px;
  opacity: 1;
  margin: 0 16px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
