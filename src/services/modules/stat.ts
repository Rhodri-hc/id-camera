import request from '@/services'

/**
 * 埋点
 */
export const report = data => {
  return request.put(`/stat-api/stat/log`, data, { isShowLoading: false })
}
