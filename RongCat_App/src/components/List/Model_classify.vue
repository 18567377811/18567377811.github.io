<template>
  <div class="model-list">
    <van-tabs v-model:active="active" line-width="20">
      <van-tab title="全部" />
      <van-tab title="吸脂" />
      <van-tab title="隆鼻" />
      <van-tab title="面部整形" />
      <van-tab title="眼部整形" />
      <van-tab title="🧾" />
    </van-tabs>
    <van-dropdown-menu>
      <van-dropdown-item v-model="value1" :options="option1" />
      <van-dropdown-item v-model="value2" :options="option2" />
    </van-dropdown-menu>
  </div>

</template>

<script setup>
import { ref } from 'vue';

const active = ref(0);


const value1 = ref(0);
const value2 = ref('a');
const option1 = [
  { text: '全部项目', value: 0 },
  { text: '新款商品', value: 1 },
  { text: '活动商品', value: 2 },
];
const option2 = [
  { text: '智能排序', value: 'a' },
  { text: '好评排序', value: 'b' },
  { text: '销量排序', value: 'c' },
];
</script>