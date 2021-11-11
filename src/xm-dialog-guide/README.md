# xm-dialog-guide

### 使用

```js
import { XmDialogGuide } from '@xm/design-vue'

Vue.use(XmDialogGuide)
```

## 示例

### 默认用法

```html
<xm-dialog-guide
  v-model="show"
  title="标题"
  description="描述"
  button-text="查看详情1"
  :img="require('../assets/dialog-yindao.png')"
  @click="handleClick"
/>

<script >
  export default {
    data () {
      return {
        show: false
      }
    },

    methods: {
      handleClick () {
        this.$toast('查看详情')
      }
    }
  }  
</script>
```
