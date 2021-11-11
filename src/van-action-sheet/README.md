# van-action-sheet

### 使用

```js
import { VanActionSheet } from '@xm/design-vue'

Vue.use(VanActionSheet)
```

## 示例

### 默认用法

```html
<van-cell 
  is-link 
  title="请选择"
  @click="show = true"
/>
<van-action-sheet 
  v-model="show" 
  :actions="actions" 
  @select="onSelect" 
/>

<script >
export default {
  data() {
    return {
      show: false,
      actions: [{ name: '选项一' }, { name: '选项二' }, { name: '选项三' }],
    };
  },
  methods: {
    onCancel() {
      Toast('取消');
    },
  },

} 
</script>
```

### 展示其他信息

```html
<van-cell 
  is-link 
  title="请选择"
  @click="show = true"
/>
<van-action-sheet 
  v-model="show" 
  :actions="actions"
  cancel-text="取消"
  description="这是一段描述信息"
  @select="onSelect" 
/>

<script >
export default {
  data() {
    return {
      show: false,
      actions: [{ name: '选项一' }, { name: '选项二' }, { name: '选项三', subname: '描述信息' }],
    };
  },
  methods: {
    onCancel() {
      Toast('取消');
    },
  },

} 
</script>
```
