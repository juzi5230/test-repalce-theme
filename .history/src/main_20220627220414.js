import Vue from "vue"
import App from "./App.vue"
import router from "./router"
// import store from "./store";
Vue.config.productionTip = false
import ElementUI from 'element-ui'
Vue.use(ElementUI)
// 主题换肤
import { initThemeColor } from './utils/themeColorClient'
initThemeColor()
new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount("#app")