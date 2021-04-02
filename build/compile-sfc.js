// https://github.com/youzan/vant/blob/2.x/packages/vant-cli/src/compiler/compile-sfc.ts
const fs = require('fs-extra')
const hash = require('hash-sum')
const { parse, compileTemplate, compileStyle } = require('@vue/component-compiler-utils')
const compiler = require('vue-template-compiler')
const path = require('path')
const consola = require('consola')
const EXPORT_WRAP = /(export default[\s\S]+?\{)/
const EXPORT = 'export default {'
const RENDER = 'export function render'
const VUE_RENDER = '__vue_render'
const STATIC_RENDER_FN = '__vue_staticRenderFns__'

function trim (code) {
  return code.replace(/\/\/\n/g, '').trim()
}

async function doParse (file, name) {
  const source = await fs.readFile(file, 'utf8')
  const descriptor = parse({
    source,
    compiler,
    filename: name,
    sourceRoot: '',
    needMap: false
  })

  if (descriptor.errors && descriptor.errors.length) {
    // message, loc: { start: line, column, offset }
    consola.error(`\n  [error]: ${descriptor.errors[0]}\n  ${file}\n`)
    process.exit(0)
  }

  const hasScoped = descriptor.styles.some((s) => s.scoped)
  const scopedId = hasScoped ? `data-v-${hash(source)}` : undefined
  // id: scopedId || hash(source),
  const template = compileTemplate({
    compiler,
    source: descriptor.template.content,
    isProduction: true
  })
  const render = template.code.replace('var render', `var ${VUE_RENDER}`)
    .replace('var staticRenderFns', `var ${STATIC_RENDER_FN}`)

  let EXPORT_PREFIX = trim(descriptor.script.content).match(EXPORT_WRAP)
  EXPORT_PREFIX = EXPORT_PREFIX ? EXPORT_PREFIX[0] : EXPORT

  let script = `${render.replace(RENDER, `function ${VUE_RENDER}`)}\n${EXPORT_PREFIX}\n  _compiled: true, \n  staticRenderFns: ${STATIC_RENDER_FN},\n  render: ${VUE_RENDER},`
  if (hasScoped) {
    script = script.replace(EXPORT_PREFIX, `${EXPORT_PREFIX}\n  _scopeId: ${scopedId ? `'${scopedId}'` : undefined},`)
  }

  script = trim(descriptor.script.content).replace(EXPORT_PREFIX, script)

  const less = scopedId ? descriptor.styles.map(x => {
    // 利用 vue 的 compileStyle 转化时也要注意变量的注入
    const res = compileStyle({
      id: scopedId,
      scoped: true,
      source: x.content,
      filename: '',
      preprocessLang: 'less',
      preprocessOptions: {
        modifyVars: {
          hack: `true; @import "${path.resolve(__dirname, '../xmi.theme.less')}";`
        }
      }
    })
    if (res.errors.length) {
      console.log(JSON.stringify(res.errors))
      consola.error(`组件 ${file} less scoped 转化报错.`)
      process.exit(0)
    } else {
      return res.code
    }
  }) : descriptor.styles.map(x => x.content)

  return {
    script,
    less: less.join('\n')
  }
}

module.exports = {
  doParse
}
