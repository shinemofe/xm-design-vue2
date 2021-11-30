<template>
  <layout title="VanNoticeBar" class="plr10 notice-bar-demo">
    <p class="c-999 m10">基础用法</p>
    <van-notice-bar text="这是一段很长很长很长很长很长很长很长很长的文字。"/>

    <p class="c-999 m10">滚动播放</p>

    <template>
      <!-- 文字较短时，通过设置 scrollable 属性开启滚动播放 -->
      <van-notice-bar scrollable text="这是一段很长很长很长很长很长很长很长很长的文字。" />

      <!-- 文字较长时，通过禁用 scrollable 属性关闭滚动播放 -->
      <van-notice-bar
        :scrollable="false"
        text="这是一段很长很长很长很长很长很长很长很长的文字。"
      />
    </template>

    <p class="c-999 m10">通知栏模式</p>
    <template>
      <!-- closeable 模式，在右侧显示关闭按钮 -->
      <van-notice-bar mode="closeable">技术是开发它的人的共同灵魂。</van-notice-bar>

      <!-- link 模式，在右侧显示链接箭头 -->
      <van-notice-bar mode="link">技术是开发它的人的共同灵魂。</van-notice-bar>
    </template>

    <p class="c-999 m10">自定义样式</p>
    <template>
      <van-notice-bar color="#ffa400" background="#fff2df" left-icon="info" mode="link">
        这是一段很长很长很长很长很长很长很长很长的文字。
      </van-notice-bar>
      <van-notice-bar color="#db5d1d" background="#fde7e7" left-icon="info" mode="link">
        这是一段很长很长很长很长很长很长很长很长的文字。
      </van-notice-bar>
    </template>
  </layout>
</template>

<script>
import Layout from '../Layout'

export default {
  name: 'demo-van-notice-bar',

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
.notice-bar-demo {
  .van-notice-bar + .van-notice-bar {
    margin-top: 10px;
  }

  .van-notice-bar {
    border-radius: 5px;
  }
}
</style>
