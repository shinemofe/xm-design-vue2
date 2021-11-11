<template>
  <layout title="VanLoading">
    <div class="p15">
      <p class="c-999">普通用法</p>
      <van-loading />
      <van-loading size="24px">加载中...</van-loading>
      <van-loading size="24px" type="spinner">加载中...</van-loading>

      <p class="c-999 mt20">带背景</p>
      <van-loading background size="24px">加载中...</van-loading>
      <div class="mt10">
        <van-loading background size="24px" type="spinner">加载中...</van-loading>
      </div>
    </div>
  </layout>
</template>

<script>
import Layout from '../Layout'

export default {
  name: 'demo-van-loading',

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
