export function sortObjKeyToString(obj) {
  const searchParams = new URLSearchParams()
  // 将属性名按 ASCII 码顺序排序
  const sortedKeys = Object.keys(obj).sort((a, b) => a.localeCompare(b))
  for (const key of sortedKeys) {
    if (key === 'url') {
      console.log('key url')
      searchParams.set(key, decodeURIComponent(obj[key]))
    }
    searchParams.set(key, obj[key])
  }
  return searchParams.toString()
}

/**
 * @desc 轮询
 */
export function polling(cb: () => [boolean, any], duration: number) {
  let timer: undefined | number = void 0
  const _fn = () => {
    timer = setTimeout(() => {
      clearTimeout(timer)
      const [flag, result] = cb()
      // cb 返回 true, 继续轮询
      if (flag) {
        _fn()
        console.log('继续轮询')
      } else {
        return result
      }
      // return flag ? _fn() : result;
    }, duration)
  }
  return _fn()
}
/**
 * @desc 同步轮询
 */
export async function pollingSync<T>(cb: () => [boolean, T], duration: number = 1000): T {
  return new Promise(resolve => {
    const _fn = () => {
      const [flag, result] = cb()
      if (flag) {
        console.log('继续轮询')
        setTimeout(_fn, duration)
      } else {
        console.log('轮询结束')
        resolve(result)
      }
    }
    _fn()
  })
}
