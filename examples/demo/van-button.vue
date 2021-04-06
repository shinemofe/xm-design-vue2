<template>
  <layout title="Button">
    <p class="c-999 mb10">默认按钮</p>
    <div class="demo__button">
      <van-button>默认</van-button>
      <van-button type="primary" @click="toast" loading>主要</van-button>
      <van-button icon="plus" type="warning" @click="toast">提示</van-button>
      <van-button type="danger" @click="toast">警示</van-button>
    </div>
    <p class="c-999 mtb10">小按钮</p>
    <div class="demo__button">
      <van-button size="small">定制按钮</van-button>
      <van-button size="small" type="primary">定制按钮</van-button>
    </div>
    <p class="c-999 mtb10">大按钮</p>
    <div class="demo__button">
      <van-button type="primary" block>块级元素</van-button>
      <van-button size="large" type="primary" block>块级元素</van-button>
    </div>
  </layout>
</template>

<script>
import Layout from '../Layout'
// import VanButton from 'vant/es/button'
// import VanButton from '@@/van-button'
// import '../../es/van-button/style'

// import VanToast from 'vant/es/toast'
// import 'vant/es/toast/index.less'

export default {
  components: {
    Layout
    // VanButton
  },

  methods: {
    toast () {
      // VanToast('666')
    }
  }
}
</script>

<style lang="less">
.demo__button {
  button {
    margin-right: 10px;
    margin-bottom: 10px;
  }
}
</style>
