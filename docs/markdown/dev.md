# 组件库维护指南

### 开发新组件

master 分支不允许直接提交，只能使用 pull request 合并。

### 第一步：新建组件

输入组件名称
```
npm run create
```

如果是覆盖 vant 组件，组件名应该以 `van-` 开头，如果是其他组件，组件名称以 `xm-` 开头。

同样的，如果是 vant 组件，则选择 `vant`，其他则根据实际情况选择，一般建议使用 `sfc`。

此时，在 `src` 和 `example` `demo` 目录下已为你创建好最基本组件文件。


### 第二步：添加到菜单栏

需要明确该组件属于什么类型，然后添加到 `doc.config.js` 文件中

### 第三步：注意事项

基于 vant 覆盖的组件流程：

[comment]: <> (1. 创建 js 与 less 分离模式的组件)

[comment]: <> (2. 覆盖组件为纯函数组件，render 为 jsx 语法)

[comment]: <> (3. 样式需要引入该组件依赖的其他 vant 组件样式，譬如 Button 依赖了 loading、icon 组件样式，需要手动在此处引入)


[comment]: <> (第二步：对于 vant 组件的覆盖，你需要做的：)

- 引入其 esm 组件，通过纯函数组件导出
- 引入其样式依赖到 `index.less.js` 中，通过 `node_modules/vant/es/<组件>/style/index.js` 中可以看到依赖项  
  譬如 `van-button` 的 css 依赖：
    ```js
    import '../../style/base.css';
    import '../../info/index.css';
    import '../../icon/index.css';
    import '../../loading/index.css';
    import '../index.css';
    ```
  将依赖项的源 less 文件写入 `index.less.js`
  ```js
  import 'vant/es/button/index.less'
  import 'vant/es/info/index.less'
  import 'vant/es/icon/index.less'
  import 'vant/es/loading/index.less'
  ```
- 覆盖变量，将 vant 的变量文件覆盖为我们需要的，在组件目录下新建 `var.less` 文件存放。从 `vant/src/<组件>/var.less` 中可以看到组件有哪些变量，譬如 checkbox 的[变量文件](https://github.com/youzan/vant/blob/dev/src/checkbox/var.less)。
  
- 主题库引入变量文件，在 `xmi.theme.less` 中引入组件的变量文件


### 第四步：组件参考

- 覆盖 vant 组件，同时修改变量及样式：`van-button`
- 覆盖 vant 组件，同时扩展组件 props：`van-loading`
- 自定义组件，同时引入 vant 组件：`xm-tick`
----
发起 pr 提交组件到 main 分支
