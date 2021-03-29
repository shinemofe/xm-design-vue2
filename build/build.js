const { getComponents, getFixed } = require('./utils')
const buildComponent = require('./build-component')
const genStyle = require('./gen-style')
const consola = require('consola')

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

if (processComponents.length) {
  consola.info(`共 ${processComponents.length} 个组件待处理`)
  const jsArr = getFixed().concat(processComponents)

  buildComponent(jsArr).then(() => genStyle(processComponents)).then(() => {
    consola.success('全部完成')
  })
}
