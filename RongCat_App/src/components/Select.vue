<template>
  <div class="select">
    <div class="header">
      <h1>严选</h1>
      <div class="nav">
        <span>北京</span>
        <div class="search">
          <div class="space"></div>
          <input type="text" placeholder="请输入你想要的内容" />
          <button></button>
        </div>
        <span>通知</span>
      </div>
      <div class="items">
        <div class="item" v-for="item in 10">
          <div class="img"></div>
          <span>面部轮廓</span>
        </div>
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
  </div>
</template>
<script setup></script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.select {
  background-color: #fafafa;
  height: 100vh;
}
.nav {
  display: flex;
  justify-content: space-around;
  line-height: 30px;
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
</style>
