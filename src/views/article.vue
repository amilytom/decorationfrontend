<template>
  <div class="wrapper">
    <van-nav-bar :title="topTitle" left-arrow @click-left="onClickLeft" />

    <div class="content-box">
      <van-grid :border="false" :column-num="1">
        <van-grid-item
          v-for="(item, index) in articleList"
          :key="index"
          :url="'/article/' + item.id"
        >
          <van-image :src="item.cover" />
          <div class="text">{{ item.title }}</div>
        </van-grid-item>
      </van-grid>

      <van-pagination v-model="page" :total-items="total" :items-per-page="5" />
    </div>

    <footer-com ref="footer"></footer-com>
  </div>
</template>

<script>
import frontApi from "../api/frontApi";
import footerCom from "../components/footer";

export default {
  name: "CasePage",
  components: {
    footerCom,
  },
  data() {
    return {
      articleList: [],
      page: 1,
      rows: 5,
      total: 0,
      topTitle: "",
    };
  },
  mounted() {
    this.getCateById();
    this.getArticleList();
    console.log(this.$route);
  },
  methods: {
    getCateById() {
      let id = this.$route.query.cateId;
      frontApi
        .getCateById(id)
        .then((res) => {
          console.log(res);
          this.topTitle = res.data.name;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getArticleList() {
      let params = {
        page: this.page,
        rows: this.rows,
        cate: this.$route.query.cateId,
      };
      frontApi
        .articleList(params)
        .then((res) => {
          console.log(res);
          this.articleList = res.data.list;
          this.total = res.data.count;
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
