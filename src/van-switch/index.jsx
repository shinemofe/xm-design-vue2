import VanSwitch from 'vant/es/switch'
import { componentWrap } from '../utils/util'

const render = (h, context) => {
  return <VanSwitch {...context} {...context.data} />
}

export default componentWrap('van-switch', { render }, true)
