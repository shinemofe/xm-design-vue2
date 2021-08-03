<template>
  <table
    cellspacing="0"
    cellpadding="0"
    class="xm-table__head"
    :style="{
      width: `${$parent.tableColumnWidth}px`
    }"
    :class="{
      'xm-table__head--fixed': fixed
    }"
  >
    <thead>
      <tr
        class="xm-table__row"
      >
        <th
          class="xm-table__cell-wrapper"
          v-for="(item, i) in data"
          :key="i"
          :style="{
            width: item.width !== undefined && `${item.width}px`
          }"
        >
          <div class="xm-table__cell" :class="{ hidden: fixed && !item.fixed }">{{ item.label }}</div>
        </th>
      </tr>
    </thead>
  </table>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => ([])
    },
    fixed: {
      type: Boolean,
      default: false
    }
  },

  created () {
    // console.log(this.data)
  }
}
</script>

<style lang="less">
.xm-table__head {
  &--fixed {
    position: absolute;
    right: 0;
    top: 0;
    table-layout: fixed;
  }
}
</style>
