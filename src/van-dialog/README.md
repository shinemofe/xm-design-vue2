# van-dialog

### 使用

```js
import { VanDialog } from '@xm/design-vue'

Vue.use(VanDialog)
```

## 示例

### 默认用法

```js
this.$dialog.alert({ message: '对话框消息' })
VanDialog.alert({ message: '对话框消息' })
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
