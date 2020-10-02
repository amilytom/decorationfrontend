// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";

// 引入vant及默认主题
import Vant from "vant";
import "vant/lib/index.css";

Vue.use(Vant);

// 引入babel-polyfill让不支持es6的浏览器能够正常运行
import "babel-polyfill";

// 引入公共样式
import "./assets/css/style.css";

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>",
});
