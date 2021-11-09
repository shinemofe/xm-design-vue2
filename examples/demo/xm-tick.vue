<template>
  <layout title="XmTick">
    <van-cell-group title="单选">
      <xm-tick v-model="select" :list="list" />
    </van-cell-group>
    <van-cell-group title="多选">
      <xm-tick v-model="select2" :list="list" multiple />
    </van-cell-group>
  </layout>
</template>

<script>
import Layout from '../Layout'

export default {
  name: 'demo-xm-tick',

  components: {
    Layout
  },

  data () {
    return {
      select: '选项一',
      select2: ['选项一', '选项四'],
      list: ['选项一', '选项二', '选项三', '选项四']
    }
  },

  created () {
  }
}
</script>
