import VanRow from 'vant/es/row'
import { componentWrap } from '../utils/util'

const render = (h, context) => {
  return <VanRow {...context} {...context.data} />
}

export default componentWrap('van-row', { render }, true)
