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

### 特性

组件库写法支持单文件(SFC)模式的组件，以及 JSX 与 less 分离的组件模式。

本组件库，支持通过覆盖 css 变量文件达到更换主题的效果。由于 vant 组件库的主题基于 less 而非运行时，为了拓展这一特性，以及适配公司视觉规范，vant 的组件使用纯函数组件包装了一层。

通常来讲

- vant 的组件都是以 `van-` 开头
- 自定义的组件以 `xm-` 开头
