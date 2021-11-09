# van-radio

### 使用

```js
import { VanRadio } from '@xm/design-vue'

Vue.use(VanRadio)
```

## 示例

### 基础用法

```html
<van-radio-group v-model="radio">
  <van-radio name="1">单选框 1</van-radio>
  <van-radio name="2" disabled>单选框 2</van-radio>
  <van-radio name="3">单选框 超长超长超长超长超长超长超长超长超长超长超长</van-radio>
</van-radio-group>
```

### 禁用

```html
<van-radio-group v-model="radio" disabled>
  <van-radio name="1">单选框 1</van-radio>
  <van-radio name="2">单选框 2</van-radio>
</van-radio-group>
```

### 与 Cell 组件一起使用

```html
<van-radio-group v-model="radio">
  <van-cell-group>
    <van-cell title="单选框 1" clickable @click="radio = '1'">
      <template #right-icon>
        <van-radio name="1" />
      </template>
    </van-cell>
    <van-cell title="单选框 2" clickable @click="radio = '2'">
      <template #right-icon>
        <van-radio name="2" />
      </template>
    </van-cell>
  </van-cell-group>
</van-radio-group>
```
