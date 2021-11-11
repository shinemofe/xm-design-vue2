# xm-dialog-activity

### 使用

```js
import { XmDialogActivity } from '@xm/design-vue'

Vue.use(XmDialogActivity)
```

## 示例

### 默认用法

```html
<xm-dialog-activity
  v-model="show"
  :img="require('../assets/dialog-activity.png')"
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
