const fs = require('fs-extra')
const themePath = './xmi.theme.less'

const themeContent = fs.readFileSync(themePath, 'utf8')

let content = ''
fs.readdirSync('./src').forEach(d => {
  const stat = fs.statSync('./src/' + d)
  if (stat.isDirectory()) {
    const varPath = './src/' + d + '/var.less'
    if (fs.pathExistsSync(varPath) && themeContent.indexOf(`@import 'src/${d}/var.less';`) === -1) {
      content += `\n@import 'src/${d}/var.less';`
    }
  }
})

// console.log(content)
fs.outputFileSync(themePath, themeContent + content)
