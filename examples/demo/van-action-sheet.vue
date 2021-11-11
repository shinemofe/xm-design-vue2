<template>
  <layout title="VanActionSheet">
    <van-cell-group title="基础用法">
      <van-cell is-link title="请选择" @click="show = true" />
      <van-action-sheet v-model="show" :actions="actions" @select="onSelect" />
    </van-cell-group>
    <van-cell-group title="其他信息">
      <van-cell is-link title="请选择" @click="show2 = true" />
      <van-action-sheet
        v-model="show2"
        :actions="actions"
        cancel-text="取消"
        description="这是一段描述信息"
        close-on-click-action
        @cancel="onCancel"
      />
    </van-cell-group>
  </layout>
</template>

<script>
import Layout from '../Layout'

export default {
  name: 'demo-van-action-sheet',

  components: {
    Layout
  },

  data () {
    return {
      actions: [{ name: '选项一' }, { name: '选项二' }, { name: '选项三', subname: '描述信息' }],
      show: false,
      show2: false
    }
  },

  created () {
  },

  methods: {
    onSelect (item) {
      this.show = false
      this.show2 = false
      this.$toast(item.name)
    },
    onCancel () {
    }
  }
}
</script>
