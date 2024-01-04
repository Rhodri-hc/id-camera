import { isFunction } from './is'

export function spacing(count, part, ext) {
  return iteration(0, count, 1, part, 'px', ext)
}

export function iteration(min, max, step, part, unit, ext) {
  const result = {}
  unit = unit || ''
  for (let i = min; i <= max; i += step) result[i] = `${+(part * i).toFixed(3)}${unit}`
  ext?.forEach(val => (result[+(val / part).toFixed(3)] = `${val}${unit}`))
  return result
}

export function borderWidth(count) {
  const result = { DEFAULT: '1px' }
  for (let i = 0; i <= count; i++) result[i] = `${i}px`
  return result
}
export function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue) {
      return `rgba(var(${variableName}), ${opacityValue})`
    }
    return `rgb(var(${variableName}))`
  }
}

// 颜色格式 hex 转 rgba
export function hexToRgb(bgColor) {
  const color = bgColor.slice(1) // 去掉'#'号
  const rgb = [
    parseInt('0x' + color.slice(0, 2)),
    parseInt('0x' + color.slice(2, 4)),
    parseInt('0x' + color.slice(4, 6))
  ]
  return rgb.toString()
}

export function fontSize(data, radio = 1.5) {
  return assign(data, (result, key, value) => {
    let data = typeof value === 'object' ? value : { value: value }
    data = { ...data, lineHeight: data.lineHeight || +(data.value * radio).toFixed(3) }
    value = `${data.value}px`
    const lineHeight = `${data.lineHeight}px`
    result[key] = [value, { lineHeight: lineHeight }]
    result[`${key}-pure`] = [value, { lineHeight: value }]
  })
}
export function assign(data, cb: any = null) {
  const items: any = []
  const result = expand(data, (result, key, value) => {
    const keys = key
      .split(',')
      .map(key => key.trim())
      .filter(key => key)
    keys.forEach(key => {
      if (!key) return
      if (cb) return cb(result, key, value)
      // 传函数，则在最后通过运行函数得到最终的值
      if (isFunction(value)) return items.push({ key: key, value: value })
      result[key] = value
    })
  })
  items.forEach(({ key: key, value: value }) => (result[key] = value(result, key)))
  return result
}

export function expand(data, cb) {
  return Object.entries(data).reduce((result, items) => {
    const key = items[0]
    const value = items[1]
    cb(result, key, value)
    return result
  }, {})
}
