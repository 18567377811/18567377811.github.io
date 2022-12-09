<style scoped lang="scss">
.list {
  display: flex;
  flex-direction: column;
  overflow: auto;

  .nav {
    width: 375px;
    position: relative;
    height: 100%;
    overflow: auto;

    .navTab {
      width: 375px;
      margin-top: 46px;
      // margin: auto;
    }

    .backImg {
      position: absolute;
      width: 375px;
      height: 100%;
      z-index: -2;
    }

    h1 {
      color: white;
      text-align: center;
      font-size: 28px;
      font-size: 800;
      margin-top: 15px;
    }

    .n_Say {
      width: 375px;
      height: 100px;
      color: white;
      text-align: center;

      p {
        margin-top: 16px;
      }

      .n_say_p {
        margin: auto;
        // width: 88px;
        // height: 20px;
        line-height: 20px;
        // background-color: rgba(255, 255, 255, 0.12);
        width: 88px;
        height: 20px;
        background: #FF6E44 rgba(255, 255, 255, 0.12);
        box-shadow: inset 0px 1px 2px 0px rgba(255, 255, 255, 0.1), inset 0px -1px 2px 0px rgba(255, 255, 255, 0.1), 0px 1px 4px 0px rgba(255, 136, 0, 0.48);
        border-radius: 100px 100px 100px 100px;
        opacity: 1;
        text-align: center;
        margin-top: 16px;
      }
    }
  }

  .bottom {
    width: 375px;
    height: 1.33rem;
  }
}
</style>
<template>
  <div class="list">
    <div>
      <div class="nav">
        <img src=../images/List-image/Group1.png class="backImg" alt="" v-if="isImgShow == 1">
        <img src=../images/List-image/Group2.png class="backImg" alt="" v-if="isImgShow == 0">
        <img src=../images/List-image/Group3.png class="backImg" alt="" v-if="isImgShow == 2">
        <img src=../images/List-image/Group4.png class="backImg" alt="" v-if="isImgShow == 3">
        <van-tabs v-model:active="active" line-width="20" background="none" color="white" title-inactive-color="#FFFFFF"
          title-active-color="#FFFFFF" class="navTab">
          <van-tab title="汇总榜" :class="(active == 0 ? 'active' : '')" :to="{ path: '/List' }" />
          <van-tab title="人气榜" :class="(active == 1 ? 'active' : '')" :to="{ path: '/List/Popularity' }" />
          <van-tab title="机构榜" :class="(active == 2 ? 'active' : '')" :to="{ path: '/List/Organization' }" />
          <van-tab title="好医榜" :class="(active == 3 ? 'active' : '')" :to="{ path: '/List/GoodDoctor' }" />
        </van-tabs>
        <h1>{{ navList.title }}</h1>
        <div class="n_Say">
          <p class="n_say_p">评选说明&nbsp;&nbsp;＞</p>
          <p>本榜单由权威人士认证出品 为了爱美的你而打造</p>
        </div>
      </div>
      <RouterView class="content"></RouterView>
      <div class="bottom"></div>
    </div>
  </div>
</template>
<script setup>
import { ref, watch, reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router'
const active = ref(0);
const route = useRoute()
const router = useRouter()
const navList = reactive({ title: '高精尖榜单' })
const isImgShow = ref(0);
watch(route, () => {
  var url = window.location.href;
  if (url.substr(-1) == 't') {
    navList.title = '高精尖榜单';
    active.value = 0;
    isImgShow.value = 0
  }
  if (url.substr(-1) == 'y') {
    navList.title = '金牌人气榜单';
    active.value = 1;
    isImgShow.value = 1;
  }
  if (url.substr(-1) == 'n') {
    navList.title = '金牌机构榜单';
    active.value = 2;
    isImgShow.value = 2
  }
  if (url.substr(-1) == 'r') {
    navList.title = '金牌名医榜单';
    active.value = 3;
    isImgShow.value = 3;
  }
})
//监听路由变化
// watch(active, () => { console.log(active.value); })

</script>