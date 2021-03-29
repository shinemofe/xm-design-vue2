// https://github.com/youzan/vant/blob/2.x/packages/vant-cli/src/compiler/compile-sfc.ts
const fs = require('fs-extra')
const hash = require('hash-sum')
const { parse, compileTemplate, compileStyle } = require('@vue/component-compiler-utils')
const compiler = require('vue-template-compiler')
const consola = require('consola')
// const componentNormalizer = require('vue-loader/lib/runtime/componentNormalizer')
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

  let script = `${render.replace(RENDER, `function ${VUE_RENDER}`)}\n${EXPORT}\n  _compiled: true, \n  staticRenderFns: ${STATIC_RENDER_FN},\n  render: ${VUE_RENDER},`
  if (hasScoped) {
    script = script.replace(EXPORT, `${EXPORT}\n  _scopeId: ${scopedId ? `'${scopedId}'` : undefined},`)
  }

  script = trim(descriptor.script.content).replace(EXPORT, script)

  const less = scopedId ? descriptor.styles.map(x => {
    return compileStyle({
      id: scopedId,
      scoped: true,
      source: x.content,
      filename: '',
      preprocessLang: 'less',
    }).code
  }) : descriptor.styles.map(x => x.content)

  return {
    script,
    less: less.join('\n')
  }
}

module.exports = {
  doParse
}
