import VanNoticeBar from 'vant/es/notice-bar'
import { componentWrap } from '../utils/util'

const render = (h, context) => {
  return <VanNoticeBar {...context} {...context.data} />
}

export default componentWrap('van-notice-bar', { render }, true)
