import Taro from '@tarojs/taro'
import { Local } from '@/utils/storage'
import getBaseUrl from './config/baseUrl'
import { interceptor } from './config/interceptor'

/** Taro.request(option) 返回值类型约束 */
type RequestReturnsType = string | Record<string, any> | ArrayBuffer

/** Taro.request(option) 返回值类型 */
export type RequestReturns<T extends RequestReturnsType> = Promise<
  Taro.request.SuccessCallbackResult<T>
>

/* 项目接口前缀 */
export const API_PREFIX = `/api/v1/id-photo`

Taro.addInterceptor(interceptor)

async function baseOptions<T extends string | Record<string, any> | ArrayBuffer>(
  params,
  options?: CustomRequest.Options,
  method: keyof CustomRequest.Method = 'GET'
): RequestReturns<T> {
  const { url, data } = params
  const contentType = options?.contentType || 'application/json;charset=UTF-8'
  const headers = options?.headers
  const userInfo = Local.get('userInfo')
  // const userInfo = JSON.parse(Taro.getStorageSync('userInfo') || '{}')

  const option = {
    url: getBaseUrl(url), // 地址
    data, // 传参
    method, // 请求方式
    timeout: 4000, // 超时时间
    isShowLoading: options?.isShowLoading ?? true, // 是否显示loading
    header: {
      'content-type': contentType,
      Phead: userInfo.pHead || '',
      'Ex-Head': userInfo.exHeader || '',
      token: userInfo.token || '',
      ...headers
    }
  }
  // 拦截器将中间的data层数据拦截了一层，尴尬的是，这里需要强转才能
  return Taro.request(option) as unknown as RequestReturns<T>
}

export default {
  get<T extends RequestReturnsType>(url: string, data?: any, options?: CustomRequest.Options) {
    const params = { url, data }
    return baseOptions<T>(params, options)
  },

  post<T extends RequestReturnsType>(url: string, data?: any, options?: CustomRequest.Options) {
    const params = { url, data }
    return baseOptions<T>(params, options, 'POST')
  },

  put<T extends RequestReturnsType>(url, data?: any, options?: CustomRequest.Options) {
    const params = { url, data }
    return baseOptions<T>(params, options, 'PUT')
  },

  delete<T extends RequestReturnsType>(url: string, data?: any, options?: CustomRequest.Options) {
    const params = { url, data }
    return baseOptions<T>(params, options, 'DELETE')
  }
}
