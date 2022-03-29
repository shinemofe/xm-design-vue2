import Vue from 'vue'
import VanTabbar from 'vant/es/tabbar'
import TabbarItem from 'vant/es/tabbar-item'
import { componentWrap } from '../utils/util'

Vue.use(TabbarItem)

const render = (h, context) => {
  return <VanTabbar {...context} {...context.data} />
}

export default componentWrap('van-tabbar', { render }, true)
