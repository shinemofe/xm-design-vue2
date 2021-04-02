// const { pathExistsSync } = require('fs-extra')
// const compile = require('./compile-less')
const genStyle = require('./gen-component-style')
const consola = require('consola')

module.exports = components => {
  consola.info('  🔧 处理 style...')
  return Promise.all(components.map(async ({ style, name, file, vant }) => {
    // if (pathExistsSync(style)) {
    //   await compile(style, name)
    // }
    genStyle({ style, file, name, vant })
    consola.success('  style 处理完成')
  }))
}
