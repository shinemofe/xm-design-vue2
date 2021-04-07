import VanField from 'vant/es/field'
import { componentWrap } from '../utils/util'

const render = (h, context) => {
  return <VanField {...context} {...context.data} />
}

export default componentWrap('van-field', { render }, true)
