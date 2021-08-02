const fs = require('fs-extra')
const path = require('path')
const src = path.resolve(__dirname, '../src')
const inquirer = require('inquirer')
const consola = require('consola')
const chalk = require('chalk')
const { nameToCamel } = require('./utils')

// 选择组件类型 jsx 或 sfc
// 组件名称
// 组件中文描述
async function getConfig () {
  const config = await inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: '请输入组件名称，小写短杠'
    },
    {
      type: 'list',
      name: 'type',
      message: '请选择组件类型',
      choices: ['vant', 'jsx', 'sfc']
    }
  ])
  return config
}

// 单文件组件写法
const sfcTpl = `<template>
  <div class="%name%">
  </div>
</template>

<script>
import { componentWrap } from '../utils/util'

export default componentWrap('%name%', {
  name: '%name%',

  data () {
    return {
    }
  }
})
</script>

<style lang="less" scoped>
.%name% {
  color: @main;
}
</style>
`

// jsx 写法
const jsxTpl = `export default {
  name: '%name%',

  data () {
    return {}
  },

  render (h) {
    return <div />
  }
}
`

// 基于 vant 覆盖的组件写法
const vantTpl = name => `import ${nameToCamel(name)} from 'vant/es/${name.split(`-`)[1]}'
import { componentWrap } from '../utils/util'

const render = (h, context) => {
  return <${nameToCamel(name)} {...context} {...context.data} />
}

export default componentWrap('${name}', { render }, true)
`

// less
const jsxLess = (name, type) => type === 'vant' ? `// 引入组件依赖的样式\nimport \'vant/es/${name.split(`-`)[1]}/index.less\'\n` : `.${name} {
}
`

// 介绍文档
const mdTpl = name => `# ${name}

### 使用

\`\`\`js
import { ${nameToCamel(name)} } from '@xm/design-vue'

Vue.use(${nameToCamel(name)})
\`\`\`

## 示例

### 默认用法

\`\`\`html
<${name} ></${name}>
\`\`\`
`

// demo 模版
const demoTpl = name => `<template>
  <layout title="${nameToCamel(name)}">
    <${name} />
  </layout>
</template>

<script>
import Layout from '../Layout'

export default {
  name: 'demo-${name}',

  components: {
    Layout
  },

  data () {
    return {}
  },

  created () {
  }
}
</script>
`

async function inject () {
  const { type, name } = await getConfig()

  if (!/^[a-z\-]+$/.test(name)) {
    return consola.error(`组件名称 ${chalk.red(name)} 不合法，正确示例：${chalk.green('xm-toast')}`)
  }

  // 校验组件是否存在
  if (fs.pathExistsSync(path.join(src, name))) {
    return consola.error('组件已存在')
  }

  const componentDir = file => path.join(src, name, file)
  const demoDir = file => path.resolve(__dirname, '../examples/demo', file)

  if (type === 'sfc') {
    await fs.outputFile(componentDir('index.vue'), sfcTpl.replace(/%name%/g, name))
  } else {
    if (type === 'vant') {
      await fs.outputFile(componentDir('index.jsx'), vantTpl(name))
    } else {
      await fs.outputFile(componentDir('index.jsx'), jsxTpl.replace(/%name%/g, name))
    }
    await fs.outputFile(componentDir(`index.less${type === 'vant' ? '.js' : ''}`), jsxLess(name, type))
  }
  await fs.outputFile(componentDir('README.md'), mdTpl(name))
  await fs.outputFile(demoDir(`${name}.vue`), demoTpl(name))
  consola.success(`组件 ${chalk.yellow(name)} 创建成功`)
}

inject()
