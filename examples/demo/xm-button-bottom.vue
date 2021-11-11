<template>
  <layout title="XmButtonBottom">
    <xm-button-bottom
      :onSelect="onSelect"
      :actions="actions"
      submitText="确定"
      @submit="onSubmit"
      @cancel="onCancel"
      cancel
      :select="false"
    />
  </layout>
</template>

<script>
import Layout from '../Layout'

export default {
  name: 'demo-xm-button-bottom',

  components: {
    Layout
  },

  data () {
    return {
      actions: [{ text: 'aaa' }]
    }
  },
  methods: {
    onSelect (val) {
      console.log('val: ', val)
    },
    onCancel () {
      console.log('取消了')
    },
    onSubmit () {
      console.log('提交了')
    }
  },
  created () {}
}
</script>
