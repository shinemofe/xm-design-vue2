import VanTag from 'vant/es/tag'
import { componentWrap } from '../utils/util'

const render = (h, context) => {
  return <VanTag {...context} {...context.data} />
}

export default componentWrap('van-tag', { render }, true)
