const fs = require('fs-extra')
const path = require('path')
const src = path.resolve(__dirname, '../src')
const inquirer = require('inquirer')
const consola = require('consola')
const chalk = require('chalk')

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
      message: '请选择你将用什么组件写法',
      choices: ['jsx', 'sfc']
    }
    // {
    //   type: 'input',
    //   name: 'desc',
    //   message: '请输入组件中文描述'
    // }
  ])
  return config
}

const sfcTpl = `<template>
  <div class="%name%">
  </div>
</template>

<script>
export default {
  name: '%name%',

  data () {
    return {
    }
  }
}
</script>

<style lang="less" scoped>
.%name% {
  color: @main;
}
</style>
`

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

const jsxLess = `.%name% {
}
`

async function inject () {
  const { type, name, desc } = await getConfig()

  if (!/^[a-z\-]+$/.test(name)) {
    return consola.error(`组件名称 ${chalk.red(name)} 不合法，正确示例：${chalk.green('xm-toast')}`)
  }

  if (type === 'sfc') {
    await fs.outputFile(path.join(src, name, 'index.vue'), sfcTpl.replace(/%name%/g, name))
  } else {
    await fs.outputFile(path.join(src, name, 'index.jsx'), jsxTpl.replace(/%name%/g, name))
    await fs.outputFile(path.join(src, name, 'index.less'), jsxLess.replace(/%name%/g, name))
  }
  await fs.outputFile(path.join(src, name, 'README.md'), `# ${name}`)
  consola.success(`组件 ${chalk.yellow(name)} 创建成功`)
}

inject()
