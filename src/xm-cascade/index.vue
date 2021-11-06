<template>
  <div class="xm-cascade">
    <div class="xm-cascade__bar">
      <div ref="tab" class="xm-cascade__selected">
        <div
          v-for="(item, i) in selected"
          :key="item.id"
          class="xm-cascade__selected-item"
          @click="handleChangeTab(i)"
        >
          <span>{{ item.name }}</span>
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
      <div
        v-for="item in currentList"
        :key="item.id"
        class="xm-cascade__item"
        :class="{
          active: isActiveItem(item)
        }"
        @click="handleSelect(item)"
      >
        <span>{{ item.name }}</span>
      </div>
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

export default componentWrap('xm-cascade', {
  components: {
    VanButton
  },

  data () {
    return {
      level: 0,
      currentSelected: null,
      currentList: [],
      selected: [],
      loadingData: false,
      cacheMap: {},
      multipleSelected: []
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

    async handleSelect (item) {
      const { id, name, children = [] } = item
      this.currentSelected = { id, name, children }
      if (this.selected.every(x => x.id !== id)) {
        this.level = this.selected.push(this.currentSelected)
      }

      let list = children
      if (!this.list) {
        list = await this.handleGetListByFn()
      }
      const noNext = !list || !list.length
      if (noNext) {
        if (this.multiple) {
          this.selected.pop()
        } else {
          this.currentList = []
        }
        this.confirm()
      } else {
        this.currentList = list
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

    confirm () {
      if (this.multiple) {
        const { id, name } = this.currentSelected
        const index = this.multipleSelected.findIndex(x => x.id === id)
        if (index === -1) {
          this.multipleSelected.push({ id, name, path: this.selected.map(x => ({ id: x.id, name: x.name })) })
        } else {
          this.multipleSelected.splice(index, 1)
        }
      } else {
        const list = this.selected.slice()
        const data = list.pop()
        data.path = list.map(x => ({ id: x.id, name: x.name }))
        this.$emit('input', data)
        this.$emit('change', data)
        if (this.needReset) {
          this.init()
        }
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
        this.handleSelect(item)
      }
    },

    async handleGetListByFn () {
      const { id = 0, name } = this.currentSelected || {}
      const cacheKey = `cache${this.level}${id}`
      if (this.cacheMap[cacheKey]) {
        return this.cacheMap[cacheKey]
      }

      this.loadingData = true
      this.currentList = []
      const res = await this.loadFun({ id, name }, this.level).finally(() => {
        this.loadingData = false
      })
      this.cacheMap[cacheKey] = res
      // 缓存数据
      return res
    },

    isActiveItem (item) {
      if (!this.currentSelected) {
        return false
      }

      if (this.multiple) {
        return this.multipleSelected.find(x => x.id === item.id)
      }
      return this.selected.find(x => x.id === item.id)
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
        &:after {
          position: absolute;
          content: '';
          display: block;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
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
