<template>
  <layout title="SFC">
    <m-sfc />
  </layout>
</template>

<script>
import Layout from '../Layout'
import MSfc from '../../src/sfc/index.vue'

export default {
  name: 'demo-sfc',

  components: {
    Layout,
    MSfc
  },

  data () {
    return {}
  }
}
</script>
