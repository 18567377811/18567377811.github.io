<template>
  <div class="list">
    <div>
      <van-tabs v-model:active="active" line-width="15">
        <van-tab title="汇总榜" :class="(active == 0 ? 'active' : '')" :to="{ path: '/List' }"></van-tab>
        <van-tab title="人气榜" :class="(active == 1 ? 'active' : '')" :to="{ path: '/List/Popularity' }"></van-tab>
        <van-tab title="机构榜" :class="(active == 2 ? 'active' : '')" :to="{ path: '/List/Organization' }"></van-tab>
        <van-tab title="好医榜" :class="(active == 3 ? 'active' : '')" :to="{ path: '/List/GoodDoctor' }"></van-tab>
      </van-tabs>
    </div>
    <RouterView></RouterView>
  </div>
</template>
<script setup>
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()


const active = ref(0);
const routeWatch = () => {
  // if (route.path ==)
  var url = window.location.href;
  console.log(url.substr(-1));
  if (url.substr(-1) == 't') {
    active.value = 0;
  }
  if (url.substr(-1) == 'y') {
    active.value = 1;
  }
  if (url.substr(-1) == 'n') {
    active.value = 2;
  }
  if (url.substr(-1) == 'r') {
    active.value = 3;
  }
}
routeWatch()
watch(active, () => { console.log(active.value); })

</script>
<style scoped lang="scss">

</style>