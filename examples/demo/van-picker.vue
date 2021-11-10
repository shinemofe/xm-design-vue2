<template>
  <layout title="VanPicker">
    <p class="c-999 m10">基础用法</p>
    <van-picker
      title="标题"
      show-toolbar
      :columns="columns"
      @confirm="onConfirm"
      @cancel="onCancel"
      @change="onChange"
    />
    <p class="c-999 m10">搭配Popup使用</p>
    <van-cell title="请选择" is-link @click="show = true" />
    <van-popup
      v-model="show"
      position="bottom"
      round
    >
      <van-picker
        title="标题"
        show-toolbar
        :columns="columns"
        @confirm="onConfirm"
        @cancel="onCancel"
        @change="onChange"
      />
    </van-popup>
  </layout>
</template>

<script>
import Layout from '../Layout'

export default {
  name: 'demo-van-picker',

  components: {
    Layout
  },

  data () {
    return {
      show: false,
      columns: ['杭州', '宁波', '温州', '绍兴', '湖州', '嘉兴', '金华', '衢州']
    }
  },

  created () {
  },

  methods: {
    onConfirm(value, index) {
      this.show = false
      this.$toast(`当前值：${value}, 当前索引：${index}`)
    },
    onChange(picker, value, index) {
      this.$toast(`当前值：${value}, 当前索引：${index}`)
    },
    onCancel() {
      this.show = false
      this.$toast('取消')
    },
  },
}
</script>
