<template>
  <layout title="VanSwitch">
    <p class="c-666 plr10 ptb5">基础用法</p>
    <van-cell center title="标题">
      <template #right-icon>
        <van-switch v-model="checked" size="24" />
      </template>
    </van-cell>

    <p class="c-666 plr10 ptb5">禁用</p>
    <van-cell center title="标题">
      <template #right-icon>
        <van-switch disabled v-model="checked" size="24" />
      </template>
    </van-cell>
  </layout>
</template>

<script>
import Layout from '../Layout'

export default {
  name: 'demo-van-switch',

  components: {
    Layout
  },

  data () {
    return {
      checked: false
    }
  },

  created () {
  }
}
</script>
