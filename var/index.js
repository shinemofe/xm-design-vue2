const fs = require('fs-extra')
const path = require('path')
const type = process.argv[2]

const input = fs.readFileSync(path.resolve(__dirname, './input.txt'), 'utf8')
const out = {
  css: {
    out: path.resolve(__dirname, './out-var.css'),
    key (k) {
      return `--${k.split('_').join('-')}`
    }
  },
  js: {
    out: path.resolve(__dirname, './out-var.js'),
    key (k) {
      return k
    },
    linearGradient ([v1, v2]) {
      return `linear-gradient(${v1}, ${v2})`
    },
    formatItem (k, v) {
      return `${k}: '${v}',`
    },
    format (str) {
      return `var __GLOBAL_VAR = {\n${str}\n}`
    }
  }
}

function hex2rgb (hex, op) {
  let sColor = hex.toLowerCase()
  // 十六进制颜色值的正则表达式
  const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/
  // 如果是16进制颜色
  if (sColor && reg.test(sColor)) {
    if (sColor.length === 4) {
      let sColorNew = '#'
      for (let i = 1; i < 4; i++) {
        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1))
      }
      sColor = sColorNew
    }
    // 处理六位的颜色值
    const sColorChange = []
    for (var i = 1; i < 7; i += 2) {
      sColorChange.push(parseInt('0x' + sColor.slice(i, i + 2)))
    }
    return `rgba(${sColorChange.join(',')}, ${op})`
  }
  return sColor
}

const dealInput = async (str) => {
  const { key: getKey, linearGradient: getLinearGradient, formatItem, format } = out[type || 'css']
  const arr = str.split('\n')
  const transStr = arr.map(x => {
    if (x.startsWith('#')) {
      return `/*${x.substr(1)}*/`
    }
    const xArr = x.split('=')
    if (xArr.length === 2) {
      const k = getKey(xArr[0])
      let v = xArr[1]
      let vArr = []
      if (
        (vArr = v.split(' ')) &&
        vArr.length === 2 &&
        /%$/.test(v)
      ) {
        // 处理 hex 百分比色值
        v = hex2rgb(vArr[0], vArr[1].replace('%', '') / 100)
      } else if (
        (vArr = v.split('-')) &&
        vArr.length === 2 &&
        vArr[0].startsWith('#') &&
        vArr[1].startsWith('#')
      ) {
        // 处理渐变色
        v = getLinearGradient ? getLinearGradient(vArr) : `linear-gradient(${vArr[0]}, ${vArr[1]})`
      } else if (v.includes('n')) {
        // 处理 * / 操作符计算
        const base = 1
        if (v.includes('*')) {
          v = v.split('*').find(x => x.trim() !== 'n') * base
        } else if (v.includes('/')) {
          v = base / v.split('/').find(x => x.trim() !== 'n')
        } else {
          v = base
        }
      } else if (k.includes('line')) {
        v = `${v}px`
      }
      return formatItem ? formatItem(k, v) : `${k}: ${v};`
    }
    return x
  }).join('\n  ')
  return format ? format(transStr) : `:root{\n${transStr}\n}`
}

dealInput(input).then(res => {
  fs.outputFile(out[type || 'css'].out, res).then(() => {
    console.log('操作完成')
  })
})
