<template>
  <div class="xm-dialog-activity">
    <van-dialog
      v-model="show"
      :show-confirm-button="false"
      :show-cancel-button="false"
    >
      <div style="padding: 0 0 20px 20px;float: right" @click="$emit('input', false)">
        <img style="width: 18px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADeElEQVRYR82XT6iVVRTFf2tSEFhEhZNSa1A0LBSNMAqdFFlUpCFkKqQU2Zv0gnqKSlmQTbIoKqh0EKkpmFITQ0nCoqhh1KCsnEQvoiJBJ0v2Y3+vc7/7/Xnv9aAOXC73nr33WXuf/WcdMcVlew6wHFgFXAtcDlyW6r8B48B3wF7gqKS/pmJafUK2rwc2AQ8Al/bJ5/7vwHvAy5K+6dLpBGD72Tz84pqRc8Av+Ymtufm5oCb3Z4LY3AaiFYDtT4ClheJXwGHgI0mfNxm0vRi4HVgB3FjInJB0S5NOIwDbv+Ydh85p4CVgl6TwvHfZjkg8DowAV6bCuKQr6spDAGz/ACxIwRPAw5K+7T21QcD2dcCbRSRPSbq6FB0AYHsfcH8KbJe0bSYH13VsbwUqW/slraxkJgFkwo3lxh5JD83G4ZUN27uBNfl7h6SJxJwAkKX2GRDZHnd+s6SfZhnAPODTzImojiVRohWAV4FH8sBRSS/O5uFFFJ4Adubv1yQ9KtuXAD8C8R2ldlNbtmeOxPUcaSnDOyPM5R2XclkdJ7NE/wDmB4AHgT0puFPSky3GXwc25N46Se/UjK8F3s7/3pC0scXOC8Bo7q0JAO8D9+Uft0k63uFdNKJqbZL0SubQY9Hxir0VHVG6FTiWsgcCQIT9BuCcpAu77t526WWIPp3yzxV6Q9Gp27R9Fohm9XUAiGy/CvhZUmRq57Jd97aUn4xKjyP/nGn7b+Ai4EtJi/oAZMifAkqvJ6Ih6fkp6n8BLATORARmAiBCv6N22JikOqhGPLYHAEz3CmLIxHBqWiOSdvVFYeDap5mE64C3igOq1l1GY72kqhzbIjCQhMFcgmbFivbYNutjSMWwqtakt7brUVkpaX/T6ckZou3H2hs5cA9wMP/YJml7i2I5KYe8tF1GZ2DilfZqk/HeABBkM1px8L2+VhzdMAhnm3cRpeUdXTBqv2rFwRvn//fDKOs6mG85jsOLGbGgtgpIdnS0cRwniGDAVVa3ksi+EusAUJLcQUJSKdWYcGtCTheE7aBjQctiDTjXREpLRhxjestM2ZHtmC3PFFRsiBm30fKSGc8WLR9ixBGOrodJWfchGyX6MfBhB2eIWX8HsKz2MGntC//fp1mRmNXjdHXyxqnkYPC9d//147TWQoO03gXcDVzT8jz/HjgEfCApQPSu8wYcnXTp38wIAAAAAElFTkSuQmCC" alt=""/>
      </div>
      <div class="xm-dialog-activity__img" @click="$emit('input', false),$emit('click')">
        <img :src="img" alt="" style="width: 100%"/>
      </div>
    </van-dialog>
  </div>
</template>

<script>
import { componentWrap } from '../utils/util'
import VanDialog from '../van-dialog'

export default componentWrap('xm-dialog-activity', {
  props: {
    show: Boolean,
    img: String
  },

  model: {
    prop: 'show'
  },

  components: {
    VanDialog
  },

  data () {
    return {
    }
  }
})
</script>

<style lang="less" scoped>
.xm-dialog-activity {
  .van-dialog {
    background-color: transparent;
    border-radius: 0;
    &__content {
      background-color: transparent;
    }
  }
  &__img {
    min-height: 100px;
  }
}
</style>
