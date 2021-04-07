import VanImage from 'vant/es/image'
import { componentWrap } from '../utils/util'

const render = (h, context) => {
  return <VanImage {...context} {...context.data} />
}

export default componentWrap('van-image', { render }, true)
