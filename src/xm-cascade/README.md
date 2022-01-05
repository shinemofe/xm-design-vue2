# xm-cascade

### 使用

```js
import { XmCascade } from '@xm/design-vue'

Vue.use(XmCascade)
```

## 示例

### 传入完整数据选择

```html
<xm-cascade v-model="select" :list="list" />

<script>
export default {
  data () {
    return {
      select: [],
      list: [
        {
          id: 1,
          name: '湖北',
          children: [
            {
              id: 11,
              name: '武汉',
              children: [
                {
                  id: 111,
                  name: '江汉区'
                }
              ]
            }
          ]
        }
      ]
    }
  }
} 
</script>
```

### 配合 Popup 使用

```html
<van-cell
  title="选择地区"
  is-link
  @click="showPopup = true"
>
  <span>请选择</span>
</van-cell>
<van-popup
  v-model="showPopup"
  position="bottom"
  round
>
  <xm-cascade
    v-model="select"
    :list="list"
    style="height: 300px"
    @change="showPopup = false"
  />
</van-popup>
```

### 从接口动态获取数据
```html
<xm-cascade v-model="select2" :loadFun="loadFun" />

<script >
export default {
  data () {
    return {
      select2: []
    }
  },
  methods: {
    async loadFun (parent, level) {
      return new Promise((resolve) => {
        setTimeout(() => {
          if (level !== 0) {
            const item = this.deepFind(this.list, it => it.id === parent.id)
            resolve(item.children || [])
          } else {
            resolve(this.list)
          }
        }, 1000)
      })
    },

    deepFind (arr, cb) {
      for (const item of arr) {
        if (item.children) {
          const res = this.deepFind(item.children, cb)
          if (res) {
            return res
          }
        }
        if (cb(item)) {
          return item
        }
      }
    }
  }
}  
</script>
```

### 选择多个

```html
<xm-cascade 
  v-model="select3"
  :list="list" 
  multiple 
/>
```

## 配置项

### Types

```ts
type Item = {
  name: string;
  id: number;
  path: Array<{ id: number, name: string }>;
}

type List = {
  name: string;
  id: number;
  Children: List[];
}
```

### Props
|字段|类型|默认值|说明
|-----|-----|----|----|
value\|v-model|`Item` `Item[]`|-|选中的值，默认为 Item 对象，多选时是数组
list|`List`|null|嵌套的数据
needReset|`boolean`|true|选择完成后是否重置选择面板
loadFun|`(parent: Item, level: number) => Promise<List[]>`|`() => Promise.resolve([])`|通过接口返回当前一级的数据
prop|`{ label: 'text', value: 'value' }`|-|属性选项

> TIPS: 有些场景可以直接提供完整的嵌套的数据，那么直接使用 list 传入。大多数时候，每一级的数据是需要拉接口的，则通过 loadFun。

