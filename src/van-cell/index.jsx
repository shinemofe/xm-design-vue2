// import Vue from 'vue'
import VanCell from 'vant/es/cell'
// import VanCellGroup from 'vant/es/cell-group'
import { componentWrap } from '../utils/util'

// Vue.use(VanCellGroup)

const render = (h, context) => {
  return <VanCell {...context} {...context.data} />
}

export default componentWrap('van-cell', { render }, true)
