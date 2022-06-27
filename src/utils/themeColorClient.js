import client from 'webpack-theme-color-replacer/client'
import forElementUI from 'webpack-theme-color-replacer/forElementUI'
import appConfig from './appConfig'
export let curColor = appConfig.themeColor
window.g = {
  VUE_DYD_CONFIG_URL: './'
}
// 动态切换主题色
export function changeThemeColor (type, newColor) {
  if (type === 1) return
  if (type === 2) {
    var options = {
      newColors: [...forElementUI.getElementUISeries(newColor), '#ff00ff', '#c4c4c4'],
      changeUrl (cssUrl) {
        console.log('cssUrl', cssUrl)
        return `${window.g.VUE_DYD_CONFIG_URL}/${cssUrl}`
      }
    }
    return client.changer.changeColor(options, Promise)
      .then(() => {
        curColor = newColor
        localStorage.setItem('theme_color', curColor)
      })
  }
}
export function initThemeColor () {
  const savedColor = localStorage.getItem('theme_color')
  if (savedColor) {
    curColor = savedColor
    changeThemeColor(savedColor)
  }
}
