<template>
  <div class="wrapper">
    <van-nav-bar title="装修首页" left-text="" right-text="" />
    <van-swipe :autoplay="3000" class="swiperbox">
      <van-swipe-item v-for="(image, index) in swiperImages" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
    <van-grid>
      <van-grid-item
        v-for="(icon, index) in iconImages"
        :key="index"
        :icon="icon.img"
        :text="icon.name"
        :url="'/article?cateId=' + icon.id"
      />
    </van-grid>

    <div class="good">
      <h2>推荐介绍</h2>
      <van-grid :border="false" :column-num="2">
        <van-grid-item
          v-for="(item, index) in eventList"
          :key="index"
          :url="item.url"
        >
          <van-image :src="item.img" />
          <div class="text">{{ item.name }}</div>
        </van-grid-item>
      </van-grid>
    </div>

    <footer-com ref="footer"></footer-com>
  </div>
</template>

<script>
import Vue from "vue";
import { Lazyload } from "vant";
Vue.use(Lazyload);
import footerCom from "../components/footer";
import frontApi from "../api/frontApi";

export default {
  name: "HomePage",
  components: {
    footerCom,
  },
  data() {
    return {
      swiperImages: [
        require("@/assets/images/20200807.jpg"),
        require("@/assets/images/20200903.jpg"),
      ],
      iconImages: [],
      eventList: [],
    };
  },
  mounted() {
    this.getEventList();
    this.getCateList();
  },
  methods: {
    getEventList() {
      let params = {};
      frontApi
        .eventList(params)
        .then((res) => {
          console.log(res);
          this.eventList = res.data.list;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getCateList() {
      let params = {};
      frontApi
        .cateList(params)
        .then((res) => {
          console.log(res);
          this.iconImages = res.data.list;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
