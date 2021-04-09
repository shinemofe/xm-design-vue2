<template>
  <layout title="VanPopup">
    <p class="p10 c-999">基础用法</p>
    <van-cell title="默认弹出层" is-link @click="round=false,closeable=false,position = undefined,show = true" />
    <p class="p10 c-999">自定义用法</p>
    <van-cell title="底部弹出层" is-link @click="round=false,closeable=false,position = 'bottom',show = true" />
    <van-cell title="上面弹出层" is-link @click="round=false,closeable=false,position = 'top',show = true" />
    <van-cell title="关闭图标" is-link @click="round=false,closeable=true,position = 'bottom',show = true" />
    <van-cell title="圆角" is-link @click="round=true,closeable=true,position = 'bottom',show = true" />

    <van-popup
      v-model="show"
      style="min-width:200px;height: 200px"
      :position="position"
      closeable
      :round="round"
    >
      内容
    </van-popup>
  </layout>
</template>

<script>
import Layout from '../Layout'

export default {
  name: 'demo-van-popup',

  components: {
    Layout
  },

  data () {
    return {
      show: false,
      position: '',
      closeable: false,
      round: false
    }
  },

  created () {
  }
}
</script>
