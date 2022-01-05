<template>
  <div class="xm-cascade">
    <div class="xm-cascade__bar">
      <div ref="tab" class="xm-cascade__selected van-hairline--bottom">
        <div
          v-for="(item, i) in selected"
          :key="item[prop.value]"
          class="xm-cascade__selected-item"
          @click="handleChangeTab(i)"
        >
          <span>{{ item[prop.label] }}</span>
        </div>
        <div ref="tabIndicator" class="xm-cascade__selected-item active">
          <span>请选择</span>
        </div>
      </div>
      <div v-if="multiple" class="xm-cascade__btn">
        <van-button type="primary" size="mini" @click="handleMultipleConfirm">确定</van-button>
      </div>
    </div>
    <div class="xm-cascade__list">
<!--      <div-->
<!--        v-for="item in currentList"-->
<!--        :key="item.id"-->
<!--        class="xm-cascade__item"-->
<!--        :class="{-->
<!--          active: isActiveItem(item)-->
<!--        }"-->
<!--        @click="handleSelect(item)"-->
<!--      >-->
<!--        <span>{{ item.name }}</span>-->
<!--      </div>-->
      <xm-tick
        ref="tick"
        :list="currentListMap"
        :multiple="multiple"
        @input="handleSelectValue"
      />
      <div v-if="loadingData" class="xm-cascade__empty">
        <p>加载中...</p>
      </div>
      <div v-else-if="!currentList.length" class="xm-cascade__empty">
        <p>没有下一级了哦～</p>
      </div>
    </div>
  </div>
</template>

<script>
import { componentWrap } from '../utils/util'
import VanButton from '../van-button'
import XmTick from '../xm-tick'

export default componentWrap('xm-cascade', {
  components: {
    VanButton,
    XmTick
  },

  data () {
    return {
      level: 0,
      currentSelected: null,
      currentList: [],
      selected: [],
      loadingData: false,
      cacheMap: {},
      multipleSelected: [],
      oldMultipleSelected: []
    }
  },

  props: {
    /**
     * 暂时未做回填
     */
    value: {
      type: [Array, Object],
      default: () => ([])
    },
    list: {
      type: Array,
      default: () => null
    },
    loadFun: {
      type: Function,
      default: () => Promise.resolve([])
    },
    multiple: {
      type: Boolean,
      default: false
    },
    needReset: {
      type: Boolean,
      default: true
    },
    prop: {
      type: Object,
      default: () => ({
        label: 'text',
        value: 'value'
      })
    }
  },

  computed: {
    currentListMap () {
      return this.currentList.map(x => x[this.prop.label])
    }
  },

  created () {
    this.init()
  },

  methods: {
    async init () {
      this.currentSelected = null
      this.level = 0
      this.currentList = this.list || await this.handleGetListByFn()
      this.selected = []
    },

    getItemByName (name) {
      return this.currentList.find(x => x[this.prop.label] === name)
    },

    // todo 选择多级
    handleSelectValue (values) {
      if (this.multiple) {
        const cb = () => {
          // console.log(values)
          this.oldMultipleSelected = this.multipleSelected.slice()
          this.multipleSelected = values.slice()
          // values.forEach(value => {
          //   const index = this.multipleSelected.findIndex(x => x === value)
          //   if (index === -1) {
          //     this.multipleSelected.push(value)
          //   } else {
          //     this.multipleSelected.splice(index, 1)
          //   }
          // })
          // console.log([...this.oldMultipleSelected, ...this.multipleSelected])
        }
        this.handleSelectNext(this.getItemByName(values.slice().pop()), cb)
      } else {
        this.handleSelectNext(this.getItemByName(values))
      }
    },

    async handleSelectNext (item, callback) {
      this.currentSelected = item
      if (this.selected.every(x => x[this.prop.value] !== item[this.prop.value])) {
        this.level = this.selected.push(this.currentSelected)
      }

      let list = item.children
      if (!this.list) {
        list = await this.handleGetListByFn()
      }
      const noNext = !list || !list.length
      if (noNext) {
        if (this.multiple) {
          // 重置头部选项
          this.selected.pop()
          this.level -= 1
          callback && callback()
        } else {
          this.currentList = []
          this.singleConfirm()
        }
      } else {
        this.currentList = list
        if (this.multiple) {
          this.$refs.tick.local = []
        }
      }

      this.scrollRight()
    },

    scrollRight () {
      this.$nextTick(() => {
        const width = Array.from(this.$refs.tab.childNodes).reduce((sum, child) => {
          sum += (child.offsetWidth + 20)
          return sum
        }, 0)
        this.$refs.tab.scrollLeft = width - this.$refs.tab.offsetWidth + 10
      })
    },

    singleConfirm () {
      const list = this.selected.slice().map(x => ({
        [this.prop.value]: x[this.prop.value],
        [this.prop.label]: x[this.prop.label]
      }))
      // const data = list.pop()
      // const item = { [this.prop.value]: data[this.prop.value], [this.prop.label]: data[this.prop.label] }
      this.$emit('input', list)
      this.$emit('change', list)
      if (this.needReset) {
        this.init()
      }
    },

    handleMultipleConfirm () {
      const data = this.multipleSelected.slice()
      this.$emit('input', data)
      this.$emit('change', data)
      if (this.needReset) {
        this.init()
      }
    },

    handleChangeTab (changeLevel) {
      if (changeLevel === 0) {
        this.init()
      } else {
        const item = this.selected[changeLevel - 1]
        this.selected = this.selected.slice(0, changeLevel - 1)
        this.handleSelectNext(item)
      }
    },

    async handleGetListByFn () {
      // { id = 0, name }
      const item = this.currentSelected || {}
      const cacheKey = `cache${this.level}${item[this.prop.value]}`
      if (this.cacheMap[cacheKey]) {
        return this.cacheMap[cacheKey]
      }

      this.loadingData = true
      this.currentList = []
      const res = await this.loadFun(item, this.level).finally(() => {
        this.loadingData = false
      })
      this.cacheMap[cacheKey] = res
      // 缓存数据
      return res
    }
  }
})
</script>

<style lang="less" scoped>
.xm-cascade {
  // color: @main;
  font-size: 14px;
  &__bar {
    position: relative;
    background: #fff;
  }
  &__selected {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    padding: 0 5px;
    overflow-x: auto;
    &--multi {
      padding-right: 50px;
    }
    &-item {
      position: relative;
      display: flex;
      height: 40px;
      align-items: center;
      margin: 0 10px;
      span {
        display: block;
        max-width: 70px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-weight: 500;
      }
      &.active {
        color: @main;
        &:after {
          position: absolute;
          content: '';
          display: block;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: @main;
        }
      }
    }
  }
  &__btn {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    padding: 0 10px;
    background: #fff;
    display: flex;
    align-items: center;
  }

  &__list {
    height: e('calc(100% - 40px)');
    overflow-y: auto;
    background: #fff;
  }
  &__item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    padding: 0 15px;
    font-size: 13px;
    &:hover,
    &:active {
      background: #f2f2f2;
    }
    &.active {
      color: @main;
    }
  }
  &__empty {
    text-align: center;
    padding: 30px 0;
    color: #888;
  }
}
</style>
