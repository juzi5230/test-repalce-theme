<template>
  <div class="map-box">
    <button>122313</button>
    <div id="cesiumContainer"></div>
  </div>
</template>

<script>
// let Cesium = require('Cesium')
import { initThemeColor, changeThemeColor } from '../utils/themeColorClient'

export default {
  name: 'testT',
  mounted () {
    // eslint-disable-next-line no-undef
    // var viewer = new this.Cesium.Viewer('cesiumContainer')
    // // eslint-disable-next-line no-console
    // console.log(viewer)
    initThemeColor()
    changeThemeColor('#ff00ff')
  }
}
</script>
<style scoped>
  .map-box{
    width: 100%;
    height: 100%;
  }
  #cesiumContainer{
    width: 100%;
    height: 100%;
  }
</style>
