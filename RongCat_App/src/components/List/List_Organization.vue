<script setup>
import { ref } from 'vue';
import classIfy from './Model_classify.vue'

const value = ref(5.0);
</script>
<template>
  <div class="hot_list">
    <classIfy />
    <ul>
      <li class="products">
        <div class="logoBox">
          <img src="../../images/List-image/榜单-3_slices/Slice 126@2x(7).png" alt="" class="logo_title">
          <img src="../../images/List-image/榜单-3_slices/Slice 127@2x.png" alt="" class="logo_img">
        </div>
        <div class="nameBox">
          <p class="title">北京华悦府医疗美容</p>
          <van-rate v-model="value" :size="25" color="#FB5628" void-icon="star" void-color="#eee" />
          <span>{{ value.toFixed(1) }}</span>
          <p class="bottom">10预约|10案例|医生7</p>
        </div>
        <div class="bottomBox">
          <p>1000km</p>
          <p class="btn-gogo">免费咨询</p>
        </div>
      </li>

      <li class="products">
        <div class="logoBox">
          <img src="../../images/List-image/榜单-3_slices/Slice 126@2x.png" alt="" class="logo_title">
          <img src="../../images/List-image/榜单-3_slices/Slice 127@2x.png" alt="" class="logo_img">
        </div>
        <div class="nameBox">
          <p class="title">北京华悦府医疗美容</p>
          <van-rate v-model="value" :size="25" color="#FB5628" void-icon="star" void-color="#eee" />
          <span>{{ value.toFixed(1) }}</span>
          <p class="bottom">10预约|10案例|医生7</p>
        </div>
        <div class="bottomBox">
          <p>1000km</p>
          <p class="btn-gogo">免费咨询</p>
        </div>
      </li>


      <li class="products">
        <div class="logoBox">
          <img src="../../images/List-image/榜单-3_slices/Slice 126@2x(8).png" alt="" class="logo_title">
          <img src="../../images/List-image/榜单-3_slices/Slice 127@2x.png" alt="" class="logo_img">
        </div>
        <div class="nameBox">
          <p class="title">北京华悦府医疗美容</p>
          <van-rate v-model="value" :size="25" color="#FB5628" void-icon="star" void-color="#eee" />
          <span>{{ value.toFixed(1) }}</span>
          <p class="bottom">10预约|10案例|医生7</p>
        </div>
        <div class="bottomBox">
          <p>1000km</p>
          <p class="btn-gogo">免费咨询</p>
        </div>
      </li>


      <li class="products">
        <div class="logoBox">
          <img src="../../images/List-image/榜单-3_slices/Slice 126@2x(9).png" alt="" class="logo_title">
          <img src="../../images/List-image/榜单-3_slices/Slice 127@2x.png" alt="" class="logo_img">
        </div>
        <div class="nameBox">
          <p class="title">北京华悦府医疗美容</p>
          <van-rate v-model="value" :size="25" color="#FB5628" void-icon="star" void-color="#eee" />
          <span>{{ value.toFixed(1) }}</span>
          <p class="bottom">10预约|10案例|医生7</p>
        </div>
        <div class="bottomBox">
          <p>1000km</p>
          <p class="btn-gogo">免费咨询</p>
        </div>
      </li>


      <li class="products">
        <div class="logoBox">
          <img src="../../images/List-image/榜单-3_slices/Slice 126@2x(1).png" alt="" class="logo_title">
          <img src="../../images/List-image/榜单-3_slices/Slice 127@2x.png" alt="" class="logo_img">
        </div>
        <div class="nameBox">
          <p class="title">北京华悦府医疗美容</p>
          <van-rate v-model="value" :size="25" color="#FB5628" void-icon="star" void-color="#eee" />
          <span>{{ value.toFixed(1) }}</span>
          <p class="bottom">10预约|10案例|医生7</p>
        </div>
        <div class="bottomBox">
          <p>1000km</p>
          <p class="btn-gogo">免费咨询</p>
        </div>
      </li>


      <li class="products">
        <div class="logoBox">
          <img src="../../images/List-image/榜单-3_slices/Slice 126@2x(4).png" alt="" class="logo_title">
          <img src="../../images/List-image/榜单-3_slices/Slice 127@2x.png" alt="" class="logo_img">
        </div>
        <div class="nameBox">
          <p class="title">北京华悦府医疗美容</p>
          <van-rate v-model="value" :size="25" color="#FB5628" void-icon="star" void-color="#eee" />
          <span>{{ value.toFixed(1) }}</span>
          <p class="bottom">10预约|10案例|医生7</p>
        </div>
        <div class="bottomBox">
          <p>1000km</p>
          <p class="btn-gogo">免费咨询</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.products {
  display: flex;
  width: 349px;
  height: 91px;

  .logoBox {
    height: 91px;
    width: 73px;

    .logo_img {
      width: 60px;
      height: 60px;
      margin-left: 13px;
    }

    .logo_title {
      width: 33px;
      height: 18px;
      border-top-left-radius: 10px;
      border-bottom-right-radius: 10px;
    }
  }

  .nameBox {
    text-align: left;
    width: 150px;
    margin-top: 13px;
    margin-left: 13px;

    .title {

      font-family: PingFang SC-Bold, PingFang SC;
      font-size: 16px;
      color: #333333;
      font-weight: bold;
      line-height: 22px;
    }

    span {
      font-size: 14px;
      font-family: PingFang SC-Regular, PingFang SC;
      font-weight: 400;
      color: #666666;
      line-height: 22px;
      // -webkit-background-clip: text;
      // -webkit-text-fill-color: transparent;

    }

    .bottom {
      font-size: 11px;
      font-family: PingFang SC-Regular, PingFang SC;
      font-weight: 400;
      color: #666666;
      line-height: 22px;
      // -webkit-background-clip: text;
      // -webkit-text-fill-color: transparent;
    }
  }

  .bottomBox {
    display: flex;
    flex-direction: column;
    // align-items: right;
    height: 91px;
    width: 102px;
    // text-align: center;
    // justify-content: ;
    align-items: flex-end;

    p {
      font-size: 11px;
      font-family: DIN-Regular, DIN;
      font-weight: 400;
      color: #666666;
      line-height: 22px;
      margin-top: 13px;
    }

    .btn-gogo {
      width: 82px;
      height: 26px;
      font-size: 11px;
      font-family: PingFang SC-Medium, PingFang SC;
      font-weight: 500;
      color: #FFFFFF;
      line-height: 28px;
      text-align: center;
      background: linear-gradient(176deg, #6EFFF6 0%, #5EE2F3 50%, #1AB3F5 92%);
      background: linear-gradient(128deg, #FFD042 15%, #FFB030 86%, #FEA30F 100%);
      background: linear-gradient(128deg, #FFD042 15%, #FFB030 53%, #FEA30F 100%);
      box-shadow: 0px 2px 4px 0px rgba(231, 152, 25, 0.6);
      border-radius: 13px 13px 13px 13px;
      opacity: 1;
    }
  }
}
</style>