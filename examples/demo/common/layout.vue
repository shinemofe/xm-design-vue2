<template>
  <layout title="Layout 布局" class="p20">
    <p class="c-999 mb10">基础用法</p>
    <van-row>
      <van-col span="8" class="bg-999 c-fff">span: 8</van-col>
      <van-col span="8" class="bg-ccc c-fff">span: 8</van-col>
      <van-col span="8" class="bg-999 c-fff">span: 8</van-col>
    </van-row>
    <p class="c-999 mtb10">列元素间距</p>
    <van-row :gutter="20">
      <van-col span="8" class="bg-999 c-fff">span: 8</van-col>
      <van-col span="8" class="bg-ccc c-fff">span: 8</van-col>
      <van-col span="8" class="bg-999 c-fff">span: 8</van-col>
    </van-row>
  </layout>
</template>

<script>
import Layout from '../../Layout'

export default {
  name: 'demo-van-col',

  components: {
    Layout
  },

  data () {
    return {}
  },

  created () {
  }
}
</script>

<style lang="less">
.demo-home {
  .van-col {
    background-clip: content-box;
  }
}
</style>
