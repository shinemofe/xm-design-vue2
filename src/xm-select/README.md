# xm-select

### 使用

```js
import { XmSelect } from '@xm/design-vue'

Vue.use(XmSelect)
```

## 示例

### 默认用法

```html
<xm-select
  v-model="selectIndex"
  :list="['北京大学', '武汉大学', '清华大学']"
/>
```

### Props

名称|类型|说明
----|----|----
list|`Array<string>`|列表
value|`number`|当前选中
native|`boolean`|是否启用 native 面板
title|`string`|标题

