import request from "@/utils/request";

const frontApi = {
  // 获取活动列表
  eventList(param = {}) {
    return request({
      url: "/event",
      method: "get",
      params: param,
    });
  },

  // 获取分类列表
  cateList(param = {}) {
    return request({
      url: "/cate",
      method: "get",
      params: param,
    });
  },

  // 获取一条文章信息
  getCateById(id) {
    return request({
      url: "/cate/" + id,
      method: "get",
    });
  },

  // 获取文章列表
  articleList(param = {}) {
    return request({
      url: "/article",
      method: "get",
      params: param,
    });
  },

  // 获取一条文章信息
  getArticleById(articleId) {
    return request({
      url: "/article/" + articleId,
      method: "get",
    });
  },

  // 获取案例列表
  caseList(param = {}) {
    return request({
      url: "/case",
      method: "get",
      params: param,
    });
  },

  // 获取案例详情
  getCaseById(caseId) {
    return request({
      url: "/case/" + caseId,
      method: "get",
    });
  },

  // 获取企业信息
  getCompany(param = {}) {
    return request({
      url: "/company",
      method: "get",
      params: param,
    });
  },

  // 预约表单提交
  orderTable(param = {}) {
    return request({
      url: "/order",
      method: "post",
      data: param,
    });
  },
};

export default frontApi;
