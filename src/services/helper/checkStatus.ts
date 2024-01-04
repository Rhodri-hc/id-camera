import Taro from '@tarojs/taro'

/**
 * @description: 校验网络请求状态码
 * 注释掉的错误码改成错误modal提示
 * @param {Number} status
 */
export const checkStatus = (status: number) => {
  const map = {
    // 400: '请求失败！请您稍后重试',
    401: '未登录，请先登录！',
    403: '登录失效！请您重新登录'
    // 404: '你所访问的资源不存在！',
    // 405: '请求方式错误！请您稍后重试',
    // 408: '请求超时！请您稍后重试',
    // 500: '服务异常！',
    // 502: '服务异常！',
    // 503: '服务异常！'
  }

  map[status] &&
    Taro.showToast({
      icon: 'none',
      title: map[status],
      duration: 3000
    })
}
