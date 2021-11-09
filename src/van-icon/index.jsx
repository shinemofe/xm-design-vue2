import VanIcon from 'vant/es/icon'
import { componentWrap } from '../utils/util'

const render = (h, context) => {
  return <VanIcon {...context} {...context.data} />
}

export default componentWrap('van-icon', { render }, true)
