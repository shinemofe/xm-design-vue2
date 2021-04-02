# Tab 导航栏

### 使用 

```js
import { VanTabs } from '@xm/design-vue'

Vue.use(VanTabs)
```

注意，这里不需要引入 VanTab


## 示例

### 默认用法

引入组件后，可以搭配 VanTab 使用，而不需要手动引入 VanTab。

```html
<van-tabs v-model:active="active">
  <van-tab title="标签 1">内容 1</van-tab>
  <van-tab title="标签 2">内容 2</van-tab>
  <van-tab title="标签 3">内容 3</van-tab>
  <van-tab title="标签 4">内容 4</van-tab>
</van-tabs>
```
