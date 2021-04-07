import VanCol from 'vant/es/col'
import { componentWrap } from '../utils/util'

const render = (h, context) => {
  return <VanCol {...context} {...context.data} />
}

export default componentWrap('van-col', { render }, true)
