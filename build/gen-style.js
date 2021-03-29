// const { pathExistsSync } = require('fs-extra')
// const compile = require('./compile-less')
const genStyle = require('./gen-component-style')
const consola = require('consola')

module.exports = components => {
  consola.info('  🔧 处理 style...')
  return Promise.all(components.map(async ({ style, name, file }) => {
    // if (pathExistsSync(style)) {
    //   await compile(style, name)
    // }
    genStyle({ file, name })
    consola.success('  style 处理完成')
  }))
}
