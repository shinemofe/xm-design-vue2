import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './vant.copy.css'
import { tconModules, catelogs } from '../doc.config'
import 'tcon/dist/reset.css'

// 全量引入组件 JS
// 样式文件需要手动在 demo 中引入
catelogs.forEach(it => {
  it.items.filter(x => !x.md).forEach(com => {
    if (com.vant) {
      // 使用 js 避免重复引用
      require(`../src/${com.path}/index.less.js`)
    }
    Vue.use(require(`../src/${com.path}/index`).default)
  })
})

tconModules.forEach(x => {
  require(`tcon/dist/${x}.css`)
})

// 变量预览时覆盖
const isParentPreview = window.top && /preview/.test(window.top.location.search)
const css = localStorage.getItem('xm-design-vue2-theme')
if (css) {
  const insert = () => {
    const style = document.createElement('style')
    style.innerHTML = css
    style.setAttribute('type', 'text/css')
    document.head.appendChild(style)
    if (window.top) {
      window.top.document.head.appendChild(style.cloneNode(true))
    }
  }
  if (isParentPreview) {
    insert()
  } else {
    Vue.prototype.$dialog.confirm({ message: '本地主题存在，是否加载本地主题样式' }).then(() => {
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
