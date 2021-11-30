const path = require('path')
const { pathExistsSync, outputFileSync, readFileSync } = require('fs-extra')
const dependencyTree = require('dependency-tree')
const pkg = path.resolve(__dirname, '../src')
const es = path.resolve(__dirname, '../es')
const { tconModules } = require('../doc.config')

function getDepName (obj, res = []) {
  Object.keys(obj).forEach(p => {
    res.push(p)
    getDepName(obj[p], res)
  })
}

function dependency (file) {
  const tree = dependencyTree({
    filename: file,
    directory: pkg,
    filter: path => path.indexOf('node_modules') === -1
  })
  const res = []
  getDepName(tree, res)
  return res.map(x => x.replace(pkg, '').replace(es, '').substr(1).split('/')[0])
}

module.exports = ({ file, file2, name, vant, style }) => {
  let content = null
  if (vant) {
    // 处理 less 依赖
    const source = readFileSync(`${style}.js`, 'utf8')
    content = source.split('\n')
      .filter(x => x.startsWith(`import 'vant/`))
      .filter(x => x.indexOf(`vant/es/${name.split('-').slice(1).join('-')}`) === -1)
      .map(x => x.replace(`import '`, 'require(\'') + ')')
      .map(x => {
        const depModuleName = 'van-' + x.replace('require(\'vant/es/', '').split('/')[0]
        // 判断本地是否存在依赖模块的 css
        if (pathExistsSync(path.join(es, depModuleName, 'index.css'))) {
          return `require('../../${depModuleName}/index.css')`
        }
        // 不存在就直接引入 vant 的
        return x
      })
    if (pathExistsSync(path.join(es, name, 'index.css'))) {
      content.push('require(\'../index.css\')')
    }
  } else {
    const deps = dependency(file2)
    if (deps.length === 0) {
      deps.push(name)
    }
    content = deps.map(component => {
      if (pathExistsSync(path.join(es, component, 'index.css'))) {
        return `require('${component === name ? '../index.css' : `../../${component}/index.css`}')`
      }
    }).filter(Boolean)
  }

  // 插入 tcon
  Array.prototype.unshift.apply(content, tconModules.map(x => `require('tcon/dist/${x}.css')`))

  outputFileSync(path.join(es, name, 'style/index.js'), content.join('\n'))
}
