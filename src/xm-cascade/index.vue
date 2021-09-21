<template>
  <div class="xm-cascade">
    <div class="xm-cascade__bar">
      <div class="xm-cascade__selected">
        <div class="xm-cascade__selected-item active">
          <span>一级选项</span>
        </div>
        <div class="xm-cascade__selected-item">
          <span>二级选项</span>
        </div>
        <div class="xm-cascade__selected-item">
          <span>三级选项特别长</span>
        </div>
        <div class="xm-cascade__selected-item">
          <span>四级选项特别长</span>
        </div>
        <div class="xm-cascade__selected-item">
          <span>五级选项特别长</span>
        </div>
      </div>
      <div class="xm-cascade__btn">
        <van-button type="primary" size="mini">确定</van-button>
      </div>
    </div>
    <div class="xm-cascade__list">
      <div class="xm-cascade__item">
        <span>北京市</span>
      </div>
      <div class="xm-cascade__item">
        <span>北京市</span>
      </div>
      <div class="xm-cascade__item">
        <span>北京市</span>
      </div>
      <div class="xm-cascade__item">
        <span>北京市</span>
      </div>
      <div class="xm-cascade__item">
        <span>北京市</span>
      </div>
    </div>
  </div>
</template>

<script>
import { componentWrap } from '../utils/util'
import VanButton from '../van-button'

export default componentWrap('xm-cascade', {
  // name: 'xm-cascade',
  components: {
    VanButton
  },

  data () {
    return {
    }
  },

  props: {
    loadFun: {
      type: Function,
      default: () => Promise.resolve([])
    },
    /*
     * 字符串数组
     */
    value: {
      type: Array,
      default: () => ([])
    },
    multiple: {
      type: Boolean,
      default: false
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
          background: red;
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
  }
}
</style>
