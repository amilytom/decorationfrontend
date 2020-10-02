<template>
  <div class="wrapper">
    <van-nav-bar title="案例详情" left-arrow @click-left="onClickLeft" />
    <div class="content-box">
      <div class="caseinfo">
        <div class="name">{{ name }}</div>
        <div class="desc">{{ desc }}</div>
        <div class="img"><van-image :src="img" /></div>
        <div class="cbox">{{ content }}</div>
      </div>
    </div>

    <footer-com ref="footer"></footer-com>
  </div>
</template>

<script>
import frontApi from "../api/frontApi";
import footerCom from "../components/footer";
export default {
  name: "CaseDetail",
  components: {
    footerCom,
  },
  data() {
    return {
      name: "",
      desc: "",
      img: "",
      content: "",
    };
  },
  mounted() {
    console.log(this.$route);
    this.getCaseInfo();
  },
  methods: {
    getCaseInfo() {
      let caseId = this.$route.params.id;
      frontApi
        .getCaseById(caseId)
        .then((res) => {
          console.log(res);
          this.name = res.data.name;
          this.desc = res.data.desc;
          this.img = res.data.img;
          this.content = res.data.content;
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
