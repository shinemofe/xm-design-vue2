<template>
  <layout title="XmTick">
    <van-cell-group title="单选">
      <xm-tick v-model="select" :list="list" @input="handle" />
    </van-cell-group>
    <p class="plr10 c-999">数据：{{ select }}</p>
    <van-cell-group title="多选">
      <xm-tick v-model="select2" :list="list" multiple />
    </van-cell-group>
    <p class="plr10 c-999">数据：{{ select2 }}</p>
    <van-cell-group title="禁用">
      <xm-tick v-model="select2" :list="list" :disabled="[1]" multiple />
    </van-cell-group>
    <van-cell-group title="结合 Popup 使用">
      <van-cell title="请选择" is-link @click="show = true" />
    </van-cell-group>
    <p class="plr10 c-999">数据：{{ select2 }}</p>
    <van-popup v-model="show" position="bottom" round>
      <xm-tick v-model="select2" :list="list" multiple />
    </van-popup>
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
      show: false,
      select: '选项一',
      select2: ['选项一', '选项四'],
      list: ['选项一', '选项二', '选项三', '选项四']
    }
  },

  created () {
  },

  methods: {
    handle (val) {
    }
  }
}
</script>
