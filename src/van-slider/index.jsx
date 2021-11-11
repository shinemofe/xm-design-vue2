import VanSlider from 'vant/es/slider'
import { componentWrap } from '../utils/util'

const render = (h, context) => {
  return <VanSlider {...context} {...context.data} />
}

export default componentWrap('van-slider', { render }, true)
