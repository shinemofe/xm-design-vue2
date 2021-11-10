<template>
  <layout title="XmDialogActivity">
    <p class="c-999 m10">示例</p>
    <div>
      <van-cell title="组件调用" is-link @click="show = true" />
    </div>
    <xm-dialog-activity
      v-model="show"
      :img="require('../assets/dialog-activity.png')"
      @click="handleClick"
    />
  </layout>
</template>

<script>
import Layout from '../Layout'

export default {
  name: 'demo-xm-dialog-activity',

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
      this.$toast('点击图片')
    }
  }
}
</script>
