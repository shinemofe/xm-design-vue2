import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './vant.copy.css'
import { tconModules } from '../doc.config'
import '../src/style/index.less'
import Dialog from 'vant/es/dialog'
import 'vant/es/dialog/index.less'
import 'vant/es/overlay/index.less'

tconModules.forEach(x => {
  require(`tcon/dist/${x}.css`)
})

// 变量预览时覆盖
const isParentPreview = /preview/.test(window.top.location.search)
const css = localStorage.getItem('xm-design-vue2-theme')
if (css) {
  const insert = () => {
    const style = document.createElement('style')
    style.innerHTML = css
    style.setAttribute('type', 'text/css')
    document.head.appendChild(style)
    window.top.document.head.appendChild(style.cloneNode())
  }
  if (!isParentPreview) {
    Dialog.confirm({ message: '本地主题存在，是否加载本地主题样式' }).then(() => {
      insert()
    }).catch(() => {
      localStorage.removeItem('xm-design-vue2-theme')
    })
  }
}

const app = new Vue({
  router,
  render: h => h(App)
})

app.$mount('#app')

window.demoRouter = router
