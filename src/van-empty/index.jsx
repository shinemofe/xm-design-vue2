import VanEmpty from 'vant/es/empty'
import { componentWrap } from '../utils/util'

const render = (h, context) => {
  return <VanEmpty {...context} {...context.data} />
}

export default componentWrap('van-empty', { render }, true)
