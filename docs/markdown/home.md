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
