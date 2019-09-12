import Vue from "vue";
import router from './router'
import App from "./App.vue";

import bulma from "./assets/sass/main.scss";
import VueTinyLazyloadImg from "vue-tiny-lazyload-img";

Vue.use(VueTinyLazyloadImg);

Vue.use(bulma);

Vue.config.productionTip = false;

new Vue({
  router,
  render: function(h) {
    return h(App);
  }
}).$mount("#app");
