const path = require('path')
const fs = require('fs-extra')
const { render, FileManager } = require('less')
const { readFileSync, pathExistsSync } = require('fs-extra')
const postcss = require('postcss')
const postcssrc = require('postcss-load-config')
const CleanCss = require('clean-css')
const consola = require('consola')
const es = path.resolve(__dirname, '../es')
const { tconModules } = require('../doc.config')

const cleanCss = new CleanCss()

// less plugin to resolve tilde
class TildeResolver extends FileManager {
  loadFile (filename, ...args) {
    filename = filename.replace('~', '')
    return FileManager.prototype.loadFile.apply(this, [filename, ...args])
  }
}

const TildeResolverPlugin = {
  install(lessInstance, pluginManager) {
    pluginManager.addFileManager(new TildeResolver())
  }
}

module.exports = async function compile (filePath, name, code, vant) {
  const isEntryLess = name === ''
  const options = {
    filename: filePath,
    plugins: [TildeResolverPlugin]
  }
  // if (isEntryLess) {
  // 处理入口 less
  options.modifyVars = {
    hack: `true; @import "${path.resolve(__dirname, '../xmi.theme.less')}";`
  }
  // }

  // let source = ''
  if (vant) {
    // vant 的样式文件去除头部的 van 组件引用
    // source = readFileSync(`${filePath}.js`, 'utf-8')
    //   .split('\n')
    //   .filter(x => !x.startsWith(`import 'vant`))
    //   .join('\n')
    // 变量文件
    const varPath = filePath.replace('index.less', 'var.less')
    if (pathExistsSync(varPath)) {
      await fs.copy(varPath, varPath.replace('/src/', '/es/'))
    }
    // return fs.outputFile(path.join(es, name, 'index.less'), source)
  } else {
    // source = code || readFileSync(filePath, 'utf-8')
  }

  if (!code && !pathExistsSync(filePath)) {
    return
  }

  let source = code || readFileSync(filePath, 'utf-8')

  const cssImport = source.split('\n').filter(x => /\.css/.test(x))
  cssImport.forEach(x => {
    source = source.replace(x, '')
  })
  const { css } = await render(source, options)

  const config = await postcssrc({}, path.resolve(__dirname, './postcss.config.js'))
  const result = await postcss(config.plugins).process(css, {
    from: undefined
  })

  const injectCss = async (arr) => {
    const content = await Promise.all(
      arr.map(x => fs.readFile(x, 'utf8'))
    )
    return content.join('\n')
  }

  // 注入 tcon
  if (isEntryLess) {
    const tconCss = await injectCss(tconModules.map(x => path.resolve(__dirname, '../node_modules/tcon/dist', `${x}.css`)))
    result.css += `\n${tconCss}`
  }

  if (cssImport.length) {
    const css = await injectCss(cssImport.map(x => path.resolve(__dirname, x.replace(/@import "|;|"/g, ''))))
    result.css += `\n${css}`
  }

  const { styles, errors } = cleanCss.minify(result.css)
  if (errors.length) {
    consola.error('入口 less 转化出错: ' + JSON.stringify(errors))
    process.exit(0)
  }
  await fs.outputFile(path.join(es, name, 'index.css'), styles)
}
