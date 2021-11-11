import VanBadge from 'vant/es/badge'
import { componentWrap } from '../utils/util'

const render = (h, context) => {
  return <VanBadge {...context} {...context.data} />
}

export default componentWrap('van-badge', { render }, true)
