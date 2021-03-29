# 主题定制

### 方案

本 UI 库的主题定制为运行时，通过在 `<head />` 中引入 css4 变量文件

### 开发

less 主题变量文件在 `./xmi.theme.less` 文件中，在该文件中可以用来覆盖 vant 的主题变量，譬如将主色调覆盖为我们的品牌色 css4 变量

```less
@main: e('var(--color-brand-main)');
```

css4 的变量文件中也需要定义

```css
:root {
  /*品牌色*/
  --color-brand-main: #3888e8;
}
```

另外需要注意的是，`./xmi.theme.less` 已通过插件默认注入，无需手动引入。

### 变量定制

<demo-code self>../components/var.vue</demo-code>

