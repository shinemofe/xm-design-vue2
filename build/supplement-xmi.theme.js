const fs = require('fs-extra')
const path = require('path')
const themePath = path.join(__dirname, '../xmi.theme.less')
const srcPath = path.join(__dirname, '../src')

const themeContent = fs.readFileSync(themePath, 'utf8')

let content = ''
fs.readdirSync(srcPath).forEach(d => {
  const stat = fs.statSync(path.join(srcPath, d))
  if (stat.isDirectory()) {
    const varPath = path.join(srcPath, d, '/var.less')
    if (fs.pathExistsSync(varPath) && themeContent.indexOf(`@import 'src/${d}/var.less';`) === -1) {
      content += `\n@import 'src/${d}/var.less';`
    }
  }
})

// console.log(content)
fs.outputFileSync(themePath, themeContent + content)
