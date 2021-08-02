<template>
  <div class="xm-table--wrapper">
    <div
      class="xm-table"
      :class="{
        'xm-table--border': border,
        'xm-table--radius': radius
      }"
      ref="table"
    >
      <div ref="thead" class="xm-table__head-wrapper">
        <xm-thead :data="theadData" />
      </div>

      <div
        ref="tbody"
        class="xm-table__body-wrapper"
        @scroll="handleBodyScroll"
      >
        <xm-tbody
          v-if="data.length"
          :data="tbodyData"
        />
        <p
          v-else
          class="no-data"
          :class="{
            'no-data__fixed': needFixed
          }"
        >
          暂无数据~
        </p>
      </div>

      <div
        v-if="needFixed"
        class="xm-table__fixed-right"
        :style="{
          width: `${fixedColumnWidth}px`,
          height: `${tableHeight}px`
        }"
      >
        <xm-thead
          :data="theadData"
          ref="fixedThead"
          fixed
        />
        <xm-tbody
          fixed
          :data="tbodyData"
          :style="{
            top: `${fixedTheadHeight}px`,
            height: `${tableHeight - fixedTheadHeight}px`
          }"
        />
      </div>
    </div>
    <p
      v-if="showMore"
      class="xm-table__more"
      @click="handleChangeMore"
    >
      <img
        class="xm-table__more-icon"
        :class="{
          'xm-table__more-icon--rotate': more
        }"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAilBMVEUAAABcZnBaY2tcY2pgYG5cYmlTZmxeY21fZGlfZG5bYGpbZWpaY21eY21dYWtbZG1gZG1eYmtcYWpbY2xfY2xdYmpcYGlcYG1aY2tfY2tdZW1cZGxeYm5dZGxbY2taYmxaY21bYmxbY2xbYmxaYmxbYmxbYWxbYmxbYmtbYm1bYmxbYmxbYmxbYWwAzDYpAAAALnRSTlMAGR8kJScoMTMzNTU2Njc4ODk6Ozs8PT0+Pj9AQUJDrLLu7u/w8PHx8vLz9PX2NSEckwAAAHhJREFUGBnNwQsWQkAAQNHX/5+QkEo1DDOj/W+vOI6DLMC9jNVkRs9ySun5edBxK2JKq1dxp+VqxIbK+m0iGoERO2pbYUJqnk6PNA6J9qm4Sp5osaQ682NnuUOHneUOWFJ59LhKWvtE+/y56FSYkAGBKSIGzReM3RcQUwhzdp/LnAAAAABJRU5ErkJggg==" alt=""
        width="12px"
      >
      <span>{{ moreText }}</span>
    </p>
  </div>
</template>

<script>
import { componentWrap } from '../utils/util'
import XmThead from './thead'
import XmTbody from './tbody'

export default componentWrap('xm-table', {
  components: {
    XmThead,
    XmTbody
  },

  props: {
    nodeKey: {
      type: String,
      default: 'id'
    },
    thead: {
      type: Array,
      default: () => ([]),
      required: true
    },
    data: {
      type: Array,
      default: () => ([])
    },
    options: {
      type: Array,
      default: () => ([])
    },
    border: {
      type: Boolean,
      default: false
    },
    radius: {
      type: Boolean,
      default: false
    },
    optionsConfig: {
      type: Object,
      default: () => null
    }
  },

  data () {
    return {
      tableHeight: 0,
      tableWidth: 0,
      fixedTheadHeight: 0,
      more: false
    }
  },

  computed: {
    tableColumnWidth () {
      // eslint-disable-next-line no-return-assign
      const width = this.thead.reduce((sum, item) => sum += item.width, 0)
      if (this.optionsConfig) {
        return width + (this.optionsConfig.width || 0)
      }
      return width
    },

    fixedColumnWidth () {
      // eslint-disable-next-line no-return-assign
      return this.theadData.filter(x => x.fixed).reduce((sum, item) => sum += item.width, 0)
    },

    theadData () {
      return this.optionsConfig
        ? this.thead.slice().concat([this.optionsConfig])
        : this.thead
    },

    tbodyData () {
      if (this.showMore && !this.more) {
        return this.data.slice(0, this.optionsConfig.maxRows)
      }
      return this.data
    },

    needFixed () {
      return (
        this.thead.some(x => x.fixed) ||
        (this.optionsConfig && this.optionsConfig.fixed)
      ) && this.tableColumnWidth > this.tableWidth
    },

    showMore () {
      if (this.fixed) {
        return false
      }
      if (this.optionsConfig) {
        const { maxRows } = this.optionsConfig
        return maxRows < this.data.length
      }
      return false
    },

    moreText () {
      return (this.optionsConfig.maxOverText || ['展开', '收起'])[Number(this.more)]
    }
  },

  mounted () {
    const { height, width } = this.$refs.table.getBoundingClientRect()
    this.tableHeight = height
    this.tableWidth = width
    if (this.needFixed) {
      this.fixedTheadHeight = this.$refs.fixedThead.$el.getBoundingClientRect().height
    }
  },

  methods: {
    getCellWidth (theadIndex) {
      const item = this.thead[theadIndex]
      return item.width !== undefined ? `${item.width}px` : null
    },

    handleBodyScroll (e) {
      this.$refs.thead.scrollTo({
        left: e.target.scrollLeft
        // behavior: 'smooth'
      })
    },

    handleChangeMore () {
      this.more = !this.more
      this.$nextTick().then(() => {
        this.tableHeight = this.$refs.table.getBoundingClientRect().height
      })
    }
  }
})
</script>

<style lang="less">
@import "var";
.xm-table {
  position: relative;
  .hidden {
    visibility: hidden;
  }
  .no-data {
    font-size: @table-font-size;
    color: #999;
    padding: 20px 0;
    text-align: center;
    &__fixed {
      position: relative;
      z-index: 2;
      background-color: #fff;
    }
  }
  &__head-wrapper {
    overflow: hidden;
  }
  &__head &__cell {
    background-color: @table-head-bg;
  }
  &__row {
    border-bottom: 1px @table-border-color solid;
  }
  &__cell {
    font-size: @table-font-size;
    padding: 10px;
    text-align: left;
    font-weight: initial;
    background: #fff;
  }

  &__body-wrapper {
    overflow-x: auto;
  }

  &--radius {
    border-radius: 5px;
    overflow: hidden;
  }
  &--border {
    border: 1px @table-border-color solid;
  }
  &--border &__row:not(&__head :last-child):last-child {
    border-bottom: none;
  }
  &--border &__row &__cell-wrapper:not(:first-child) &__cell {
    border-left: 1px @table-border-color solid;
  }

  &__fixed,
  &__fixed-right {
    position: absolute;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.12);
  }
  &__fixed-right {
    left: auto;
    right: 0;
    top: 0;
  }

  &__more {
    text-align: center;
    padding: 15px 0;
    font-size: @table-font-size;
    color: #999;
    &-icon {
      margin-right: 10px;
      transition: transform 0.3s;
      &--rotate {
        transform: rotate(180deg);
      }
    }
  }
}
</style>
