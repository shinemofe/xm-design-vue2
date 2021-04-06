# van-dialog

### 使用

```js
import { VanDialog } from '@xm/design-vue'

Vue.use(VanDialog)
```

## 示例

### 默认用法

```js
this.$dialog.alert({ message: '对话框消息' })
VanDialog.alert({ message: '对话框消息' })
```

### 组件调用

```html
<van-dialog v-model="show" message="对话框消息" />
```
