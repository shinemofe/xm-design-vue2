export const vw = num => /\d/.test(num) ? `${(num / 3.75).toFixed(2)}vw` : undefined
export const unitSize = param => /px/.test(param) ? param : vw(param)

export function install (name, options) {
  options.install = (vue) => {
    vue.component(name, options)
  }
}

export function componentWrap (name, option, functional) {
  const obj = {
    ...option,
    functional,
    name
  }
  install(name, obj)
  return obj
}
