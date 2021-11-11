import VanActionSheet from 'vant/es/action-sheet'
import { componentWrap } from '../utils/util'

const render = (h, context) => {
  return <VanActionSheet {...context} {...context.data} />
}

export default componentWrap('van-action-sheet', { render }, true)
