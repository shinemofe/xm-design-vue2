<template>
  <div class="xm-button-bottom">
    <div class="xm-button-bottom-button">
      <van-button type='primary' @click="$emit('onSubmit')" block>{{submitText}}</van-button>
    </div>
    <div class="xm-button-bottom-button" v-if="cancel">
      <van-button @click="$emit('onCancel');" block>取消</van-button>
    </div>
    <div class="xm-button-bottom-box" v-if="select">
      <van-popover
        v-model="showPopover"
        trigger="click"
        placement="top-end"
        :actions="actions"
        @select="onSelect"
      >
        <template #reference>
          <img src="../../examples/assets/threedot.png" style="width: 100%;height:100%;" alt="">
        </template>
      </van-popover>
    </div>
  </div>
</template>

<script>
import { componentWrap } from '../utils/util'
import VanButton from '../van-button'
import VanPopover from 'vant/es/popover'
import 'vant/es/popover/index.less'

export default componentWrap('xm-button-bottom', {
  components: {
    VanButton,
    VanPopover
  },

  data () {
    return {
      showPopover: false
    }
  },

  props: {
    'submit-text': {
      type: String,
      default: '提交'
    },
    cancel: {
      type: Boolean,
      default: false
    },
    select: {
      type: Boolean,
      default: false
    },
    actions: {
      type: Array,
      default: () => [{ text: '选项一' }, { text: '选项二' }, { text: '选项三' }]
    },
    onSelect: {
      type: Function,
      default: (val) => console.log('val: ', val)
    }
  },

  created () {
  },

  methods: {
  }
})
</script>

<style lang="less" scoped>
.xm-button-bottom {
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: content-box;
  height: 50px;
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
  padding-left: 16px;
  padding-right: 16px;
  background-color: white;
  >div:not(:first-child) {
    margin-left: 10px;
  }
  &-button {
    flex: 1;
  }
  &-box {
    height: 40px;
    width: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #FFFFFF;
    border: 1px solid #E9ECF0;
    border-radius: 5px;
    box-sizing: border-box;
    padding: 10px;
  }
  &--unfit {
    padding-bottom: 0;
  }
}
</style>
