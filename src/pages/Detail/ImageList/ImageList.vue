<template>
  <div class="swiper-container" ref="mySwiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(skuImage,index) of skuImageList" :key="skuImage.id">
        <img :src="skuImage.imgUrl" @mouseenter="changeIndex(index)" :class="{active:checkIndex==index}">
      </div>
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>
  <!-- <div><Lunbo :list="skuImageList" /></div> -->
</template>

<script>

import Swiper from 'swiper'
export default {
  name: "ImageList",
  data () {
    return {
      checkIndex: 0
    }
  },
  props: ["skuImageList"],
  watch: {
    skuImageList: {
      handler() {
        this.$nextTick(() => {
          var floor1Swiper = new Swiper(this.$refs.mySwiper, {
            // 如果需要前进后退按钮
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
            slidesPerView: 5,
            slidesPerGroup: 1
          });
        })
      },
      immediate: true
    }
  },
  methods: {
    changeIndex(index) {
      this.checkIndex = index
      this.$bus.$emit("changeIndex", index)
    }
  }
}
</script>

<style lang="less" scoped>
.swiper-container {
  height: 56px;
  width: 412px;
  box-sizing: border-box;
  padding: 0 12px;

  .swiper-slide {
    width: 56px;
    height: 56px;

    img {
      width: 100%;
      height: 100%;
      border: 1px solid #ccc;
      padding: 2px;
      width: 50px;
      height: 50px;
      display: block;

      &.active {
        border: 2px solid #f60;
        padding: 1px;
      }

      // &:hover {
      //   border: 2px solid #f60;
      //   padding: 1px;
      // }
    }
  }

  .swiper-button-next {
    left: auto;
    right: 0;
  }

  .swiper-button-prev {
    left: 0;
    right: auto;
  }

  .swiper-button-next,
  .swiper-button-prev {
    box-sizing: border-box;
    width: 12px;
    height: 56px;
    background: rgb(235, 235, 235);
    border: 1px solid rgb(204, 204, 204);
    top: 0;
    margin-top: 0;

    &::after {
      font-size: 12px;
    }
  }
}
</style>