<template>
  <div class="xm-tick">
    <cell
      v-for="(item, i) in list"
      :key="i"
      :title="item"
      :clickable="!disabled.includes(i)"
      center
      :title-class="{
        'xm-tick__title': true,
        disabled: disabled.includes(i)
      }"
      @click="handleSelect(item, i)"
    >
      <template v-if="local.some(x => x === item)" #right-icon>
        <img
          v-if="disabled.includes(i)"
          style="width: 24px"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAsZJREFUaEPtmD1vE0EQht/ZMylAQjT5BwjZoYhPjisK7IISCoRTIgokAsL/g5YgFD5ERZeKX8CloLNjH+gUI6WhDxFUCLDvBq3xWuev89m36w/prnKxe573eWdnZ46w5g+tefxIBSzbwdSB1IGEBNIUSggw9nZmFnIxEQXhTWvhgAxeBR7+3RUUG8GSFqqAjz3vqmhbHdvOfVsbBxzHyZTL5U69efKQgWdg/BKWeFDYzn5UwlbWgcNDtnZ3ya+5radgfg6AAViCxPtCPntfiVtJAX3yja97TMEBAP+/ALIIfHfH3vqwsg6MIa9SnkmI6s529oCZiYikI6t1iCPIZ0DYK+Zzr1e2CsUhr9ZEViG5aHPziEqlkq9sMl1B45CXcVUqCIZjGjjE4dySQQ/bZULIvORVLH0BKvjGZ++O71u3MmS9s+1r7jjbdAlJQn5AgCJdc09tQvsTMy4COAfoXtHOHZkQkZT8WAGNL6c3fb/tAJANkwXgO0AVKULR0kFfB/mJKVRvnrxk4AmAvwA2dDuhi/xEAY7DmUtXWvsEPAbQBnBBlxM6yY8I6FUdeajlLRccu61XAfMjXU7oJj9WQLh0MrNVc1svdDhhgvxEAbqdMEU+UoAuJ0ySnyogqROmyccSMK8TiyAfW8AsTsjA5Xo5BoYmqZF+XufNHnsiU+3GtOoko62PTlL9fn5SVznvDR9bQAwnfgDitgBvBeA3vXaku01NUjrJz5RCYTpTnDgHcLnXR3VnWDVJ6SY/t4AIJ2TbIRtA+UhnA5PkEwmIqE4dAAIgYZp8YgHDTtTd1j4zVwH8EaBqwc69NZHzw4d9pkM8rlKoM+F53sbvTuYGw/9ZzF9vLmIcVbk6bwUb2Df0Abb/3UbLyyNektiB8LvlRXZ2VmL5SdB04FrOwKKCjPofrQ4sQ1AqYBnUw/+ZOpA6kJDA2qfQP9IT3k/bUpg9AAAAAElFTkSuQmCC" alt=""
        />
        <img
          v-else
          style="width: 24px"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAsdJREFUaEPtmD1vE0EQht+5M5bAMRJF/gFVqOiAK6ChhAJhSkSBRIxt/kKSjpbYJnyIii40/AKwBLLTQUNPQ0NAQEwsEewdNNZtONt39vluzx/SXeVi927e553dmTFhyR9a8viRCpi3g6kDqQMxCaQpFBNg+O0bbPUXb5HybloOByR4Hbj3N7AEdcAN+GL911m2st294snPS+PAlQ3ONLao69QO7iqmhwR0kMGdZjH/Bq6whU2hwi7br25Rz6m3y0rhEQAGYIPoZau8cluLW0gBx+Sr7XUF7ADoiQAism2mG+8qudcL64APeZ3yTIRKs5zfATOBSBxZrEM8hnyGidZbpdxTTV6rWpgUCkNerxl7C8mi/U+gxiZ62qbw1SbayjDk+8EXoIZjGnTAk1v9UIaKRrTwxu+KSn40hdzgnerBdQX7Kln8olla+ehnmykhccgPCtDVbvvwPIjfA3wKwHcGbu5V8o0kRMQl7y/gcfsyengLQBommxjfFKEgIjQtE/RNkA9MoQvVdp2A+wCOAGRNO2GKfKAAoXO02tlmVkUAfwGcMOWESfL+dUAO8iZIWlen1n6iGPdMOWGafHAhcw+0fPDL107VhBNJkB9fiQ06kRT5ya2EASeSJD9ZgKyI4UTS5MMJ8LQT05yJWZAPL2AKJyRwWd4fA/9PUiP9vMnKHr6dDnkmJFpndJI67ueDusqoFT68gMlO/GDwNcvCGit65rYj/V16kjJJfroU8uIZ44S0HQBO94dvd4bVk5Rp8tEFBDshbYcELo84q5IkH09A8O3UBWARkZU0+fgChpy4VDuUBrAC4A9ZVqVZyj1PIueHD/t0h9jvqnDPxNouZ8/s/3ZUz/rZepD7MItxVOdq1BtscJ93fh6erc18wfct8R3wvFYK2eo5sPwlmGDMA682KmBWQXu/kwqYB/XUgXlTTx1IHTBI4B88P+RP5kOaQwAAAABJRU5ErkJggg==" alt=""
        />
      </template>
    </cell>
  </div>
</template>

<script>
import { componentWrap } from '../utils/util'
import Cell from '../van-cell'

export default componentWrap('xm-tick', {
  components: {
    Cell
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
    disabled: {
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
    },

    local (val) {
      console.log('local change', JSON.parse(JSON.stringify(val)))
    },

    list (val) {
      console.log('list change', JSON.parse(JSON.stringify(val)))
      // this.local = []
    }
  },

  methods: {
    handleSelect (item, i) {
      if (this.disabled.includes(i)) {
        return
      }

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
  &__title {
    font-size: 14px;
    &.disabled {
      color: #959BA3;
    }
  }
  &__active {
    color: @main;
  }
}
</style>
