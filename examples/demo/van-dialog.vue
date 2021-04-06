<template>
  <layout title="Dialog">
    <p class="c-999 m10">示例</p>
    <div>
      <van-cell title="组件调用" is-link @click="handleShow" />
    </div>
    <van-dialog v-model="show" message="对话框消息" />
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
      show: false
    }
  },

  mounted () {
    // this.$dialog.alert({ message: '111' })
    // console.log(this.$dialog)
  },

  methods: {
    handleShow () {
      this.show = true
    }
  }
}
</script>

<style lang="less">
</style>
