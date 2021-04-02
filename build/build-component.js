const compileJsx = require('./compile-jsx')
const compileSfc = require('./compile-sfc')
const compileLess = require('./compile-less')
const path = require('path')
const fs = require('fs-extra')
const consola = require('consola')

async function compileDir (dir, relativePath, lessCollector) {
  const res = await fs.readdir(dir)
  for (const name of res) {
    const file = path.join(dir, name)
    const stat = await fs.stat(file)
    if (stat.isDirectory()) {
      await compileDir(file, `${relativePath}/${name}`, lessCollector)
    } else if (/\.js/.test(name)) {
      await compileJsx.doBabel(file, relativePath, name)
    } else if (/\.vue/.test(name)) {
      await compileSfc
        .doParse(file, name)
        .then(({ script, less }) => {
          // fs.outputFileSync(path.resolve(__dirname, './a.js'), script)
          compileJsx.doBabel(script, relativePath, name, true)
          less && lessCollector.push(less)
        })
    }
  }
}

module.exports = components => {
  consola.info('  🔧 处理 sfc/jsx...')
  return Promise.all(components.map(async ({ dir, name, vant }) => {
    const less = []
    const style = path.join(dir, 'index.less')
    if (fs.pathExistsSync(style)) {
      await compileLess(style, name, null, vant)
    }
    await compileDir(dir, name, less)
    if (less.length) {
      await compileLess(`${name}.less`, name, less.join('\n'))
    }
  })).then(() => {
    consola.success('  sfc/jsx 处理完成')
  })
}
