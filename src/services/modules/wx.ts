import request from '@/services'
import { IJsWxPayParams, IJsWxPayResponse } from '@/types/wx'

/** 微信支付 */
export const wxPay = (data: IJsWxPayParams) => {
  return request.post<IJsWxPayResponse>(`/api/fortunetelling/pay/wechat/miniApp/jsPrepay`, data, {
    headers: {
      token: data.token
    }
  })
}
