<template>
  <layout title="VanTag">
    <div>
      <div class="van-cell">
        <div class="van-cell__title"><span>default 类型（默认）</span></div>
        <div class="van-cell__value"><van-tag>标签</van-tag></div>
      </div>
      <div class="van-cell">
        <div class="van-cell__title"><span>primary 类型</span></div>
        <div class="van-cell__value"><van-tag type="primary">标签</van-tag></div>
      </div>
      <div class="van-cell">
        <div class="van-cell__title"><span>success 类型</span></div>
        <div class="van-cell__value"><van-tag type="success">标签</van-tag></div>
      </div>
      <div class="van-cell">
        <div class="van-cell__title"><span>danger 类型</span></div>
        <div class="van-cell__value"><van-tag type="danger">标签</van-tag></div>
      </div>
      <div class="van-cell">
        <div class="van-cell__title"><span>warning 类型</span></div>
        <div class="van-cell__value"><van-tag type="warning">标签</van-tag></div>
      </div>
    </div>
  </layout>
</template>

<script>
import Layout from '../Layout'
import '../../src/van-tag/index.less'

export default {
  name: 'demo-van-tag',

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

<style lang="less" scoped>
.pt20>div {
  margin-bottom: 10px;
}
</style>
