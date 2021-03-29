import Vue from 'vue'
import Router from 'vue-router'
import { catelogs } from '../doc.config'

Vue.use(Router)
const routes = [
  {
    path: '/',
    redirect: '/home'
  }
]

catelogs.forEach(it => {
  it.items.forEach(cate => {
    routes.push({
      path: '/' + cate.path,
      component: cate.md
        ? () => import(`@/markdown/${cate.path}.md`)
        : () => import(`@@/${ cate.path }/README.md`)
    })
  })
})

const router = new Router({
  history: 'hash',
  routes
})

export default router
