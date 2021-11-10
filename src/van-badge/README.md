# van-badge

### 使用

```js
import { VanBadge } from '@xm/design-vue'

Vue.use(VanBadge)
```

## 示例

### 单独展示

```html
<van-badge :content="20" />
<van-badge :content="200" max="99" />
<van-badge content="HOT" />
```

### 文本提示

```html
<van-cell is-link>
  <span>请选择</span>
  <template #title>
    <span>单元格</span>
    <van-badge class="ml5" dot />
  </template>
</van-cell>

<van-cell is-link>
  <span>请选择</span>
  <van-badge class="ml5" dot />
  <template #title>
    <span class="custom-title">单元格</span>
  </template>
</van-cell>
```

### 基础用法

```html
<template>
  <van-badge :content="20">
    <div class="demo-box" />
  </van-badge>
  <van-badge :content="200" max="99">
    <div class="demo-box" />
  </van-badge>
  <van-badge dot>
    <div class="demo-box" />
  </van-badge>
</template>

<style>
.demo-box {
  width: 60px;
  height: 60px;
  background-color: #fff;
}
</style>
```

### 用作删除

譬如在图片上传后需要删除的操作

```html
<van-badge>
  <div class="demo-box" />
  <template #content>
    <van-icon name="cross" class="badge-icon" />
  </template>
</van-badge>

<style>
.badge-icon {
  display: block;
  font-size: 10px;
  line-height: 16px;
}  
</style>
```
