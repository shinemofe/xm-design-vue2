<demo-code self>
../components/intro.vue
</demo-code>

### 介绍

本项目是由 `@vue/cli` 初始化的 `2.x` 的项目模版改造。vue 版本 `2.6.12`。


项目代码分为三个部分：

- 文档系统
- 组件包
- 示例

均支持 vue2。另外，`/docs/` 目录不设置 `eslint` 校验。

## 组件的构成

### 写法

组件库支持单文件(SFC)模式的组件，以及 JSX 与 less 分离的组件模式。

需要注意的是，基于 vant 覆盖的组件流程：

1. 创建 js 与 less 分离模式的组件
2. 覆盖组件为纯函数组件，render 为 jsx 语法
3. 样式需要引入该组件依赖的其他 vant 组件样式，譬如 Button 依赖了 loading、icon 组件样式，需要手动在此处引入

### 开发新组件

> 方式：点击右上角 GIT 地址提 pr。

第一步：新建组件，如果是覆盖 vant 组件，选择 `vant`

```
npm run create
```

第二步：此时，在 `src` 和 `example/demo` 目录下已为你创建好最基本组件文件，对于 vant 组件的覆盖，你需要做的：

- 引入其 esm 组件，通过纯函数组件导出
- 引入其样式依赖，通过 `node_modules/vant/es/<组件>/style/index.js` 中可以看到依赖项  
    譬如 `van-button`
    ```js
    import '../../style/base.css';
    import '../../info/index.css';
    import '../../icon/index.css';
    import '../../loading/index.css';
    import '../index.css';
    ```
    将依赖项的源 less 文件写入 `index.less.js`，此处是：`style/base.less`、`info/index.less`、`icon/index.less`、`loading/index.less`
- 覆盖变量，需要从 vant 的[组件变量文件](https://github.com/youzan/vant/blob/dev/src/checkbox/var.less)中查看，具体在 `vant/src/<组件>/var.less` 中，只需要全部拷贝，在我们的组件目录下新建 `var.less` 文件存放
- 主题库引入变量文件，在 `xmi.theme.less` 中引入组件的变量文件

第三步：配置左侧菜单

  在文件 `doc.config.js` catelogs 中配置组件入口

第四步：发起 pr 提交组件到 master
