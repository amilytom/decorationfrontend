<template>
  <div class="wrapper">
    <van-nav-bar title="装修案例" left-arrow @click-left="onClickLeft" />

    <div class="content-box">
      <van-grid :border="false" :column-num="1">
        <van-grid-item
          v-for="(item, index) in caseList"
          :key="index"
          :url="'/case/' + item.id"
        >
          <van-image :src="item.img" />
          <div class="text">{{ item.name }}</div>
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
      caseList: [],
      page: 1,
      rows: 5,
      total: 0,
    };
  },
  mounted() {
    this.getCaseList();
  },
  methods: {
    getCaseList() {
      let params = {
        page: this.page,
        rows: this.rows,
      };
      frontApi
        .caseList(params)
        .then((res) => {
          console.log(res);
          this.caseList = res.data.list;
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
