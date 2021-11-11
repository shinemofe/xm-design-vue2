<template>
  <layout title="Button" class="plr20">
    <p class="c-999 mb10">主按钮</p>
    <van-button type="primary" block>确定</van-button>
    <van-button class="mt10" block>取消</van-button>

    <p class="c-999 mtb10">小按钮</p>
    <div class="demo__button">
      <van-button size="small" type="primary">操作</van-button>
      <van-button size="small">操作</van-button>
    </div>

    <p class="c-999 mtb10">普通按钮</p>
    <div class="demo__button">
      <van-button type="primary" @click="toast">普通按钮</van-button>
    </div>

    <p class="c-999 mtb10">加载中</p>
    <div class="demo__button">
      <van-button type="primary" @click="toast" loading>主要</van-button>
    </div>

    <p class="c-999 mtb10">禁用</p>
    <div class="demo__button">
      <van-button type="primary" @click="toast" disabled>主要</van-button>
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
@import "../../src/van-button/index";
.demo__button {
  button {
    margin-right: 10px;
    margin-bottom: 10px;
  }
}
</style>
