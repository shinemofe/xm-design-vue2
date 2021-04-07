# van-col

### 使用

```js
import { VanCol } from '@xm/design-vue'

Vue.use(VanCol)
```

## 示例

### 基础用法

```html
<van-row>
  <van-col span="8" class="bg-999">span: 8</van-col>
  <van-col span="8" class="bg-ccc">span: 8</van-col>
  <van-col span="8" class="bg-999">span: 8</van-col>
</van-row>
```

### 列元素间距

```html
<van-row :gutter="20">
  <van-col span="8" class="bg-999">span: 8</van-col>
  <van-col span="8" class="bg-ccc">span: 8</van-col>
  <van-col span="8" class="bg-999">span: 8</van-col>
</van-row>
```
