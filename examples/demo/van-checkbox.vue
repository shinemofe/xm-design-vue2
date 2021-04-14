<template>
  <layout title="VanCheckbox">
    <div class="p10">
      <p class="c-999 mtb10">基础用法</p>
      <van-checkbox v-model="v1">复选框</van-checkbox>

      <p class="c-999 mtb10">复选框组 {{ v2 }}</p>
      <van-checkbox-group v-model="v2" ref="checkboxGroup">
        <van-checkbox name="a">复选框 a</van-checkbox>
        <van-checkbox name="b">复选框 b</van-checkbox>
        <van-checkbox name="c">复选框 c</van-checkbox>
      </van-checkbox-group>
      <van-button type="primary" @click="checkAll">全选</van-button>
      <van-button class="ml10" type="danger" @click="toggleAll">反选</van-button>

      <p class="c-999 mtb10">搭配单元格使用 {{ v3 }}</p>
      <van-checkbox-group v-model="v3">
        <van-cell clickable title="复选框 a" @click="toggle(0)">
          <template #right-icon>
            <van-checkbox name="a" ref="checkbox0" />
          </template>
        </van-cell>
        <van-cell clickable title="复选框 b" @click="toggle(1)">
          <template #right-icon>
            <van-checkbox name="b" ref="checkbox1" />
          </template>
        </van-cell>
      </van-checkbox-group>
    </div>
  </layout>
</template>

<script>
import Layout from '../Layout'

export default {
  name: 'demo-van-checkbox',

  components: {
    Layout
  },

  data () {
    return {
      v1: true,
      v2: [],
      v3: []
    }
  },

  created () {
  },

  methods: {
    checkAll() {
      this.$refs.checkboxGroup.toggleAll(true)
    },
    toggleAll() {
      this.$refs.checkboxGroup.toggleAll()
    },
    toggle (i) {
      this.$refs[`checkbox${i}`].toggle()
    }
  }
}
</script>
