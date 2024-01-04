import Taro from '@tarojs/taro'

/**
 * https://nervjs.github.io/taro-docs/docs/apis/open-api/user-info/getUserProfile
 * 获取用户信息 每次请求都会弹出授权窗口
 *
 */
export function getUserProfile(): Promise<Taro.getUserProfile.SuccessCallbackResult> {
  return new Promise((resolve, reject) => {
    if (Taro.getUserProfile) {
      Taro.getUserProfile({
        desc: '用于完善会员资料',
        success: data => {
          resolve(data)
        },
        fail: err => {
          console.error(err, 'getUserProfile api fail')
          reject(err)
        }
      })
    } else {
      Taro.showToast({
        title: '当前客户端版本过低',
        icon: 'none',
        duration: 2000
      })
      reject()
    }
  })
}

/**
 * https://nervjs.github.io/taro-docs/docs/apis/open-api/user-info/getUserInfo
 * 获取用户信息 用户已授权下调用
 *
 */
export function getUserInfo(): Promise<Taro.getUserInfo.SuccessCallbackResult> {
  return new Promise((resolve, reject) => {
    if (Taro.getUserInfo) {
      Taro.getUserInfo({
        success: data => {
          resolve(data)
        },
        fail: err => {
          console.error(err, 'getUserInfo api fail')
          reject(err)
        }
      })
    } else {
      Taro.showToast({
        title: '当前客户端版本过低',
        icon: 'none',
        duration: 2000
      })
      reject()
    }
  })
}
/**
 * https://nervjs.github.io/taro-docs/docs/apis/open-api/login/
 * 获取登录凭证（code）
 * @returns promise<code>
 */
export function getLoginCode(): Promise<string> {
  return new Promise((resolve, reject) => {
    Taro.login({
      success: res => {
        if (res.code) {
          resolve(res.code)
        } else {
          reject(res.errMsg)
          console.error('login fail!!!', res.errMsg)
        }
      }
    })
  })
}

/**
 * https://nervjs.github.io/taro-docs/docs/apis/open-api/login/checkSession
 * 检查登录态是否过期
 */
export function checkSession() {
  Taro.checkSession({
    success: () => {
      // session_key 未过期，并且在本生命周期一直有效
    },
    fail: () => {
      // session_key 已经失效，需要重新执行登录流程
      getLoginCode() // 重新登录
    }
  })
}
