import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: "/",
      name: "HomePage",
      component: () => import("../views/index.vue"),
    },
    {
      path: "/case",
      name: "CasePage",
      component: () => import("../views/case.vue"),
    },
    {
      path: "/case/:id",
      name: "CaseDetail",
      component: () => import("../views/casedetail.vue"),
    },
    {
      path: "/article",
      name: "ArticlePage",
      component: () => import("../views/article.vue"),
    },
    {
      path: "/article/:id",
      name: "ArticleDetail",
      component: () => import("../views/articledetail.vue"),
    },
    {
      path: "/about",
      name: "AboutPage",
      component: () => import("../views/about.vue"),
    },
    {
      path: "/order",
      name: "OrderPage",
      component: () => import("../views/order.vue"),
    },
  ],
});
