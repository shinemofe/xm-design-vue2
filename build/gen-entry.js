const path = require('path')
const { version } = require(path.resolve(__dirname, '../package.json'))
const fs = require('fs-extra')
const { getComponents, nameToCamel } = require('./utils')
// const { tconModules } = require('../doc.config')

const components = getComponents()
const es = path.resolve(__dirname, '../es')
const jsPath = path.join(es, 'index.js')
const lessPath = path.join(es, 'index.less')

const js = `${components.map(({ name }) => `import ${nameToCamel(name)} from './${name}'`).join('\n')}

function install (app) {
  const componentArr = [${components.map(({ name }) => `${nameToCamel(name)}`).join(', ')}]

  componentArr.forEach(com => {
    app.component(com.name, com)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export { ${components.map(({ name }) => `${nameToCamel(name)}`).join(', ')} }
export default {
  version: '${version}',
  install
}
`

const vantLess = []
components.forEach(({ style, vant }) => {
  if (vant) {
    fs.readFileSync(`${style}.js`, 'utf8')
      .split('\n')
      .filter(x => x.startsWith('import \'vant'))
      .map(x => `@${x}`.replace('vant', '~vant') + ';')
      .forEach(x => {
        if (!vantLess.includes(x)) {
          vantLess.push(x)
        }
      })
  }
})
const css = components.map(({ name, style, style2, vant }) => {
  if (fs.pathExistsSync(style2)) {
    return `@import "../es/${name}/index.css";`
  } else if (fs.pathExistsSync(style)) {
    return `@import "../es/${name}/index.less";`
  }
}).filter(Boolean)

// 注入依赖
Array.prototype.unshift.apply(
  css,
  [
    '@import "./style/var.less";',
    ...vantLess
  ]
)

fs.outputFileSync(jsPath, js)
fs.outputFileSync(lessPath, css.join('\n'))
console.log('生成入口文件')
