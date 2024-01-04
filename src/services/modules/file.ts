import request, { RequestReturns } from '@/services'
import Taro from '@tarojs/taro'

/** 文件上传 */
export const fileUpload = (data: { file: any; contentType?: string }) => {
  return request.post(`/api/v1/id-photo/management/upload`, data.file, {
    contentType: data.contentType
    // contentType: 'application/x-www-form-urlencoded'
  })
  // Taro.request({
  //   method: 'POST',
  //   url: 'https://test.thousand-sunny.cn/api/v1/id-photo/management/upload',
  //   header: {
  //     'content-type': data.contentType
  //     // 'content-type': 'application/x-www-form-urlencoded'
  //   },
  //   // data: { file: data.file }
  //   data: data.file
  // })
}
