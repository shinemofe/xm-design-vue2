import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './vant.copy.css'
import { tconModules } from '../doc.config'
import '../src/style/index.less'

tconModules.forEach(x => {
  require(`tcon/dist/${x}.css`)
})

const app = new Vue({
  router,
  render: h => h(App)
})

app.$mount('#app')

window.demoRouter = router
