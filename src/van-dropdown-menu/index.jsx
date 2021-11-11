import Vue from 'vue'
import VanDropdownMenu from 'vant/es/dropdown-menu'
import DropdownItem from 'vant/es/dropdown-item'

import { componentWrap } from '../utils/util'

Vue.use(DropdownItem)

const render = (h, context) => {
  return <VanDropdownMenu {...context} {...context.data} />
}

export default componentWrap('van-dropdown-menu', { render }, true)
