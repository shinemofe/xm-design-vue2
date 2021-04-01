import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './vant.copy.css'
import { tconModules } from '../doc.config'
import '../src/style/index.less'

tconModules.forEach(x => {
  require(`tcon/dist/${x}.css`)
})

// 变量预览时覆盖
const css = localStorage.getItem('xm-design-vue2-theme')
if (css) {
  const style = document.createElement('style')
  style.innerHTML = css
  style.setAttribute('type', 'text/css')
  document.head.appendChild(style)
}

const app = new Vue({
  router,
  render: h => h(App)
})

app.$mount('#app')

window.demoRouter = router
