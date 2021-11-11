# van-picker

### 使用

```js
import { VanPicker } from '@xm/design-vue'

Vue.use(VanPicker)
```

## 示例

### 默认用法

```html
<van-picker
  title="标题"
  show-toolbar
  :columns="columns"
  @confirm="onConfirm"
  @cancel="onCancel"
  @change="onChange"
/>
```

### 搭配 Popup 使用

```html
<van-popup
  v-model="show"
  position="bottom"
  round
>
  <van-picker
    title="标题"
    show-toolbar
    :columns="columns"
    @confirm="onConfirm"
    @cancel="onCancel"
    @change="onChange"
  />
</van-popup>
```

### script 部分

```js
export default {
    data () {
      return {
        show: false,
        columns: ['杭州', '宁波', '温州', '绍兴', '湖州', '嘉兴', '金华', '衢州']
      }
    },
    
    methods: {
      onConfirm(value, index) {
        this.show = false
        this.$toast(`当前值：${value}, 当前索引：${index}`)
      },
      onChange(picker, value, index) {
        this.$toast(`当前值：${value}, 当前索引：${index}`)
      },
      onCancel() {
        this.show = false
        this.$toast('取消')
      },
    },
}
```
