<script setup>
import { ref } from "vue";

const searchV = ref('')
const searchbtn = () => {
  console.log(searchV.value);
};
</script>
<template>
  <div class="Homebox">
    <!-- nav -->
    <div class="Navbox">
      <div class="usericon">
        <van-icon size="30" class="icon" name="contact" style="background-color: #fff;" />
      </div>
      <!-- <van-search v-model="value" left-icon="none" placeholder="请输入搜索关键词" /> -->
      <div class="searchbox">
        <input type="text" class="search" v-model="searchV">
        <van-icon name="search" class="searchicon" size="16" @click="searchbtn" />
      </div>
      <img src="../images/Slice 20.png" alt="通知" class="navimg">
    </div>

    <!-- 轮播图 -->
    <div class="swipebox">
      <van-swipe>
        <van-swipe-item><img src="../images/Slice 21@2x.png" alt=""></van-swipe-item>
        <van-swipe-item><img src="../images/Slice 21@2x.png" alt=""></van-swipe-item>
        <van-swipe-item><img src="../images/Slice 21@2x.png" alt=""></van-swipe-item>
        <template #indicator="{ active, total }">
          <div class="custom-indicator">
            {{ active + 1 }}/{{ total }}
          </div>
        </template>
      </van-swipe>
    </div>

    <!-- 分类列表 -->
    <van-swipe class="swipeclass">
      <van-swipe-item>
        <van-grid class="spclassbox" :gutter="10" :column-num="5" :border="false">
          <div class="classbox" v-for="item in 10" :key="item">
            <img src="../images/Slice 22.png" alt="分类" class="classimg">
            <p>文字</p>
          </div>
        </van-grid>
      </van-swipe-item>
      <van-swipe-item>
        <van-grid class="spclassbox" :gutter="10" :column-num="5" :border="false">
          <div class="classbox" v-for="item in 10" :key="item">
            <img src="../images/Slice 22.png" alt="分类" class="classimg">
            <p>分类</p>
          </div>
        </van-grid>
      </van-swipe-item>
      <template #indicator="{ active, total }">
        <div class="custom-indicator">
          <span :class="active == 0 ? 'indicator' : ''">1234</span>
          <span :class="active == 1 ? 'indicator' : ''"></span>
        </div>
      </template>
    </van-swipe>
  </div>
</template>

<style lang="scss" scoped>
.indicator {
  width: 20px;
  height: 3px;
  // background: linear-gradient(90deg, #2DD7ED 44%, #AAF6FF 100%);
  background-color: linear-gradient(90deg, #2DD7ED 44%, #AAF6FF 100%);
  // border-radius: 100px 100px 100px 100px;
  opacity: 1;
  margin-left: 5px;
}

.custom-indicator {
  position: absolute;
  right: 150px;
  bottom: -10px;
  width: 80px;
  background: rgba(0, 0, 0, 0.1);

  span {
    width: 40px;
    height: 3px;
    // background: #E3E3E3;
    // border-radius: 100px 100px 100px 100px;
    background-color: linear-gradient(90deg, #2DD7ED 44%, #AAF6FF 100%);
    opacity: 1;
  }
}

.Homebox {
  width: 375px;
  height: 1664px;
  background: linear-gradient(178deg, #24F2FF 1%, rgba(254, 254, 254, 0.56) 8%, rgba(249, 249, 249) 10%);

  .spclassbox {
    padding: 10px;
    display: flex;
    justify-content: space-around;
    align-content: space-around;
    height: 190px;

    .classbox {
      width: 60px;
      height: 60px;
      display: flex;
      align-items: center;
      flex-direction: column;

      p {
        width: 48px;
        height: 22px;
        font-size: 12px;
        font-family: PingFang SC-Regular, PingFang SC;
        font-weight: 400;
        color: #333333;
        line-height: 22px;
        text-align: center;
      }

      .img {
        width: 44px;
        height: 44px;
      }
    }
  }

  .swipebox {
    width: 349px;
    height: 194px;
    margin: 10px;
  }

  .Navbox {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 8px;

    .navimg {
      width: 16px;
      height: 18px;
      display: block;
    }

    .searchbox {
      position: relative;
      width: 279px;

      .searchicon {
        position: absolute;
        top: 25%;
        left: 90%;
      }

      .search {
        outline: none;
        border: none;
        width: 279px;
        height: 30px;
        padding: 5px 10px 5px 10px;
        background: #FFFFFF;
        border-radius: 40px 40px 40px 40px;
        opacity: 1;
      }
    }

  }

  .usericon {
    width: 30px;
    height: 30px;
    opacity: 0.3;
  }
}
</style>