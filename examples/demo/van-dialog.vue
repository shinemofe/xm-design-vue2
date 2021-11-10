<template>
  <layout title="Dialog">
    <p class="c-999 m10">示例</p>
    <div>
      <van-cell title="组件调用" is-link @click="handleShow" />
    </div>

    <van-dialog
      width="270px"
      v-model="show"
      :show-confirm-button="false"
      :show-cancel-button="false"
    >
      <template #title>
        <p>主标题</p>
        <p class="f14 c-666">描述描述描述描述描述描述描述</p>
        <img src="../assets/dialog-yindao.png" alt="">
      </template>
      <div class="plr30 ptb15">
        <van-button type="primary" block @click="show = false">查看详情</van-button>
      </div>
    </van-dialog>
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
