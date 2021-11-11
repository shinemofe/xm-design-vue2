<template>
  <layout title="VanSlider">
    <div class="p15">
      <p class="c-999">基础用法</p>
      <van-slider v-model="value" />
    </div>
  </layout>
</template>

<script>
import Layout from '../Layout'

export default {
  name: 'demo-van-slider',

  components: {
    Layout
  },

  data () {
    return {
      value: 30
    }
  },

  created () {
  }
}
</script>
