<template>
  <div class="wrapper">
    <van-nav-bar title="关于我们" left-arrow @click-left="onClickLeft" />
    <div class="content-box">
      <div class="company">{{ name }}</div>
      <van-cell-group>
        <van-cell title="公司地址" :value="address" />
        <van-cell title="公司电话" :value="tel" />
        <van-cell title="公司简介" :label="intro" />
      </van-cell-group>
    </div>

    <footer-com ref="footer"></footer-com>
  </div>
</template>

<script>
import frontApi from "../api/frontApi";
import footerCom from "../components/footer";
export default {
  name: "AboutPage",
  components: {
    footerCom,
  },
  data() {
    return {
      name: "",
      address: "",
      tel: "",
      intro: "",
    };
  },
  mounted() {
    this.getCompanyInfo();
  },
  methods: {
    getCompanyInfo() {
      let params = {};
      frontApi
        .getCompany(params)
        .then((res) => {
          console.log(res);
          this.name = res.data.name;
          this.address = res.data.address;
          this.tel = res.data.tel;
          this.intro = res.data.intro;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    onClickLeft() {
      this.$router.go(-1);
      //this.$router.back(-1);
    },
  },
};
</script>

<style scoped></style>
