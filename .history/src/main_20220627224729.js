import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import { initThemeColor } from './utils/themeColorClient'
// import store from './store';
Vue.config.productionTip = false
// Vue.use(ElementUI)
// 主题换肤
initThemeColor()
new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount('#app')
