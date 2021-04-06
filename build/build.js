const { getComponents, getFixed } = require('./utils')
const buildComponent = require('./build-component')
const genStyle = require('./gen-style')
const consola = require('consola')
// const path = require('path')
// const fs = require('fs-extra')

const components = getComponents()
const args = process.argv
const dirs = args.slice(2)
const processComponents = []

if (dirs.length) {
  dirs.forEach(dir => {
    const item = components.find(x => dir === x.name)
    if (item) {
      processComponents.push(item)
    } else {
      consola.error(`组件 ${dir} 不存在！`)
    }
  })
} else {
  Array.prototype.push.apply(processComponents, components)
}

// const theme = path.join(__dirname, '../es', 'style', 'var.less')
// fs.outputFileSync(theme, fs.readFileSync(path.resolve(__dirname, '../xmi.theme.less'), 'utf8').replace(/src\//g, '../'))

if (processComponents.length) {
  const jsArr = getFixed().concat(processComponents)
  consola.info(`共 ${jsArr.length} 个组件待处理`)

  buildComponent(jsArr).then(() => genStyle(processComponents)).then(() => {
    consola.success('全部完成')
  })
}
