const path = require('path')
const { catelogs } = require('../doc.config')
const pkgs = path.resolve(__dirname, '../src')
const es = path.resolve(__dirname, '../es')

const utils = {
  upperFirst: str => str[0].toUpperCase() + str.substr(1),

  nameToCamel: name => name.split('-').map(utils.upperFirst).join(''),

  getComponents: () => {
    const components = []
    catelogs.forEach(group => {
      group.items.forEach(item => {
        if (!item.md) {
          const dir = path.join(pkgs, item.path)
          components.push({
            dir,
            file: path.join(dir, 'index.jsx'),
            style: path.join(dir, 'index.less'),
            style2: path.join(es, item.path, 'index.css'),
            name: item.path,
            vant: item.vant
          })
        }
      })
    })
    return components
  },

  getFixed: () => {
    return ['utils'].map(x => ({
      dir: path.join(pkgs, x),
      name: x
    }))
  }
}

module.exports = utils
