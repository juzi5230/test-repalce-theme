<template>
  <div id="cesiumContainer" class="map-container"></div>
</template>

<script>
  import { defineComponent, reactive, toRefs } from 'vue'

  export default defineComponent({
    name: 'Map',
    setup() {
      const state = reactive({})

      const Cesium = inject('$Cesium')
      onMounted(() => {
        let viewer = new Cesium.Viewer('cesiumContainer', {
          imageryProvider: new Cesium.ArcGisMapServerImageryProvider({
            url: 'https://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer',
          }),
        })
        console.info(viewer)
      })

      return {
        ...toRefs(state),
      }
    },
  })
</script>
<style>
  #cesiumContainer {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
  }
</style>