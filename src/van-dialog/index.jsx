import Vue from 'vue'
import VanDialog from 'vant/es/dialog'
import { componentWrap } from '../utils/util'

Vue.use(VanDialog)

const render = (h, context) => {
  return h(VanDialog.Component, { ...context, ...context.data })
}

export default componentWrap('van-dialog', { render }, true)
