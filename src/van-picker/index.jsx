import VanPicker from 'vant/es/picker'
import { componentWrap } from '../utils/util'

const render = (h, context) => {
  return <VanPicker {...context} {...context.data} />
}

export default componentWrap('van-picker', { render }, true)
