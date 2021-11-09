# van-switch

### 使用

```js
import { VanSwitch } from '@xm/design-vue'

Vue.use(VanSwitch)
```

## 示例

### 默认用法

```html
<van-cell center title="标题">
  <template #right-icon>
    <van-switch v-model="checked" size="24" />
  </template>
</van-cell>
```
### 禁用

```html
<van-cell center title="标题">
  <template #right-icon>
    <van-switch disabled v-model="checked" size="24" />
  </template>
</van-cell>
```
