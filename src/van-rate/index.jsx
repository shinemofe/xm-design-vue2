import VanRate from 'vant/es/rate'
import { componentWrap } from '../utils/util'

const render = (h, context) => {
  return <VanRate {...context} {...context.data} />
}

export default componentWrap('van-rate', { render }, true)
