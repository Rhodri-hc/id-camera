import request, { RequestReturns, API_PREFIX } from '@/services'
import type { IPaymentConfig } from '@/types/order'

/** 根据归因分组获取支付配置列表 */
export const getPaymentConfig = (data: { groupKey: string; type: string }) => {
  return request.get<IPaymentConfig>(`${API_PREFIX}/order/payment/config/list`, data)
}
