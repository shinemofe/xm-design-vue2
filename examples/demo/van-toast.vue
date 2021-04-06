<template>
  <layout title="Toast">
    <p class="c-999 m10">基础示例</p>
    <div>
      <van-cell title="文字" is-link @click="handleShow('word')" />
      <van-cell title="加载中..." is-link @click="handleShow('loading')" />
      <van-cell title="成功" is-link @click="handleShow('success')" />
      <van-cell title="失败" is-link @click="handleShow('fail')" />
    </div>
  </layout>
</template>

<script>
import Layout from '../Layout'
import '@@/van-toast/index'

export default {
  components: {
    Layout
  },

  data () {
    return {
    }
  },

  created () {
  },

  methods: {
    handleShow (type) {
      switch (type) {
        case 'word':
          this.$toast('提示文案')
          break
        case 'loading':
          this.$toast.loading({
            loading: '提示文案',
            forbidClick: true
          })
          break
        case 'success':
          this.$toast.success('提示文案')
          break
        case 'fail':
          this.$toast.fail('提示文案')
          break
      }
    }
  }
}
</script>

<style lang="less">
</style>
