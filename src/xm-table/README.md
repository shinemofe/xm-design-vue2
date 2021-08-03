# xm-table

### 使用

```js
import { XmTable } from '@xm/design-vue'

Vue.use(XmTable)
```

## 示例

### 默认用法

```html
<template>
  <xm-table
    :thead="thead2"
    :data="tableData2"
  />
</template>

<script>
export default {
  data () {
    return {
      thead2: [
        { label: '姓名', prop: 'name', width: 60 },
        { label: '性别', prop: 'sex', width: 50 },
        { label: '地址', prop: 'address' }
      ],
      tableData2: [
        { name: '阿东', sex: '男', address: '浙江省杭州市西湖区成华大道' }
      ]
    }
  }
}  
</script>
```

### 带操作

```html
<template>
  <xm-table
    :thead="thead2"
    :data="tableData2"
    :options="options"
    :options-config="optionsConfig"
  />
</template>

<script>
export default {
  data () {
    return {
      thead2: [
        { label: '姓名', prop: 'name', width: 60 },
        { label: '性别', prop: 'sex', width: 50 },
        { label: '地址', prop: 'address' }
      ],
      tableData2: [
        { name: '阿东', sex: '男', address: '浙江省杭州市西湖区成华大道' }
      ],
      // 操作项
      options: [
        {
          label: '查看',
          color: 'red',
          action: (item, i) => {
            console.log('index', item.index, '索引', i)
          }
        }
      ],
      optionsConfig: {
        width: 100,
        fixed: true,
        label: '操作啊',
        maxRows: 1,
        maxOverText: ['展开更多', '收起']
      }
    }
  }
}  
</script>
```

### Props

属性名|类型|默认值|说明
----|----|----|----
nodeKey|`string`|id|列表的每一项key
thead|`Array<{ label: string, width: number, prop: string, fixed: boolean }>`|-|表头
data|`Array<{ [key: string]: unknow }>`|[]|数据
options|`Array<{ label: string, color: string, action: (RowItem: unknow, RowIndex: number) => void }>`|[]|操作项
optionsConfig|`{ label: string, fixed: boolean, width: number, maxRows: number, maxOverText: ['展开', '收起'] }`|null|操作项配置
border|`boolean`|false|带边框
radius|`boolean`|false|圆角
