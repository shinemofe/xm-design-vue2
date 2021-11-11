<template>
  <layout title="VanRate">
    <div class="p15">
      <p class="c-999">基础用法</p>
      <van-rate v-model="value" />
    </div>
    <div class="p15">
      <p class="c-999">半星</p>
      <van-rate v-model="value2" allow-half />
    </div>
    <div class="p15">
      <p class="c-999">自定义样式</p>
      <van-rate
        v-model="value"
        :size="25"
        color="#ffd21e"
        void-icon="star"
        void-color="#eee"
      />
    </div>
  </layout>
</template>

<script>
import Layout from '../Layout'

export default {
  name: 'demo-van-rate',

  components: {
    Layout
  },

  data () {
    return {
      value: 3,
      value2: 3.5
    }
  },

  created () {
  }
}
</script>
