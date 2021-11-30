<template>
  <van-dialog
    width="270px"
    v-model="show"
    :show-confirm-button="false"
    :show-cancel-button="false"
  >
    <div style="padding: 20px 20px 15px 20px;text-align: center;position: relative">
      <span style="font-weight: 400">{{ title }}</span>
      <div style="color: #5C626B;font-size: 13px;margin-top: 10px">{{ description }}</div>
      <div style="padding: 0 10px">
        <img :src="img" alt="" style="width: 100%"/>
      </div>
      <div style="position:absolute;top: 8px;right: 8px;padding: 0 0 20px 20px" @click="$emit('input', false)">
        <img style="width: 16px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAcRJREFUSEvNlktLw0AQx2eSLa03LyLoTRAfIJQgqKlKe1HwIkXIhwxI8SLopUVttCClIPhA8KYgXrxZaZKRbV1NY9PdeNg2152d//zmlUXQ/KFmPRgoWK1WWbFYDBEx/E9ARGTUajWjVCr58fuJhETUPUNESiMqu/cjyA25c8/zJlhussDAuLWsxRcerSqpsG0272d8CJf99nvdtu0P4bsLIKLnaeQpuG7d7RDRCQCcBSznrK/MvboumY6DwTBSYXN18zRt+m0XALYRcXc1v3QqfPcJ/kb3OOVD5xARtgxAz0TDyecXnoeRirNW62E2oNANgWwiOGeQObCs+bfo3b4aCnSekhDJJaACAF4GLFtOIu0n+6wA0AYC1g1C57sk3VKJ7PxpmkEOkkgHkckCHNilKo54xLyuvZr1yFRKkDgWMlIuGK2ZjCwxpdFOTCBtdDLBHrfLdMxjAFpTIVMS5EYx0iMugAAX/IwANgGwEbDsvur4KO3S6MiE6Fd63cuHmHcjK8dbf9i8jp+g1pRqbRqtY6F18GVk0UWsElj8LzO65a399zSKH7DeJ0Z8HckeQ0nrS3ZvfJ6JaZ6GaWyVlncahzLbL+UFgjsJZh6RAAAAAElFTkSuQmCC" alt=""/>
      </div>
    </div>
    <div style="padding: 0 15px 15px 15px">
      <van-button type="primary" block @click="$emit('input', false),$emit('click')">{{ buttonText }}</van-button>
    </div>
  </van-dialog>
</template>

<script>
import { componentWrap } from '../utils/util'
import VanDialog from '../van-dialog'
import VanButton from '../van-button'

export default componentWrap('xm-dialog-guide', {
  components: {
    VanDialog,
    VanButton
  },

  props: {
    show: Boolean,
    img: String,
    title: {
      type: String,
      default: '主标题'
    },
    description: {
      type: String,
      default: '描述描述描述描述描述描述描述描述描述描述描述描述描述'
    },
    buttonText: {
      type: String,
      default: '查看详情'
    }
  },

  model: {
    prop: 'show'
  },

  data () {
    return {
    }
  }
})
</script>

<style lang="less" scoped>
.xm-dialog-guide {
  color: @main;
}
</style>
