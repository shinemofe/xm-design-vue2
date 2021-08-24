<template>
  <layout title="XmSelect">
    <xm-select
      :list="['北京大学', '武汉大学', '清华大学']"
      :value="2"
    />
  </layout>
</template>

<script>
import Layout from '../Layout'

export default {
  name: 'demo-xm-select',

  components: {
    Layout
  },

  data () {
    return {}
  },

  created () {
  }
}
</script>

<style lang="less">
@import "../../src/xm-select/index";
</style>
