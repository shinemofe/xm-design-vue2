# van-checkbox

### 使用

```js
import { VanCheckbox } from '@xm/design-vue'

Vue.use(VanCheckbox)
```
注意：已自动引入 CheckboxGroup 组件，可搭配使用

## 示例

### 默认用法

```html
<van-checkbox v-model="v1">复选框</van-checkbox>

<script >
  export default {
    data () {
      return {
        v1: true
      }
    },
  }
</script>
```

### 复选框组

```html
<template>
  <van-checkbox-group v-model="v2" ref="checkboxGroup">
    <van-checkbox name="a">复选框 a</van-checkbox>
    <van-checkbox name="b">复选框 b</van-checkbox>
    <van-checkbox name="c">复选框 c</van-checkbox>
  </van-checkbox-group>

  <van-button type="primary" @click="checkAll">全选</van-button>
  <van-button class="ml10" type="danger" @click="toggleAll">反选</van-button>
</template>

<script>
export default {
  data () {
    return {
      v2: []
    }
  },
  
  methods: {
    checkAll() {
      this.$refs.checkboxGroup.toggleAll(true)
    },
    toggleAll() {
      this.$refs.checkboxGroup.toggleAll()
    }
  }
}  
</script>
```

### 搭配单元格使用

```html
<van-checkbox-group v-model="v3">
    <van-cell clickable title="复选框 a" @click="toggle(0)">
      <template #right-icon>
        <van-checkbox name="a" ref="checkbox0" />
      </template>
    </van-cell>
    <van-cell clickable title="复选框 b" @click="toggle(1)">
      <template #right-icon>
        <van-checkbox name="b" ref="checkbox1" />
      </template>
    </van-cell>
</van-checkbox-group>

<script>
export default {
  data () {
    return {
      v3: []
    }
  },
  
  methods: {
    toggle (i) {
      this.$refs[`checkbox${i}`].toggle()
    }
  }
}  
</script>
```
