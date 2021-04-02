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

方式：点击右上角 GIT 地址提 pr。

```
npm run create
```

会新建 `src/component-name`，打包该组件：

```
npm run build component-name
```

配置左侧菜单

在文件 `doc.config.js` catelogs 中配置。
