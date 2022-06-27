// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import Cesium from 'Cesium'
// import 'cesium/Source/Widgets/widgets.css'
// import Cesium from 'cesium/Source/Cesium.js'
let Cesium = require('cesium/Source/Cesium')
import "cesium/Source/Widgets/widgets.css"
// import buildModuleUrl from "cesium/Source/Core/buildModuleUrl"
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  Cesium,
  components: { App },
  template: '<App/>'
})
