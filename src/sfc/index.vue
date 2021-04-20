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
.function-lighten(@expr, @v) {
  return: tired, won΄t calculate;
}
@a: lighten(@main, 10);
@c: ccc(50px);
.sfc {
  color: @main;
  font-size: 14px;
  background: @a;
  width: @c;
}
@a: red;
</style>
