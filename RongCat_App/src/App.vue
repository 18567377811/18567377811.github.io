<template>
  <div class="App">
    <router-view class="main"></router-view>
    <van-tabbar v-model="active" fixed placeholder>
      <van-tabbar-item to="/">
        <template #icon="props"> <img src="./images/Slice15.png" /> </template
        >首页
      </van-tabbar-item>
      <van-tabbar-item to="/select">
        <template #icon="props"> <img src="./images/Slice 16.png" /> </template
        >严选
      </van-tabbar-item>
      <van-tabbar-item to="/List">
        <template #icon="props"> <img src="./images/Slice 17.png" /> </template
        >榜单
      </van-tabbar-item>
      <van-tabbar-item to="/Circle">
        <template #icon="props"> <img src="./images/Slice 18.png" /> </template
        >圈子
      </van-tabbar-item>
      <van-tabbar-item to="/My">
        <template #icon="props"> <img src="./images/Slice 19.png" /> </template
        >我的
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script setup>
import { ref } from "vue";

const active = ref(0);
</script>

<style lang="scss" scoped>
.main {
  flex: 1;
}
</style>
