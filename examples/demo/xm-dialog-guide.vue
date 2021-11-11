<template>
  <layout title="XmDialogGuide">
    <p class="c-999 m10">示例</p>
    <div>
      <van-cell title="组件调用" is-link @click="show = true" />
    </div>
    <xm-dialog-guide
      v-model="show"
      title="标题"
      description="描述"
      button-text="查看详情1"
      :img="require('../assets/dialog-yindao.png')"
      @click="handleClick"
    />
  </layout>
</template>

<script>
import Layout from '../Layout'

export default {
  name: 'demo-xm-dialog-guide',

  components: {
    Layout
  },

  data () {
    return {
      show: false
    }
  },

  methods: {
    handleClick () {
      this.$toast('查看详情')
    }
  }
}
</script>
