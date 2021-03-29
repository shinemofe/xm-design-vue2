<template>
  <van-tabs v-model="active" type="card" color="#666">
    <van-tab title="变量配置">
      <van-field label="颜色" value="1" />
      <van-field label="颜色" value="1" />
      <van-field label="颜色" value="1" />
      <van-field label="颜色" value="1" />
      <van-field label="颜色" value="1" />
      <van-field label="颜色" value="1" />
      <van-field label="颜色" value="1" />
      <van-field label="颜色" value="1" />
    </van-tab>
    <van-tab title="JS">内容 2</van-tab>
    <van-tab title="css">内容 3</van-tab>
    <van-tab title="Android">内容 4</van-tab>
    <van-tab title="iOS">内容 4</van-tab>
  </van-tabs>
</template>

<script>
export default {
  components: {
  },

  data () {
    return {
      active: 0
    }
  }
}
</script>
