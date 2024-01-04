export interface IJsWxPayParams {
  totalAmount?: string | number
  productId: number | string
  orderId: number | string
  pId: number
  param8: string
  from: string
  templateId: string
  tariffId: string
  advId: string
  param7: string // promotionid
  token: string
}

export interface IJsWxPayResponse {
  appid: string
  nonceStr: string
  pack: string
  paySign: string
  prepayId: string
  signType: keyof Taro.requestPayment.SignType
  timeStamp: string
}
