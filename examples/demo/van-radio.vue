<template>
  <layout title="VanRadio">
    <div class="p15">
      <p class="c-666 mb10">基础用法</p>
      <van-radio-group v-model="radio">
        <van-radio name="1">单选框 1</van-radio>
        <van-radio name="2" disabled>单选框 2</van-radio>
        <van-radio name="3">单选框 超长超长超长超长超长超长超长超长超长超长超长</van-radio>
      </van-radio-group>
    </div>

    <div class="p15">
      <p class="c-666 mb10">禁用</p>
      <van-radio-group v-model="radio" disabled>
        <van-radio name="1">单选框 1</van-radio>
        <van-radio name="2">单选框 2</van-radio>
      </van-radio-group>
    </div>

    <div class="plr15 mt20">
      <p class="c-666 mb10">与 Cell 组件一起使用</p>
    </div>
    <van-radio-group v-model="radio">
      <van-cell-group>
        <van-cell title="单选框 1" clickable @click="radio = '1'">
          <template #right-icon>
            <van-radio name="1" />
          </template>
        </van-cell>
        <van-cell title="单选框 2" clickable @click="radio = '2'">
          <template #right-icon>
            <van-radio name="2" />
          </template>
        </van-cell>
      </van-cell-group>
    </van-radio-group>
  </layout>
</template>

<script>
import Layout from '../Layout'

export default {
  name: 'demo-van-radio',

  components: {
    Layout
  },

  data () {
    return {
      radio: '1'
    }
  },

  created () {
  }
}
</script>
