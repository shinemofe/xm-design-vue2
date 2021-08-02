<template>
  <div
    :class="{
      'xm-table__body--fixed': fixed
    }"
  >
    <table
      cellspacing="0"
      cellpadding="0"
      class="xm-table__body"
      :style="{
        width: `${$parent.tableColumnWidth}px`
      }"
    >
      <tbody>
      <tr
        v-for="(dataItem, i) in data"
        :key="dataItem[$parent.nodeKey] || i"
        class="xm-table__row"
      >
        <td
          class="xm-table__cell-wrapper"
          v-for="(propFieldItem, j) in $parent.thead"
          :key="j"
          :style="{
            width: $parent.getCellWidth(j)
          }"
        >
          <div class="xm-table__cell">{{ dataItem[propFieldItem.prop] }}</div>
        </td>
        <td
          v-if="$parent.options.length"
          class="xm-table__cell-wrapper"
        >
          <div class="xm-table__cell">
            <span
              v-for="(opt, k) in $parent.options"
              :key="k"
              :style="{ color: opt.color }"
              class="xm-table__cell-opt"
              @click="opt.action(dataItem, i)"
            >
              {{ opt.label }}
            </span>
          </div>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    fixed: {
      type: Boolean,
      default: false
    },
    data: {
      type: Array,
      default: () => ([])
    }
  },

  computed: {
  }
}
</script>

<style lang="less">
.xm-table__body {
  &--fixed {
    position: absolute;
    right: 0;
    left: auto;
  }
}
</style>
