<template>
  <layout title="VanTabbar">
    <p class="m10 c-999">基础用法</p>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o">标签</van-tabbar-item>
      <van-tabbar-item icon="search">标签</van-tabbar-item>
      <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
      <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
    </van-tabbar>
  </layout>
</template>

<script>
import Layout from '../Layout'

export default {
  name: 'demo-van-tabbar',

  components: {
    Layout
  },

  data () {
    return {
      active: 0
    }
  },

  created () {
  }
}
</script>
