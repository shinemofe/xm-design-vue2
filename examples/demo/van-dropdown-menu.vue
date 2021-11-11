<template>
  <layout title="VanDropdownMenu">
      <van-dropdown-menu>
        <van-dropdown-item v-model="value1" :options="option1" />
        <van-dropdown-item v-model="value2" :options="option2" />
        <van-dropdown-item v-model="value2" :options="option2" />
        <van-dropdown-item v-model="value3" :options="option3" />
      </van-dropdown-menu>
  </layout>
</template>

<script>
import Layout from '../Layout'
import '../../src/van-dropdown-menu/index.less'

export default {
  name: 'demo-van-dropdown-menu',

  components: {
    Layout
  },

  data () {
    return {
      option1: [
        { text: '商品名称1', value: 0 },
        { text: '商品名称2', value: 1 },
        { text: '商品名称3', value: 2 }
      ],
      option2: [
        { text: '商品AA', value: 'a' },
        { text: '商品AB', value: 'b' },
        { text: '商品AC', value: 'c' }
      ],
      option3: [
        { text: 'x1', value: 0 },
        { text: 'x2', value: 1 },
        { text: 'x3', value: 2 }
      ],
      value1: 0,
      value2: 'a',
      value3: 0
    }
  },

  created () {
  }
}
</script>
