<template>
  <div class="xm-tick">
    <cell
      v-for="(item, i) in list"
      :key="i"
      :title="item"
      is-link
      center
      @click="handleSelect(item)"
    >
      <template #right-icon>
        <icon v-if="local.some(x => x === item)" name="success" class="xm-tick__active" />
      </template>
    </cell>
  </div>
</template>

<script>
import { componentWrap } from '../utils/util'
import Cell from '../van-cell'
import Icon from '../van-icon'

export default componentWrap('xm-tick', {
  // name: 'xm-tick',
  components: {
    Cell,
    Icon
  },

  data () {
    return {
      local: []
    }
  },

  props: {
    value: {
      type: [Array, String],
      default: ''
    },
    list: {
      type: Array,
      default: () => ([])
    },
    multiple: Boolean
  },

  watch: {
    value: {
      handler (val) {
        if (val) {
          this.local = this.multiple ? val.slice() : [val]
        }
      },
      immediate: true
    }
  },

  methods: {
    handleSelect (item) {
      if (!this.multiple) {
        this.local = [item]
      } else {
        const index = this.local.findIndex(x => x === item)
        if (index > -1) {
          this.local.splice(index, 1)
        } else {
          this.local.push(item)
        }
      }
      this.$emit('input', this.multiple ? this.local.slice() : this.local[0])
    }
  }
})
</script>

<style lang="less" scoped>
.xm-tick {
  &__active {
    color: @main;
  }
}
</style>
