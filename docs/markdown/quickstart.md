# 快速上手

### 安装

```
xnpm i @xm/design-vue -S
```

请注意

> 本组件库内置安装了 vant^2.12.10 ，且全局注册，所以你的项目无需额外安装 vant

关于 less，请锁定版本：

```json
{
  "less": "3.0.4",
  "less-loader": "5.0.0"
}
```

## 引入组件库

### 方式一. 按需引入 

[babel-plugin-import](https://github.com/ant-design/babel-plugin-import) 是一款 babel 插件，它会在编译过程中将 import 的写法自动转换为按需引入的方式。

```bash
# 安装插件
npm i babel-plugin-import -D
```


在 .babelrc 中添加配置，注意 libraryDirectory 为 es 目录。

```json
{
  "plugins": [
    [
      "import", {
        "libraryName": "@xm/design-vue",
        "libraryDirectory": "es",
        "style": true
      },
      "@xm/design-vue"
    ]
  ]
}
```

```js
// 接着你可以在代码中直接引入 Vant 组件
// 插件会自动将代码转化为方式二中的按需引入形式
import { VanButton } from '@xm/design-vue';
```

### 方式三. 一次性全量引入

```js
import Vue from 'vue'
import XmDesign from 'xmmp/lib/index.js'
import 'xmmp/lib/index.css'

Vue.use(XmDesign)
```
