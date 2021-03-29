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
