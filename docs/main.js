import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './vant.copy.css'
import { tconModules } from '../doc.config'
// 全量引入
import Vant from 'vant/es/index'
Vue.use(Vant)

tconModules.forEach(x => {
  require(`tcon/dist/${x}.css`)
})

// 变量预览时覆盖由子项目决定
// const css = localStorage.getItem('xm-design-vue2-theme')
// if (css) {
//   const style = document.createElement('style')
//   style.innerHTML = css
//   style.setAttribute('type', 'text/css')
//   document.head.appendChild(style)
// }

// <demo-code /> 可以在 md 中插入组件或者组件源码
Vue.component('demo-playground', {
  props: {
    originCode: String,
    codeSnippet: String,
    self: Boolean
  },

  created () {
  },

  render (h) {
    return this.self
      ? h('div', null, this.$slots.default)
      : h('div', { domProps: { innerHTML: decodeURIComponent(this.codeSnippet) } })
  }
})

const app = new Vue({
  router,
  render: h => h(App)
})

app.$mount('#app')

// 用于与示例页面路由通信
window.docsRouter = router
