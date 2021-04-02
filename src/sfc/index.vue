<template>
  <div class="sfc">
    hello, {{ msg }}
    <video src=""></video>
  </div>
</template>

<script>
import { componentWrap } from '../utils/util'

export default componentWrap('sfc', {
  data () {
    return {
      msg: 'world'
    }
  }
})
</script>

<style lang="less" scoped>
.sfc {
  color: @main;
}
</style>
