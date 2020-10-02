<template>
  <div class="wrapper">
    <van-nav-bar title="装修案例" left-arrow @click-left="onClickLeft" />

    <div class="content-box">
      <van-form @submit="onSubmit">
        <van-field
          v-model="name"
          name="name"
          label="姓名"
          placeholder="姓名"
          :rules="[{ required: true, message: '请填写姓名' }]"
        />
        <van-field
          v-model="phone"
          type="tel"
          name="phone"
          label="电话"
          placeholder="电话"
          :rules="[{ required: true, message: '请填写电话' }]"
        />
        <van-field name="type" label="装修项目">
          <template #input>
            <van-radio-group v-model="type" direction="horizontal">
              <van-radio name="家居">家居</van-radio>
              <van-radio name="公司">公司</van-radio>
              <van-radio name="酒吧">酒吧</van-radio>
              <van-radio name="酒店">酒店</van-radio>
              <van-radio name="旅馆">旅馆</van-radio>
              <van-radio name="网吧">网吧</van-radio>
              <van-radio name="超市">超市</van-radio>
              <van-radio name="饭馆">饭馆</van-radio>
              <van-radio name="家装">家装</van-radio>
              <van-radio name="工装">工装</van-radio>
            </van-radio-group>
          </template>
        </van-field>
        <van-field
          readonly
          clickable
          name="orderDate"
          :value="orderDate"
          label="预约日期"
          placeholder="点击选择日期"
          @click="showCalendar = true"
        />
        <van-calendar v-model="showCalendar" @confirm="onConfirm" />
        <van-field
          v-model="message"
          rows="1"
          name="message"
          autosize
          label="留言"
          type="textarea"
          placeholder="请输入留言"
        />
        <div style="margin: 16px">
          <van-button round block type="info" native-type="submit">
            提交
          </van-button>
        </div>
      </van-form>
    </div>

    <footer-com ref="footer"></footer-com>
  </div>
</template>

<script>
import footerCom from "../components/footer";
import frontApi from "../api/frontApi";
import timeFormat from "../utils/timeFormat";

export default {
  name: "OrderPage",
  components: {
    footerCom,
  },
  data() {
    return {
      name: "",
      phone: "",
      type: "工装",
      orderDate: "",
      showCalendar: false,
      message: "",
    };
  },
  mounted() {},
  methods: {
    onSubmit(values) {
      console.log("submit", values);
      let params = values;
      frontApi
        .orderTable(params)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    onClickLeft() {
      this.$router.go(-1);
      //this.$router.back(-1);
    },
    onConfirm(date) {
      this.orderDate = timeFormat.dateFormat(date, "YYYY-mm-dd");
      this.showCalendar = false;
    },
  },
};
</script>
