# van-rate

### 使用

```js
import { VanRate } from '@xm/design-vue'

Vue.use(VanRate)
```

## 示例

### 默认用法

```html
<van-rate v-model="value" />
```

### 半星
```html
<van-rate v-model="value2" allow-half />
```
### 自定义样式
```html
<van-rate
  v-model="value"
  :size="25"
  color="#ffd21e"
  void-icon="star"
  void-color="#eee"
/>
```
