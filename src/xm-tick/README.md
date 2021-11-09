# xm-tick

### 使用

```js
import { XmTick } from '@xm/design-vue'

Vue.use(XmTick)
```

## 示例

### 单选

```html
<xm-tick v-model="select" :lisy="list" />

<script >
export default {
  data () {
    return {
      select: '选项一',
      list: ['选项一', '选项二', '选项三', '选项四']
    }
  }
}
</script>
```

### 多选

```html
<xm-tick v-model="select" :lisy="list" multiple />

<script >
export default {
  data () {
    return {
      select: ['选项一', '选项四'],
      list: ['选项一', '选项二', '选项三', '选项四']
    }
  }
}
</script>
```

## API

### Props

名称|类型|说明
----|----|----
list|`Array<string>`|列表
value|`string`\|`string[]`|当前选中
multiple|`boolean`|是否多选


