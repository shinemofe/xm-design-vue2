<template>
  <div class="xmi-doc__intro tc card">
    <img :src="info.logo" style="width:100px">
    <p class="mt20 mb10" style="font-size: 42px">{{ info.title }}</p>
    <p class="c-666 f14">{{ info.desc }}</p>
  </div>
</template>

<script>
import { info } from '../../doc.config'

export default {
  data () {
    return {
      info
    }
  }
}
</script>
