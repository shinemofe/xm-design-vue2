import Vue from 'vue'
import VanRadio from 'vant/es/radio'
import VanRadioGroup from 'vant/es/radio-group'
import { componentWrap } from '../utils/util'

Vue.use(VanRadioGroup)

const render = (h, context) => {
  return <VanRadio {...context} {...context.data} />
}

export default componentWrap('van-radio', { render }, true)
