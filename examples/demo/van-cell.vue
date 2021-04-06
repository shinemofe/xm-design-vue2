<template>
  <layout title="Cell">
    <p class="c-999 m10">示例</p>
    <div>
      <van-cell title="单元格" value="内容" />
      <van-cell title="单元格" value="内容" is-link />
      <van-cell title="单元格" value="内容" label="描述信息" />
    </div>
  </layout>
</template>

<script>
import Layout from '../Layout'

export default {
  components: {
    Layout
  },

  data () {
    return {
    }
  }
}
</script>

<style lang="less">
</style>
