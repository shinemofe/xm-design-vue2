# van-toast

### 使用

```js
import { VanToast } from '@xm/design-vue'

Vue.use(VanToast)
```

## 示例

### 默认用法

```js
this.$toast('提示文案')
this.$toast.loading({
  loading: '提示文案',
  forbidClick: true
})
this.$toast.success('提示文案')
this.$toast.fail('提示文案')
```
