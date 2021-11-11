<template>
  <layout title="Dialog">
    <p class="c-999 m10">基础用法</p>
    <div>
      <van-cell title="提示" is-link @click="handleShow(1)" />
      <van-cell title="确认" is-link @click="handleShow(2)" />
      <van-cell title="异步关闭" is-link @click="handleShow(3)" />
    </div>

    <p class="c-999 m10">组件调用</p>
    <div>
      <van-cell title="组件调用" is-link @click="handleShow(4)" />
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

  methods: {
    handleShow (type) {
      switch (type) {
        case 1: {
          this.$dialog.alert({ message: '我是提示语', title: '标题' })
        } break
        case 2: {
          this.$dialog.confirm({ message: '我是提示语', title: '标题' })
        } break
        case 3: {
          this.$dialog.confirm({
            message: '我是提示语',
            title: '标题',
            beforeClose(action, done) {
              if (action === 'confirm') {
                setTimeout(done, 1000)
              } else {
                done()
              }
            }
          })
        } break
        default:
          this.show = true
      }
    }
  }
}
</script>

<style lang="less">
</style>
