# van-popup

### 使用

```js
import { VanPopup } from '@xm/design-vue'

Vue.use(VanPopup)
```

## 示例

### 默认用法

```html
<van-popup v-model="show">内容</van-popup>
```

### 定义位置

```html
<van-popup v-model="show" position="bottom">内容</van-popup>
```

### 关闭

```html
<van-popup 
  v-model="show"
  position="bottom" 
  closeable
>
  内容
</van-popup>
```

### 圆角

```html
<van-popup 
  v-model="show"
  position="bottom" 
  closeable
  round
>
  内容
</van-popup>
```
