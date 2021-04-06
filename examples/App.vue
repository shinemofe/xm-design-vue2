<template>
  <div
    class="demo-home"
    :class="{
      index: $route.path === '/'
    }"
  >
    <router-view/>
  </div>
</template>

<style lang="less">
.demo-home {
  &.index {
    background-color: #fff;
  }
  .c-999 {
    color: e('var(--color-gray-4)');
  }
}
</style>
