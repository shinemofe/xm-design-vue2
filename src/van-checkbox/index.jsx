import Vue from 'vue'
import VanCheckbox from 'vant/es/checkbox'
import CheckboxGroup from 'vant/es/checkbox-group'
import { componentWrap } from '../utils/util'

Vue.use(CheckboxGroup)

const render = (h, context) => {
  return <VanCheckbox {...context} {...context.data} />
}

export default componentWrap('van-checkbox', { render }, true)
