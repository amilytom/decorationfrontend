<template>
  <van-tabbar route v-model="active">
    <van-tabbar-item replace to="/" name="HomePage" icon="home-o"
      >首页</van-tabbar-item
    >
    <van-tabbar-item replace to="/order" name="OrderPage" icon="balance-o"
      >预约</van-tabbar-item
    >
    <van-tabbar-item replace to="/case" name="CasePage" icon="gem-o"
      >案例</van-tabbar-item
    >
    <van-tabbar-item replace to="/about" name="AboutPage" icon="location-o"
      >关于</van-tabbar-item
    >
  </van-tabbar>
</template>

<script>
export default {
  name: "footerPage",
  data() {
    return {
      active: "HomePage",
    };
  },
  methods: {},
};
</script>
