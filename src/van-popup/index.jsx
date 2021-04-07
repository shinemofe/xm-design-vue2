import VanPopup from 'vant/es/popup'
import { componentWrap } from '../utils/util'

const render = (h, context) => {
  return <VanPopup {...context} {...context.data} />
}

export default componentWrap('van-popup', { render }, true)
