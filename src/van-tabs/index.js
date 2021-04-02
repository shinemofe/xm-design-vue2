import Vue from 'vue'
import VanTabs from 'vant/es/tabs'
import VanTab from 'vant/es/tab'
import { componentWrap } from '../utils/util'

Vue.use(VanTab)

const render = (h, context) => {
  return <VanTabs {...context} {...context.data} />
}

export default componentWrap('van-tabs', { render }, true)
