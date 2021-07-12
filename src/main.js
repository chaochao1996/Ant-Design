import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import "ant-design-vue/dist/antd.less";
// // 按需单项引入组件
// import Button from "ant-design-vue/lib/button";
// // 按需单项引入--样式
// import "ant-design-vue/lib/button/style";

import { Button } from "ant-design-vue";

Vue.config.productionTip = false;

Vue.use(Button);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
