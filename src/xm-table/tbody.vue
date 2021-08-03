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
          v-for="(propFieldItem, j) in $parent.thead"
          class="xm-table__cell-wrapper"
          :key="j"
          :style="{
            width: propFieldItem.width !== undefined && `${propFieldItem.width}px`
          }"
        >
          <div
            class="xm-table__cell"
            :class="{ hidden: fixed && !propFieldItem.fixed }"
          >
            {{ dataItem[propFieldItem.prop] }}
          </div>
        </td>
        <td
          v-if="$parent.optionsConfig && $parent.options.length"
          class="xm-table__cell-wrapper"
          :style="{
            width: $parent.optionsConfig && $parent.optionsConfig.width && `${$parent.optionsConfig.width}px`
          }"
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
    table-layout: fixed;
  }
}
</style>
