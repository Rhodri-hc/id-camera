export const toUpperFirstCase = (string: string): string => {
  return toUpperCase(string, 0, 1)
}

/**
 * @desc 大写某部分字符串
 * @param {number} start 需要调整的开始索引值
 * @param {number} end 需要调整的结束索引值
 */
export const toUpperCase = (string: string, start = 0, end: number = string.length): string => {
  const upper = string.slice(start, end).toUpperCase()
  const res = string.slice(0, start) + upper + string.slice(end, string.length)
  return res
}

export const toLowerFirstCase = (string: string): string => {
  return toLowerCase(string, 0, 1)
}

export const toLowerCase = (string: string, start = 0, end: number = string.length): string => {
  const upper = string.slice(start, end).toLowerCase()
  const res = string.slice(0, start) + upper + string.slice(end, string.length)
  return res
}

export function generateRandomFileName() {
  const timestamp = new Date().getTime() // 获取当前时间戳
  const randomString = Math.random().toString(36).substring(2, 8) // 生成随机字符串

  const fileName = `${timestamp}_${randomString}`
  return fileName
}
