<template>
  <div class="wrapper">
    <van-nav-bar title="文章详情" left-arrow @click-left="onClickLeft" />
    <div class="content-box">
      <div class="caseinfo">
        <div class="name">{{ title }}</div>
        <div class="desc">{{ desc }}</div>
        <div class="img"><van-image :src="cover" /></div>
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
  name: "ArticleDetail",
  components: { footerCom },
  data() {
    return {
      title: "",
      desc: "",
      cover: "",
      content: "",
    };
  },
  mounted() {
    console.log(this.$route);
    this.getCaseInfo();
  },
  methods: {
    getCaseInfo() {
      let articleId = this.$route.params.id;
      frontApi
        .getArticleById(articleId)
        .then((res) => {
          console.log(res);
          this.title = res.data.title;
          this.desc = res.data.desc;
          this.cover = res.data.cover;
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
