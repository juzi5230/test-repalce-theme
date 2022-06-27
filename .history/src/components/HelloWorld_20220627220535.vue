<template>
  <div class="home">
    <div class="head"></div>
    <el-button type="primary"> 主要按钮 </el-button>
    <el-color-picker
      size="medium"
      @change="changeColor">
    </el-color-picker>
    <div>
      <span class="font-test"></span>
      <span class="font-test1">
        </span>
    </div>
  </div>
</template>
<script>
import { changeThemeColor } from '../utils/themeColorClient'
export default {
  name: "Home",
  data () {
    return {
    }
  },
  methods: {
    changeColor (newColor) {
      changeThemeColor(newColor).then(() => {
      })
    }
  }
}
</script>
<style scoped>
.head{
  height:100px;
  width: 100%;
  background-color: #409EFF;
}
.font-test{
  font-size: 20px;
  line-height: 40px;
  color: #409EFF;
}
.font-test1{
  font-size: 20px;
  line-height: 40px;
  color: #000000;
}
</style>
