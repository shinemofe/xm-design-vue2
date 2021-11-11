# van-dialog

### 使用

```js
import { VanDialog } from '@xm/design-vue'

Vue.use(VanDialog)
```

## 示例

### 默认用法

```js
// 提示
this.$dialog.alert({ message: '我是提示语', title: '标题' })
// 确认
this.$dialog.confirm({ message: '我是提示语', title: '标题' })
// 异步关闭
this.$dialog.confirm({
  message: '我是提示语',
  title: '标题',
  beforeClose(action, done) {
    if (action === 'confirm') {
      setTimeout(done, 1000)
    } else {
      done()
    }
  }
})
```

### 组件调用

```html
<van-dialog
  width="270px"
  v-model="show"
  :show-confirm-button="false"
  :show-cancel-button="false"
>
  <template #title>
    <p>主标题</p>
    <p class="f14 c-666">描述描述描述描述描述描述描述</p>
    <img src="../assets/dialog-yindao.png" alt="">
  </template>
  <div class="plr30 ptb15">
    <van-button type="primary" block @click="show = false">查看详情</van-button>
  </div>
</van-dialog>
```
