import VanSearch from 'vant/es/search'
import { componentWrap } from '../utils/util'

const render = (h, context) => {
  return <VanSearch {...context} {...context.data} />
}

export default componentWrap('van-search', { render }, true)
