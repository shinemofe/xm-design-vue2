<template>
  <layout title="VanBadge">
    <div class="p15">
      <p class="c-999">单独展示</p>
      <van-badge :content="20" />
      <van-badge :content="200" max="99" />
      <van-badge content="HOT" />
    </div>
    <p class="c-999 plr15 ptb10">文本提示</p>
    <van-cell is-link>
      <span>请选择</span>
      <template #title>
        <span class="custom-title">单元格</span>
        <van-badge class="ml5" dot />
      </template>
    </van-cell>
    <van-cell is-link>
      <span>请选择</span>
      <van-badge class="ml5" dot />
      <template #title>
        <span class="custom-title">单元格</span>
      </template>
    </van-cell>
    <div class="p15">
      <p class="c-999">基础用法</p>
      <van-badge class="mtb20" :content="20">
        <div class="demo-box" />
      </van-badge>
      <van-badge class="m20" :content="200" max="99">
        <div class="demo-box" />
      </van-badge>
      <van-badge class="mtb20" dot>
        <div class="demo-box" />
      </van-badge>
    </div>
    <div class="p15">
      <p class="c-999 mb10">用作删除</p>
      <van-badge>
        <div class="demo-box" />
        <template #content>
          <van-icon name="cross" class="badge-icon" />
        </template>
      </van-badge>
    </div>
  </layout>
</template>

<script>
import Layout from '../Layout'

export default {
  name: 'demo-van-badge',

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
.demo-box {
  width: 60px;
  height: 60px;
  background-color: #fff;
}
.badge-icon {
  display: block;
  font-size: 10px;
  line-height: 16px;
}
</style>
