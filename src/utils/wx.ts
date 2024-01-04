import Taro from '@tarojs/taro'

/**
 * @desc 微信小程序登录
 */
export const login = (): Promise<{ code: string; errMsg: string }> => {
  return new Promise((resolve, reject) => {
    Taro.login({
      success: function (res) {
        if (res.code) {
          // console.log('taro.login res: ', res)
          return resolve(res)
        } else {
          console.log('登录失败！' + res.errMsg)
          return reject(res)
        }
      }
    })
  })
}

/**
 * @desc 微信小程序支付
 */
export async function pay(params): Promise<{ message: string; data: any }> {
  return new Promise((resolve, reject) => {
    const requestParams: Taro.requestPayment.Option = {
      ...params,
      success: res => {
        resolve({ message: '支付成功', data: res })
      },
      fail: res => {
        reject({ message: '支付失败', data: res })
      }
    }
    Taro.requestPayment(requestParams)
  })
}

/**
 * @desc 获取用户授权设置
 * @param  function parameter
 */
export async function getSetting() {
  return new Promise((resolve, reject) => {
    Taro.getSetting({
      success: res => {
        resolve({ message: '获取用户授权设置成功', data: res })
      },
      fail: res => {
        reject({ message: '获取用户授权设置失败', data: res })
      }
    })
  })
}
/**
 * @desc 微信小程序获取用户授权
 */
export async function authorize(scope: string) {
  return new Promise((resolve, reject) => {
    Taro.authorize({
      scope,
      success: res => {
        resolve({ message: '获取用户授权成功', data: res })
      },
      fail: res => {
        reject({ message: '获取用户授权失败', data: res })
      }
    })
  })
}
