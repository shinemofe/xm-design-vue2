import VanButton from 'vant/es/button'
import { componentWrap } from '../utils/util'

const render = (h, context) => {
  return <VanButton {...context} {...context.data} />
}

export default componentWrap('van-button', { render }, true)
