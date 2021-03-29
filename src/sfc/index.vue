<template>
  <div class="sfc">
    hello, {{ msg }}
    <video src=""></video>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'world'
    }
  }
}
</script>

<style lang="less" scoped>
.sfc {
  color: @main;
}
</style>
