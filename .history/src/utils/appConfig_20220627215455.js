module.exports = {
    LOGIN_PATH: './',
    title: 'vue + webpack4 + element-ui 脚手架项目',
    description: 'vue + webpack4 + element-ui 脚手架项目',
    themeColor: '#409EFF' // 这个色号必须和主题色是一个颜色才行, 要不然出来的 CSS 模板文件是空的
  }
/*/vue.config.JS*/
const webpack = require('webpack')
const ThemeColorReplacer = require('webpack-theme-color-replacer')
const forElementUI = require('webpack-theme-color-replacer/forElementUI')
const appConfig = require('./config/app-config.js')
module.exports = {
  configureWebpack: {
    plugins: [
      // 生成仅包含颜色的替换样式 (主题色等)
      new ThemeColorReplacer({
        fileName: 'style/theme-colors.[contenthash:8].css',
        matchColors: [
          ...forElementUI.getElementUISeries(appConfig.themeColor)
        ],
        changeSelector: forElementUI.changeSelector,
        isJsUgly: process.env.NODE_ENV === 'production' ? true : undefined
      })
    ]
  }
}