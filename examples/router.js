import Vue from 'vue'
import Router from 'vue-router'
import { catelogs } from '../doc.config'

Vue.use(Router)
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('./Home.vue')
  }
]

catelogs.forEach(it => {
  it.items.forEach(cate => {
    if (!cate.md) {
      routes.push({
        name: cate.path,
        path: '/' + cate.path,
        // 此处的 component 不能写为 () => import(`./demo/${ cate.path }.vue`)
        // 抛出异常 TypeError: Cannot read property 'range' of null
        // 相关 issue https://github.com/babel/babel-eslint/issues/530
        component: () => import('./demo/' + cate.path + '.vue')
      })
    }
  })
})

const router = new Router({
  history: 'hash',
  routes
})

export default router
