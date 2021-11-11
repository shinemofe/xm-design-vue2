# xm-button-bottom

### 使用

```js
import { XmButtonBottom } from '@xm/design-vue'

Vue.use(XmButtonBottom)
```

## 示例

### 默认用法

```html
    <xm-button-bottom
      :onSelect="onSelect"
      :actions="actions"
      submitText="确定"
      @onSubmit="onSubmit"
      @onCancel="onCancel"
      cancel
      select
    />
```
```js
export default {
  data () {
    return {
      actions: [{ text: 'aaa' }]
    }
  },
  methods: {
    onSelect (val) {
      console.log('val: ', val)
    },
    onCancel () {
      console.log('取消了')
    },
    onSubmit () {
      console.log('提交了')
    }
  }
}
```
## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| submit-text | 提交按钮的显示文字 | _string_ | `提交` |
| cancel | 是否显示取消按钮 | _boolean_ | `false` |
| select | 是否显示选择盒子 | _boolean_ | `false` |
| actions | 选择盒子的选项列表 | _Action[]_ | `[]` |
| onSelect | 选择列表的回调函数 | _function_ | `(val) => console.log(val)` |

### Events

| 事件名 | 说明           | 回调参数       |
| ------ | -------------- | -------------- |
| onSubmit  | 确定时触发   | _event: Event_ |
| onCancel  | 取消时触发   | _event: Event_ |
