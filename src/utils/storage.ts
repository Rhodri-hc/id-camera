import Taro from '@tarojs/taro'
// import { P_ID } from '@/constants/common'
import { pollingSync } from '@/utils/common'

export const Local = {
  setKey(key: string) {
    // return `${P_ID}_${key}`
    // return `${P_ID}_${key}`
    return `23_${key}`
  },
  async pollingGet<T>(key: string) {
    let content = await pollingSync<T>(() => {
      let content: any = void 0
      try {
        content = JSON.parse(Taro.getStorageSync(Local.setKey(key))) as T
        return [false, content]
      } catch (e) {
        console.log('e', e)
        return [true, content]
      }
    })
    return content
  },
  get<T = any>(key: string): T {
    return JSON.parse(Taro.getStorageSync(Local.setKey(key)) || '{}')
  },
  set<T>(key: string, val: T) {
    Taro.setStorageSync(Local.setKey(key), JSON.stringify(val))
  }
}
